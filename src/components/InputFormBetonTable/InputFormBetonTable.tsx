import React from 'react';
import { useFormik } from 'formik';
import { Button, createStyles, makeStyles, MenuItem, Select, TableCell, TextField, Theme } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch } from 'react-redux';
import { setTableBeton } from '../../store/tender/tender-reducer';
import { v1 } from 'uuid';
import TableRow from '@material-ui/core/TableRow';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {},
        selectEmpty: {},
    }),
);
const concreteMobility = ['П1', 'П2', 'П3', 'П4'];
const car = ['Миксер', 'Самосвал'];

export const InputFormBetonTable = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            car: 'Миксер' as 'Миксер' | 'Самосвал',
            article: '',
            grade: '',
            mobility: 'П3',
            prize: '',
            numberOf: '',
            rememberMe: true,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.numberOf) {
                errors.numberOf = 'Введите количество, м3; ';
            }
            if (!values.grade) {
                errors.grade = 'Введите марку бетона; ';
            }
            if (!values.prize) {
                errors.prize = 'Введите цену бетона; ';
            }
            return errors;
        },
        onSubmit: values => {
            const beton = {
                article: values.article, car: values.car, id: v1(), grade: values.grade, mobility: values.mobility,
                prize: Number(values.prize), numberOf: Number(values.numberOf),
            };
            dispatch(setTableBeton(beton));
            formik.resetForm();
        },
    });

    const onSubmit = () => formik.handleSubmit();

    return (

        <TableRow>

            <TableCell align="center">
                <NumberFormat customInput={TextField} size={1} variant="outlined" name="article"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur} type="text"
                              value={formik.values.article} placeholder={'article'}/>
            </TableCell>
            <TableCell align="center">
                <FormControl variant="outlined" size={'small'}>
                    <Select
                        name="car"
                        value={formik.values.car}
                        onChange={formik.handleChange}
                        label="d"
                    >
                        {car.map(m => <MenuItem value={m}>{m}</MenuItem>)}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <TextField size="small" variant="outlined" name="grade" onChange={formik.handleChange}
                           onBlur={formik.handleBlur} type="text" error={!!formik.errors.grade}
                           value={formik.values.grade} placeholder={'Марка бетона'}/>

            </TableCell>
            <TableCell>
                <FormControl variant="outlined" size={'small'}>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        name="mobility"
                        value={formik.values.mobility}
                        onChange={formik.handleChange}
                        label="П"
                    >
                        {concreteMobility.map(m => <MenuItem value={m}>{m}</MenuItem>)}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <NumberFormat customInput={TextField} size={1} variant="outlined" name="numberOf"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur} error={!!formik.errors.numberOf}
                              value={formik.values.numberOf} placeholder={'количество, м3'}/>
            </TableCell>
            <TableCell>
                <NumberFormat customInput={TextField} size={1} variant="outlined" name="prize"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur} error={!!formik.errors.prize}
                              value={formik.values.prize} placeholder={'Цена'}/>
            </TableCell>
            {formik.touched.numberOf && formik.errors.numberOf ?
                <div style={{ color: 'red' }}> {formik.errors.numberOf} </div> : null}
            {formik.touched.article && formik.errors.article ?
                <div style={{ color: 'red' }}> {formik.errors.article} </div> : null}
            {formik.touched.grade && formik.errors.grade ?
                <div style={{ color: 'red' }}> {formik.errors.grade} </div> : null}
            {formik.touched.prize && formik.errors.prize ?
                <div style={{ color: 'red' }}> {formik.errors.prize} </div> : null}
            <TableCell>
                <div><Button onClick={onSubmit} variant="contained" color="primary">ADD</Button></div>
            </TableCell>
        </TableRow>

    );
};

type FormikErrorType = {
    article?: string
    mobility?: string
    grade?: string
    prize?: string
    numberOf?: string
    rememberMe?: boolean
}