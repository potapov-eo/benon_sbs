import React from 'react';
import style from './PageOne.module.css';
import { TradingTermsForm } from '../../components/TradingTermsForm/TradingTermsForm';
import { ExpensesForm } from '../../components/ExpensesForm/ExpensesForm';
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import ResultTable from '../../components/ResultTable/ResultTable';
import { InputTableBeton } from '../../components/InputTableBeton/InputTableBeton';
import s from '../../components/ExpensesForm/ExpensesForm.module.css';

const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            inputMarginDense: {
                padding: '2px',
                paddingTop: '2px',
                paddingBottom: '2px',
            },
            input: {
                height: '25px',
                padding: '2px',
            },
        },
        MuiTextField: {
            root: {
                padding: '2px',
                width: 100,
            },
        },
        MuiSelect: {
            root: {
                display: 'flex',
                alignItems: 'center',
            },
            selectMenu: {
                height: '25px',
            },
        },
        MuiIconButton: {
            root: {
                padding: '2px',
            },
        },
        MuiTableRow: {
            root: {
                height: '40px',
            },
        },
        MuiTableCell: {

            root: {
                height: '30px',
                padding: 2,
                textAlign: 'center',
                border:"1px solid black",
                borderTopColor: "black",
                borderBottomColor:"black"
            },
        },
    },
});

export const PageOne = () => {

    return (
        <><ThemeProvider theme={theme}>
            <div>
                <InputTableBeton/>
                <div className={style.tradingFormBlock}>
                <TradingTermsForm/>
                <ExpensesForm/>
                </div>
                <Button variant="contained" color="primary">Рассчитать</Button>
                <ResultTable/>
            </div>
        </ThemeProvider>
        </>
    );
};

