import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { selectorTableBetons } from '../../store/tender/tender-selector';
import { InputFormBetonTable } from '../InputFormBetonTable/InputFormBetonTable';
import { InputTableBetonRow } from '../InputTableBetonRow/InputTableBetonRow';

const useStyles = makeStyles({
    table: {
        minWidth: 1100,
    },
});

export const InputTableBeton = () => {
    const classes = useStyles();
    const betons = useSelector(selectorTableBetons);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Артикл</TableCell>
                        <TableCell align="center">Доставка</TableCell>
                        <TableCell align="center">Марка бетона</TableCell>
                        <TableCell align="center">Подвижность</TableCell>
                        <TableCell align="center">Количество, м3</TableCell>
                        <TableCell align="center">Цена, без НДС</TableCell>
                        <TableCell align="center"> Изменить</TableCell>
                    </TableRow>

                </TableHead>

                <TableBody>
                    {betons?.map((beton) => (
                        <InputTableBetonRow key={beton.id} beton={beton}/>
                    ))}
                    <InputFormBetonTable/>
                </TableBody>

            </Table>

        </TableContainer>

    );
};

