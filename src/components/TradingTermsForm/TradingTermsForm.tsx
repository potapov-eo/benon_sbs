import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import s from './TradingTermsForm.module.css';
import { setTradingProperty } from '../../store/tender/tender-reducer';
import { selectorTradingProperties } from '../../store/tender/tender-selector';

export const TradingTermsForm = () => {
    const dispatch = useDispatch();
    const [isActiveTenderForm, setIsActiveTenderForm] = useState<boolean>(true);
    const TradingProperties = useSelector(selectorTradingProperties);
    const { allTransportPrice, downTime, downTimePrice, minimumLoad } = TradingProperties;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            allTransportPrice: allTransportPrice, //  сумма выделяемая на транспорт, руб
            downTime: downTime, // включенное время простоя, ч
            downTimePrice: downTimePrice, // стоимость сверх нормативного времени простоя, руб/час
            minimumLoad: minimumLoad, // минимальная загрузка, м3
        },
        onSubmit: values => {
            const TradingProperty = {
                downTime: Number(values.downTime), downTimePrice: Number(values.downTimePrice),
                allTransportPrice: Number(values.allTransportPrice), minimumLoad: Number(values.minimumLoad),
            };
            dispatch(setTradingProperty(TradingProperty));
            formik.resetForm();
            setIsActiveTenderForm(false);
        },
    });
    const ActiveTenderForm = () => {
        setIsActiveTenderForm(true);
    };
    return (
        <form onSubmit={formik.handleSubmit} className={s.tradingTermsFormBlock}>
            <h2>Условия Торгов</h2>
            <div className={s.formLine}>
                <div>Общая сумма выделяемая на транспорт, руб</div>
                {isActiveTenderForm ?
                    < NumberFormat customInput={TextField} variant="outlined" name="allTransportPrice"
                                   onChange={formik.handleChange}
                                   value={formik.values.allTransportPrice}
                                   placeholder={'сумма, руб'}/> : allTransportPrice}
            </div>
            <div className={s.formLine}>
                <div>включенное время простоя, ч</div>
                {isActiveTenderForm ?
                    <NumberFormat disabled={true} customInput={TextField} variant="outlined" name="downTime"
                                  onChange={formik.handleChange}
                                  value={formik.values.downTime}
                                  placeholder={'время, ч'}/> : downTime}
            </div>
            <div className={s.formLine}>
                <div> стоимость сверх нормативного времени простоя, руб/час</div>
                {isActiveTenderForm ?
                    <NumberFormat disabled={true} customInput={TextField} variant="outlined" name="downTimePrice"
                                  onChange={formik.handleChange}
                                  type="text" value={formik.values.downTimePrice}
                                  placeholder={'руб/час'}/> : downTimePrice}
            </div>
            <div className={s.formLine}>
                <div>минимальная загрузка, м3</div>
                {isActiveTenderForm ?
                    <NumberFormat disabled={true} customInput={TextField} variant="outlined" name="minimumLoad"
                                  onChange={formik.handleChange}
                                  type="text" value={formik.values.minimumLoad} placeholder={'m3'}/> : minimumLoad}
            </div>
            <div className={s.saveButton}>
                {isActiveTenderForm && < Button type="submit" variant="contained" color="primary">SAVE</Button>}
                {!isActiveTenderForm && < Button onClick={ActiveTenderForm} variant="contained"
                                                 color="primary">Change</Button>}
            </div>
        </form>

    );
};

