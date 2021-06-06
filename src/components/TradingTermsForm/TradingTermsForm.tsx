import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
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
        validate: (values) => {
            const errors: FormikErrorType = {};
            /* if (!/^[0-9]+$/.test(values.numberOf)) {
                 errors.numberOf = 'Введите количество м3 в правильном формате';
                        }*/
            return errors;
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
const ActiveTenderForm = () => {debugger
    setIsActiveTenderForm(true);
    debugger
}

    return (
        <form  onSubmit={formik.handleSubmit}  >
            <h2>Условия Торгов</h2>
            <div className={s.formLine}>
                <div>Общая сумма выделяемая на транспорт, руб</div>
                {isActiveTenderForm ?
                    < NumberFormat customInput={TextField} size={1} variant="outlined" name="allTransportPrice"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.allTransportPrice}
                                   placeholder={'сумма, руб'}/> : allTransportPrice}
            </div>
            <div className={s.formLine}>
                <div>включенное время простоя, ч</div>
                {isActiveTenderForm ? <NumberFormat customInput={TextField} size={1} variant="outlined" name="downTime"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur} type="text"
                                                    value={formik.values.downTime}
                                                    placeholder={'время, ч'}/> : downTime}
            </div>
            <div className={s.formLine}>
                <div> стоимость сверх нормативного времени простоя, руб/час</div>
                {isActiveTenderForm ?
                    <NumberFormat customInput={TextField} size={1} variant="outlined" name="downTimePrice"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  type="text" value={formik.values.downTimePrice}
                                  placeholder={'руб/час'}/> : downTimePrice}
            </div>
            <div className={s.formLine}>
                <div>минимальная загрузка, м3</div>
                {isActiveTenderForm ?
                    <NumberFormat customInput={TextField} size={1} variant="outlined" name="minimumLoad"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  type="text" value={formik.values.minimumLoad} placeholder={'m3'}/> : minimumLoad}
            </div>
            {isActiveTenderForm && < Button type='submit' variant='contained' color='primary'>ADD</Button>}
            {!isActiveTenderForm &&  < Button onClick={ActiveTenderForm} variant="contained"
                           color="primary">Change</Button>}
        </form >

    );
};
type FormikErrorType = {}
