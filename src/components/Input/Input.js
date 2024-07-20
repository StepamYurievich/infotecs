import React, {useContext} from 'react';
import {Context} from "../../utils/Utils";
import classes from './Input.module.css'

const types = ['firstName', 'age', 'gender', 'phone', 'address.address'];

const Input = () => {

    const {
        setSearchName,
        searchName,
        setSearch,
        setSearchGender,
        search,
        items,
        searchGender,
        setSearchPhone,
        setSearchAddress,
        searchPhone,
        searchAddress,
    } = useContext(Context)

    return (
        <div className={classes.container}>
            {items === types[0]
                ?
                    <input type="text"
                           onChange={(e) => {
                               setSearchName(e.target.value);
                           }}
                           value={searchName}
                           placeholder="Поиск по имени..."
                    />
                : ''}
            {items === types[1]
                ? <input placeholder={"Поиск по возрасту..."}
                         onChange={(e) => {
                             setSearch(e.target.value)
                         }}
                         value={search}
                         type='number'/>
                : ''}
            {items === types[2]
                ? <input placeholder={"Поиск по полу..."}
                         onChange={(e) => {
                             setSearchGender(e.target.value)
                         }}
                         value={searchGender}
                         type='text'/>
                : ''}
            {items === types[3]
                ? <input placeholder={"Поиск по номеру телефона..."}
                         onChange={(e) => {
                             setSearchPhone(e.target.value)
                         }}
                         value={searchPhone}
                         type='tel'/>
                : ''}
            {/*Поиск только по номеру дома и улице*/}
            {items === types[4]
                ? <input placeholder={"Поиск по адресу..."}
                         onChange={(e) => {
                             setSearchAddress(e.target.value)
                         }}
                         value={searchAddress}
                         type='text'/>
                : ''}
        </div>
    );
};

export default Input;