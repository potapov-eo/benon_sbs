import React from 'react';
import style from './PageOne.module.css';
import { TradingTermsForm } from '../../components/TradingTermsForm/TradingTermsForm';
import { ExpensesForm } from '../../components/ExpensesForm/ExpensesForm';
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import ResultTable from '../../components/ResultTable/ResultTable';
import { InputTableBeton } from '../../components/InputTableBeton/InputTableBeton';

const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput:{
            inputMarginDense:{
                padding:"2px",
                paddingTop:"2px",
                paddingBottom:"2px"
            },
            input: {
                height:"30px",
                padding:"2px"
            }
        },
        MuiTextField: {
            root: {
                padding: "2px",
                width:100
            },
        },
        MuiSelect: {
            selectMenu: {
               height:"30px"
            },
        },
        MuiIconButton:{
            root: {
                padding:"2px"
            }
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
                textAlign:"center"
            },
        },
    },
});

export const PageOne = () => {

    return (
        <><ThemeProvider theme={theme}>
            <div className={style.xxx}>
                <InputTableBeton/>
                <TradingTermsForm/>
                <ExpensesForm/>
                <Button variant="contained" color="primary">Рассчитать</Button>
                <ResultTable/>
            </div>
        </ThemeProvider>
        </>
    );
};

