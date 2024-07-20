import React, {useContext} from 'react';
import {Context} from "../../utils/Utils";
import classes from '../../utils/ButtonsSort/Buttons.module.css'

const
    Sort = () => {
        const {
            onClickList
        } = useContext(Context);
        const type = [
            {item: 'Возрастанию', name: 'asc'},
            {item: 'Убыванию', name: 'desc'},
            {item: 'По умолчанию', name: ''},
        ]

        return (
            <div className={classes.container}>
                <div>
                    <span>
                        {type.map((item, index) => (
                            <button key={index}
                                    onClick={() => {
                                        onClickList(item)
                                    }
                                    }>
                                {item.item}
                            </button>
                        ))}
                    </span>
                </div>
            </div>
        );
    };

export default Sort;