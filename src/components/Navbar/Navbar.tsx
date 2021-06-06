import React from 'react'
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import { NavLink } from 'react-router-dom';
import { PATH } from '../../routes/Routes';
import style from "./Navbar.module.css";

export const Navbar = () => {


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <div className={style.nav}>
                    <span>
                <NavLink className={style.NavLink} to={PATH.PAGE_ONE}>Калькулятор</NavLink>
            </span>
                        <span>
                <NavLink className={style.NavLink} to={PATH.PAGE_TWO}>CONVERTER</NavLink>
            </span>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
