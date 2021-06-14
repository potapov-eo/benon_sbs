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
        minWidth: 650,
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
                        /* <TableRow key={beton.id}>
                             <TableCell align="center">
                                 <EditableSpan value={beton.id} id={beton.id} property={'article'}
                                               onChange={ChangeBeton}/>
                             </TableCell>
                             <TableCell align="center">
                                 <EditableSpan value={beton.car} id={beton.id} property={'car'} onChange={ChangeBeton}/>
                             </TableCell>
                             <TableCell align="center">
                                 <EditableSpan value={beton.grade} id={beton.id} property={'grade'}
                                               onChange={ChangeBeton}/>
                             </TableCell>
                             <TableCell align="center">
                                 <EditableSpan value={beton.mobility} id={beton.id} property={'mobility'}
                                               onChange={ChangeBeton}/>
                             </TableCell>
                             <TableCell align="center">
                                 <EditableSpan value={beton.numberOf} id={beton.id} property={'numberOf'}
                                               onChange={ChangeBeton}/>
                             </TableCell>
                             <TableCell align="center">
                                 <EditableSpan value={beton.prize} id={beton.id} property={'prize'}
                                               onChange={ChangeBeton}/>
                             </TableCell>
                             <TableCell align="center"  >
                                 <div className={style.change}>
                                 <IconButton onClick={() => removeBeton(beton.id)}>
                                     <Delete/>
                                 </IconButton>
                                 <IconButton onClick={() => removeBeton(beton.id)}>
                                     <EditIcon/>
                                 </IconButton>
                                 </div>
                             </TableCell>
                         </TableRow>*/
                    ))}
                    <InputFormBetonTable/>
                </TableBody>

            </Table>

        </TableContainer>
    );
};
export type propertyType = 'grade' | 'mobility' | 'prize' | 'numberOf' | 'car' | 'article'
