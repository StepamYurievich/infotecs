import React, {useContext} from "react";
import {Context} from "./Utils";
import classes from './ButtonsSort/Buttons.module.css'

export const ButtonUtils = () => {
    const {removeItemsOnInput, setItems} = useContext(Context);

    const types = [
        {item: 'firstName', name: 'ФИО'},
        {item: 'age', name: 'Возраст'},
        {item: 'gender', name: 'Пол'},
        {item: 'phone', name: 'Телефон'},
        {item: 'address.address', name: 'Адрес'},
    ]
    return (
        <>
            {
                types.map((data, index) => (
                    <th className={classes.search} key={index}>
                        {data.name}
                        <button
                            onClick={() => {
                                removeItemsOnInput()
                                setItems(data.item)
                            }}></button>
                    </th>
                ))
            }
        </>
    )
}