import React from 'react';
import { useFormik } from 'formik';
import { Button, MenuItem, Select, TableCell, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch } from 'react-redux';
import { ChangeTableBeton, setTableBeton, TableBetonType } from '../../store/tender/tender-reducer';
import { v1 } from 'uuid';
import TableRow from '@material-ui/core/TableRow';
import NumberFormat from 'react-number-format';

const concreteMobility = ['П1', 'П2', 'П3', 'П4'];
const carArr = ['Миксер', 'Самосвал'];
export type InputFormBetonTableType = {
    beton?: TableBetonType
    changeType?: 'Change' | 'Add'
    setIsChangeBeton?:(isChangeBeton:boolean)=>void
}
export const InputFormBetonTable = ({
                                        beton = {
                                            car: 'Миксер', article: '', grade: '',
                                            mobility: 'П3', prize: 0, numberOf: 0, id: '',
                                        }, changeType = 'Add', setIsChangeBeton
                                    }: InputFormBetonTableType) => {

    const { car, article, grade, mobility, prize, numberOf, id } = beton;
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            car: car as 'Миксер' | 'Самосвал',
            article: article,
            grade: grade,
            mobility: mobility,
            prize: prize,
            numberOf: numberOf,
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
                article: values.article,
                car: values.car,
                id: changeType === 'Add' ? v1() : id,
                grade: values.grade,
                mobility: values.mobility,
                prize: Number(values.prize),
                numberOf: Number(values.numberOf),
            };
            if(changeType === 'Add') { dispatch(setTableBeton(beton)) }else {
                dispatch(ChangeTableBeton(beton));
                if(setIsChangeBeton ) setIsChangeBeton(false) ;
            }
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
                        {carArr.map(m => <MenuItem value={m}>{m}</MenuItem>)}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <TextField size="small" variant="outlined" name="grade" onChange={formik.handleChange}
                           onBlur={formik.handleBlur} type="text" error={!!formik.errors.grade}
                           value={formik.values.grade} placeholder={'Марка бетона'}/>
                {formik.touched.grade && formik.errors.grade ?
                    <div style={{ color: 'red' }}> {formik.errors.grade} </div> : null}
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
                {formik.touched.numberOf && formik.errors.numberOf ?
                    <div style={{ color: 'red' }}> {formik.errors.numberOf} </div> : null}
            </TableCell>
            <TableCell>
                <NumberFormat customInput={TextField} size={1} variant="outlined" name="prize"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur} error={!!formik.errors.prize}
                              value={formik.values.prize} placeholder={'Цена'}/>
                {formik.touched.prize && formik.errors.prize ?
                    <div style={{ color: 'red' }}> {formik.errors.prize} </div> : null}
            </TableCell>

            <TableCell>
                <div><Button onClick={onSubmit} variant="contained" color="primary">{(changeType === 'Add')?"ADD":"Change"}</Button></div>
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
type concreteMobilityType = 'П1' | 'П2' | 'П3' | 'П4'
