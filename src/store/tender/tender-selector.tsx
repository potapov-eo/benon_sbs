import {AppRootStateType} from "../store";
import { TableBetonType, TradingPropertyType } from './tender-reducer';


export const selectorTableBetons = (state: AppRootStateType): TableBetonType[]|null => state.tender.tableBetons
export const selectorTradingProperties = (state: AppRootStateType): TradingPropertyType => state.tender.tradingProperty
export const selectorTransportPrice = (state: AppRootStateType): number => state.tender.expenses.transportPrice
export const selectorDiscount = (state: AppRootStateType): number => state.tender.expenses.discount

