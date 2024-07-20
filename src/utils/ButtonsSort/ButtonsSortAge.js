import React, {useContext} from 'react';
import {Context} from "../Utils";
import classes from "./Buttons.module.css";
import Sort from "../../components/sort/Sort";

const ButtonsSortAge = () => {
    const {openAge, setOpenAge, setOpenName ,setOpenGender, setOpenAddress} = useContext(Context)
    //При клике на другие компоненты сортировки действующа закрывается
    const onClickOpenAge = () => {
        setOpenAge(!openAge)
        setOpenName(false)
        setOpenGender(false)
        setOpenAddress(false)
    }
    return (
        <>
            <div  className={classes.name}>
                <button onClick={onClickOpenAge}>Сортировка
                </button>
                {
                    openAge
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

export default ButtonsSortAge;