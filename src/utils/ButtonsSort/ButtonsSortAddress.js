import React, {useContext} from 'react';
import {Context} from "../Utils";
import classes from "./Buttons.module.css";
import Sort from "../../components/sort/Sort";

const ButtonsSortAddress = () => {
    const {openAddress,setOpenAddress,setOpenName,setOpenGender,setOpenAge} = useContext(Context)
    //При клике на другие компоненты сортировки действующа закрывается
    const onClickOpenAddress = () => {
        setOpenAddress(!openAddress)
        setOpenName(false)
        setOpenAge(false)
        setOpenGender(false)
    }

    return (
        <>
            <div className={classes.name}>
                <button onClick={onClickOpenAddress}>Сортировка
                </button>
                {
                    openAddress
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

export default ButtonsSortAddress;