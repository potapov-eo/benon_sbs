import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch } from 'react-redux';
import { Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { removeTableBeton, TableBetonType } from '../../store/tender/tender-reducer';
import EditIcon from '@material-ui/icons/Edit';
import style from './InputTableBetonRow.module.css';
import { InputFormBetonTable } from '../InputFormBetonTable/InputFormBetonTable';

export type InputTableBetonRowType = {
    beton: TableBetonType
}

export const InputTableBetonRow = ({ beton }: InputTableBetonRowType) => {
    const [isChangeBeton, setIsChangeBeton] = useState<boolean>(false);
    const dispatch = useDispatch();
    const removeBeton = (id: string) => {
        dispatch(removeTableBeton(id));
    };
    const ChangeBeton = (id: string) => {
        setIsChangeBeton(true);
    };

    return (<>
            {!isChangeBeton ? <TableRow key={beton.id}>
                    {/*<TableCell align="center" style={{ padding: 3 }}>*/}
                    <TableCell align="center">
                        {beton.id}
                    </TableCell>
                    <TableCell align="center">
                        {beton.car}
                    </TableCell>
                    <TableCell align="center">
                        {beton.grade}
                    </TableCell>
                    <TableCell align="center">
                        {beton.mobility}
                    </TableCell>
                    <TableCell align="center">
                        {beton.numberOf}
                    </TableCell>
                    <TableCell align="center">
                        {beton.prize}
                    </TableCell>
                    <TableCell align="center">
                        <div className={style.change}>
                            <IconButton onClick={() => removeBeton(beton.id)}>
                                <Delete/>
                            </IconButton>
                            <IconButton onClick={() => ChangeBeton(beton.id)}>
                                <EditIcon/>
                            </IconButton>
                        </div>
                    </TableCell>
                </TableRow> :
                <InputFormBetonTable setIsChangeBeton={setIsChangeBeton} beton={beton} changeType={'Change'}/>}
        </>
    );
};

