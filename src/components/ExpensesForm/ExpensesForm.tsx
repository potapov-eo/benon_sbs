import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import s from './ExpensesForm.module.css';
import { setDiscount, setTransportPrice } from '../../store/tender/tender-reducer';
import { selectorDiscount, selectorTransportPrice } from '../../store/tender/tender-selector';

export const ExpensesForm = () => {
    const dispatch = useDispatch();
    const transportPrice = useSelector(selectorTransportPrice);
    const discount = useSelector(selectorDiscount);
    const discountHandleChange = (e: any) => {
        dispatch(setDiscount(Number(e.target.value)));
    };
    const transportPriceHandleChange = (e: any) => {
        dispatch(setTransportPrice(Number(e.target.value)));
    };

    return (
        < >
            <h2>Затраты</h2>
            <div className={s.formLine}>
                <div>возмещение транспорта, м/ч</div>

                < NumberFormat customInput={TextField} variant="outlined"
                               onChange={transportPriceHandleChange}
                               value={transportPrice}
                               placeholder={'сумма, руб'}/>
            </div>
            <div className={s.formLine}>
                <div>скидка, % </div>

                < NumberFormat customInput={TextField} variant="outlined"
                               onChange={discountHandleChange}
                               value={discount}
                               placeholder={'сумма, руб'}/>
            </div>

        </>
    );

};

