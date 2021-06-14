import { AppRootStateType } from '../store';
import { TableBetonType, TradingPropertyType } from './tender-reducer';
import { createSelector } from 'reselect';
import { round } from '../../utils/HelperFunctions';

export const selectorTableBetons = (state: AppRootStateType): TableBetonType[] | null => state.tender.tableBetons;
export const selectorTradingProperties = (state: AppRootStateType): TradingPropertyType => state.tender.tradingProperty;
export const selectorTransportPrice = (state: AppRootStateType): number => state.tender.expenses.transportPrice;
export const selectorDiscount = (state: AppRootStateType): number => state.tender.expenses.discount;

export const selectorTotalBetonNumber = createSelector(
    [selectorTableBetons],
    (tableBetons) => {
        return tableBetons?.reduce((res, b) => {
            return b.numberOf + res;
        }, 0);
    },
);
export const selectorOneTransportPrice = createSelector(
    [selectorTradingProperties, selectorTotalBetonNumber],
    (TradingProperties, TotalBetonNumber) => {
        return TradingProperties.allTransportPrice / (TotalBetonNumber ? TotalBetonNumber : 100000000000000000);
    },
);


export const selectorCalculateTableBetons = createSelector(
    [selectorTableBetons, selectorTransportPrice, selectorTradingProperties, selectorTotalBetonNumber, selectorDiscount, selectorOneTransportPrice],
    (tableBetons: any[] | null, transportPrice, tradingProperty, TotalBetonNumber, discount, OneTransportPrice) => {
        const ResultTableBetons = tableBetons?.map(b => {
            b.name = `${b.grade} ${b.mobility}`;
            b.transportPrize = round(transportPrice * 50/6 - tradingProperty.allTransportPrice / (TotalBetonNumber ? TotalBetonNumber : 1),2);  // затраты на транспорт
            b.discountPrize = round(b.prize * (1 - discount / 100) + b.transportPrize,2);          // цена со скидкой
            // и нашими затратами на
            // транспорт
            b.totalOnePrize = round(b.discountPrize + OneTransportPrice,2);               // // цена со скидкой и нашими
            // затратами
            // на транспорт + стоимость доставки за 1м (оплачиваемой поставщиком, сумма выдел на транспорт)
            b.totalAllPrize = round(b.totalOnePrize * b.numberOf,2);   // итого за марку без НДС
            b.totalAllPrizNDS = round(b.totalAllPrize * 1.2,2);         // итого за марку c НДС
            b.totalNDS = round(b.totalAllPrize/5,2)  // итого НДС
            b.NDS = round(b.discountPrize * 0.2,2);
            b.prizeNDS = round(b.discountPrize * 1.2,2);
            return b;
        });

        return ResultTableBetons;
    },
);

export type CalculateTableBetonsType =
    {
        name: string,                 // полное название бетона
        transportPrize: number,        // наши затраты на транспорт на 1м
        discountPrize: number,
        totalOnePrize: number,
        totalAllPrize: number,
        totalAllPrizNDS: number,
        totalNDS: number,
        NDS: number,
        prizeNDS: number,
        article: any,
        car: 'Миксер' | 'Самосвал'
        id: string,
        grade: string,
        mobility: string,
        prize: number,
        numberOf: number,
    }
