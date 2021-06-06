import React from 'react'
import style from "./PageOne.module.css";
import {InputFormBeton} from "../../components/InputFormBeton/InputFormBeton";
import InputTableBeton from "../../components/InputTableBeton/InputTableBeton";
import { TradingTermsForm } from '../../components/TradingTermsForm/TradingTermsForm';
import { ExpensesForm } from '../../components/ExpensesForm/ExpensesForm';


export const PageOne = () => {

    return (
        <>
            <div className={style.xxx}>
                <InputTableBeton/>
                {/*<InputFormBeton/>*/}
                <TradingTermsForm/>
                <ExpensesForm/>
            </div>
        </>
    )
}

