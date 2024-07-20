import React, {useContext} from 'react';
import classes from './Modal.module.css';
import {Context} from "../../utils/Utils";

const Modal = ({children}) => {
    const {closeModal,onCloseModal} = useContext(Context)

    if(!onCloseModal){
        return null
    }

    return (
        <div className={classes.modal} onClick={closeModal}>
            <div className={classes.modal__content}
                 onClick={(event)=>{
                     event.stopPropagation()
                 }}>
                <div className={classes.modal_body}>
                    <div className={classes.modal_body_items}>
                        <div>ФИО:</div>
                        <div>{children[1]}{' '}{children[2]}{' '}{children[3]}</div>
                    </div>
                    <div className={classes.modal_body_items}>
                        <div>Возраст:</div>
                        <div>{children[0]}</div>
                    </div>
                    <div className={classes.modal_body_items}>
                        <div>Адрес:</div>
                        <div>{children[4]}{','}{children[5]}</div>
                    </div>
                    <div className={classes.modal_body_items}>
                        <div>Рост:</div>
                        <div>{[children[6]]}</div>
                    </div>
                    <div className={classes.modal_body_items}>
                        <div>Вес:</div>
                        <div>{[children[7]]}</div>
                    </div>
                    <div className={classes.modal_body_items}>
                        <div>Номер телефона:</div>
                        <div>{[children[8]]}</div>
                    </div>
                    <div className={classes.modal_body_items}>
                        <div>Почта:</div>
                        <div>{[children[9]]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;