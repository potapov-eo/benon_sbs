import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Button, TextField } from '@material-ui/core';


export const TradingTermsForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            allTransportPrice: 0, //  сумма выделяемая на транспорт, руб
            downTime: 0, // включенное время простоя, ч
            downTimePrice: 0, // стоимость сверх нормативного времени простоя, руб/час
            minimumLoad: 2, // минимальная загрузка, м3

        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            /* if (!/^[0-9]+$/.test(values.numberOf)) {
                 errors.numberOf = 'Введите количество м3 в правильном формате';
             }
             if (!values.grade) {
                 errors.grade = 'Введите марку бетона';
             }
             if (!/^[0-9]+$/.test(values.prize)) {
                 errors.prize = 'Введите цену бетона в правильном формате';
             }*/
            return errors;
        },
        onSubmit: values => {


            /*    formik.resetForm();*/
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Условия Торгов</h2>
            <div>Общая сумма выделяемая на транспорт, руб
                <TextField size="small" variant="outlined" name="allTransportPrice" onChange={formik.handleChange}
                           onBlur={formik.handleBlur} type="number"
                           value={formik.values.allTransportPrice} placeholder={'сумма, руб'}/>
            </div>
            <div> включенное время простоя, ч
                <TextField size="small" variant="outlined" name="downTime" onChange={formik.handleChange}
                           onBlur={formik.handleBlur} type="text"
                           value={formik.values.downTime} placeholder={'время, ч'}/>
            </div>
            <div>  стоимость сверх нормативного времени простоя, руб/час
            <TextField size="small" variant="outlined" name="downTimePrice" onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       type="text" value={formik.values.downTimePrice} placeholder={'руб/час'}/>
            </div>
            <div> минимальная загрузка, м3
            <TextField size="small" variant="outlined" name="minimumLoad" onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       type="text" value={formik.values.minimumLoad} placeholder={'m3'}/>
            </div>
            {/*    {formik.touched.numberOf && formik.errors.numberOf ?
                <div style={{ color: 'red' }}> {formik.errors.numberOf} </div> : null}
            {formik.touched.article && formik.errors.article ?
                <div style={{ color: 'red' }}> {formik.errors.article} </div> : null}
            {formik.touched.grade && formik.errors.grade ?
                <div style={{ color: 'red' }}> {formik.errors.grade} </div> : null}
            {formik.touched.prize && formik.errors.prize ?
                <div style={{ color: 'red' }}> {formik.errors.prize} </div> : null}
*/}
            <div><Button type="submit" variant="contained" color="primary">ADD</Button></div>
        </form>

    );
};
type FormikErrorType = {
    allTransportPrice?: number
    downTime?: number
    downTimePrice?: number
    minimumLoad?: number
}
