import React, {useContext} from 'react';
import {Context} from "../Utils";
import classes from "./Buttons.module.css";
import Sort from "../../components/sort/Sort";

const ButtonsSortGender = () => {
    const {openGender, setOpenGender, setOpenName, setOpenAge, setOpenAddress} = useContext(Context)
    //При клике на другие компоненты сортировки действующа закрывается
    const onClickOpenGender = () => {
        setOpenGender(!openGender)
        setOpenName(false)
        setOpenAge(false)
        setOpenAddress(false)
    }
    return (
        <>
            <div className={classes.name}>
                <button onClick={onClickOpenGender}>Сортировка
                </button>
                {
                    openGender
                        ? <div>

                            {
                                <div className={classes.sort}>
                                    <Sort/>
                                </div>
                            }
                        </div> : ''
                }
            </div>
        </>
    )
};

export default ButtonsSortGender;