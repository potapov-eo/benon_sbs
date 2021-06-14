import React from 'react';
import style from './PageOne.module.css';
import InputTableBeton from '../../components/InputTableBeton/InputTableBeton';
import { TradingTermsForm } from '../../components/TradingTermsForm/TradingTermsForm';
import { ExpensesForm } from '../../components/ExpensesForm/ExpensesForm';
import { Button } from '@material-ui/core';
import ResultTable from '../../components/ResultTable/ResultTable';


export const PageOne = () => {

    return (
        <>
            <div className={style.xxx}>
                <InputTableBeton/>

                {/*<InputFormBeton/>*/}
                <TradingTermsForm/>
                <ExpensesForm/>
                <Button variant="contained" color="primary">Рассчитать</Button>
                <ResultTable/>
            </div>
        </>
    );
};

