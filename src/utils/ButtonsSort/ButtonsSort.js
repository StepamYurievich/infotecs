import React, {useContext} from 'react';
import classes from "./Buttons.module.css";
import Sort from "../../components/sort/Sort";
import {Context} from "../Utils";

const ButtonsSort = () => {

    const { openName, setOpenName,setOpenAge,setOpenAddress,setOpenGender} = useContext(Context)
    //При клике на другие компоненты сортировки действующа закрывается
    const onClickOpenName =()=> {
        setOpenName(!openName)
        setOpenAge(false)
        setOpenGender(false)
        setOpenAddress(false)
    }
    return (
        <>
            <div className={classes.name} >
                <button onClick={onClickOpenName}>Сортировка
                </button>
                {
                    openName
                        ? <div  >
                            {
                                <div className={classes.sort}>
                                    <Sort/>
                                </div>
                            }
                        </div> : ''
                }
            </div>
        </>
    );
};

export default ButtonsSort;