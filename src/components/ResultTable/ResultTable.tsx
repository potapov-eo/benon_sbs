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
import { selectorCalculateTableBetons } from '../../store/tender/tender-selector';

const useStyles = makeStyles({
    table: {
        minWidth: 1250,
    },
});


export default function ResultTable() {
    const classes = useStyles();
    const betons = useSelector(selectorCalculateTableBetons);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">№</TableCell>
                        <TableCell align="center">Марка бетона</TableCell>
                        <TableCell align="center">Количество, м3</TableCell>
                        <TableCell align="center">Прайс</TableCell>
                        <TableCell align="center">затраты на транспорт</TableCell>
                        <TableCell align="center">Цена со скидкой</TableCell> {/*  и включенным транспортом*/}
                        <TableCell align="center">НДС</TableCell>
                        <TableCell align="center">С НДС</TableCell>
                        <TableCell align="center">+ доставки</TableCell> {/* плюс  сумма кот выделели на транспорт*/}
                        <TableCell align="center"> итого</TableCell>
                        <TableCell align="center"> итого с НДС</TableCell>
                        <TableCell align="center"> итого НДС</TableCell>
                    </TableRow>

                </TableHead>

                <TableBody>

                    {betons?.map((beton, index) => (
                        <TableRow key={beton.id}>
                            <TableCell align="center">
                                {index + 1}
                            </TableCell>
                            <TableCell align="center">
                                {beton.name}
                            </TableCell>
                            <TableCell align="center">
                                {beton.numberOf}
                            </TableCell>
                            <TableCell align="center">
                                {beton.prize}
                            </TableCell>
                            <TableCell align="center">
                                {beton.transportPrize}
                            </TableCell>
                            <TableCell align="center">
                                {beton.discountPrize}
                            </TableCell>
                            <TableCell align="center">
                                {beton.NDS}
                            </TableCell>
                            <TableCell align="center">
                                {beton.prizeNDS}
                            </TableCell>
                            <TableCell align="center">
                                {beton.totalOnePrize}
                            </TableCell>
                            <TableCell align="center">
                                {beton.totalAllPrize}
                            </TableCell>
                            <TableCell align="center">
                                {beton.totalAllPrizNDS}
                            </TableCell>
                            <TableCell align="center">
                                {beton.totalNDS}
                            </TableCell>
                            <TableCell align="center">
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
