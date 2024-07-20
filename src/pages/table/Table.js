import React, {useContext, useState} from 'react';
import classes from './Table.module.css'

import Input from "../../components/Input/Input";
import Error from "../Error/Error";

import {Context} from "../../utils/Utils";
import {ButtonUtils} from "../../utils/buttonUtils";

import ButtonsSort from "../../utils/ButtonsSort/ButtonsSort";
import ButtonsSortAge from "../../utils/ButtonsSort/ButtonsSortAge";
import ButtonsSortGender from "../../utils/ButtonsSort/ButtonsSortGender";
import ButtonsSortAddress from "../../utils/ButtonsSort/ButtonsSortAddress";
import Modal from "../../components/Modal/Modal";
import error from "../Error/Error";


const Table = () => {

    const {
        columns,
        loading,
        setonCloseModal,
        information,
        handleInformation,
        error
    } = useContext(Context)

    return (
        <div>
            {error
                // Ошибка
                ? <Error/> :
                <div>
                    <div className={classes.inputs}>
                        <Input /* Инпут компонент поиска информации *//>
                    </div>
                    <table className={classes.table}>
                        <thead>
                        <tr>
                            <ButtonUtils/* Кнопка смены инпута *//>
                            <th>
                                <ButtonsSort/*Сортировка*//>
                            </th>
                            <th>
                                <ButtonsSortAge /*Сортировка*/ />
                            </th>
                            <th>
                                <ButtonsSortGender /*Сортировка*/ />
                            </th>
                            <th>

                            </th>
                            <th>
                                <ButtonsSortAddress /*Сортировка*/ />
                            </th>
                        </tr>
                        </thead>
                        {loading ? <tbody>
                            <tr>
                                <td>
                                    Loading...
                                </td>
                            </tr>
                            </tbody>
                            : <tbody>
                            {
                                columns.map((column, index) =>
                                    ( //При на жатии на строчку табблиццы появляется модалбное окно
                                        <tr onClick={() => {
                                            handleInformation(column)
                                            setonCloseModal(true)
                                        }} key={index}>
                                            <td>{column.firstName}{' '}{column.lastName}{' '}{column.maidenName}</td>
                                            <td>{column.age}</td>
                                            <td>{column.gender}</td>
                                            <td>{column.phone}</td>
                                            <td>{column.address.city}{','}{column.address.address}</td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>
                        }
                    </table>

                    <Modal /*Модальное окно*/>
                        {information}
                    </Modal>
                </div>

            }
        </div>

    )
        ;
};

export default Table;