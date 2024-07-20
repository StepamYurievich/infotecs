import React, {useEffect, useState} from "react";

export const Context = React.createContext()

const url = `https://dummyjson.com/users`
//Сортировка только по номеру дома и улицы
//Сортировка только по Имени
export const Utils = ({children}) => {

    //Сюда приходят все данные с `https://dummyjson.com/users`
    const [columns, setColumns] = useState([]);

    //state для использования компоненты загрузки 'Loading...'
    const [loading, setLoading] = useState(true);

    //state компоненты поиска по Имени,Возрасту,Полу,Телефону,Адресу
    const [searchName, setSearchName] = React.useState('');
    const [search, setSearch] = React.useState('');
    const [searchGender, setSearchGender] = React.useState('');
    const [searchPhone, setSearchPhone] = React.useState('');
    const [searchAddress, setSearchAddress] = React.useState('');

    //хранилище данных о тие сортировки asc desc или по умолчанию
    const [sortByName, setSortByName] = React.useState('');

    //При нажатии на кнопку поиска по Имени, Возрасту, Полу, Телефону и Адресу,
    //очищается тот инпут из которого переходили
    const removeItemsOnInput = () => {
        setSearchGender('')
        setSearchName('')
        setSearch('')
        setSearchPhone('')
        setSearchAddress('')
        setSortItems('')
    }

    //state в котором храниться информация о том по какому инпуту идет поиск
    //(Имени, Возрасту, Полу, Телефону или Адресу)
    const [items, setItems] = React.useState('firstName');

    //state в котором храниться информация о колонке по которой идет сортировка
    //(Имени, Возрасту, Полу или Адресу)
    const [sortItems, setSortItems] = React.useState('');

    //state инпутов, при нажатии на кнопку по которой нужно ввести поиск, открывается нужный инпут
    const [openName, setOpenName] = useState(false);
    const [openAge, setOpenAge] = useState(false);
    const [openGender, setOpenGender] = useState(false);
    const [openAddress, setOpenAddress] = useState(false);

    //state ошибки при неправильном https://dummyjson.com/users
    const [error, setError] = React.useState(false);

    //названия колонок по которым нужо делать сортировку
    const types = ['firstName', 'age', 'gender', 'address']


    const onClickList = (item) => {
        // При открытии типов сортировки в url вшивается название колонки по которой идет сортировка
        openAddress && setSortItems(types[3])
        openGender && setSortItems(types[2])
        openAge && setSortItems(types[1])
        openName && setSortItems(types[0])

        // Так же вшивается тип сортировки (Тип берется из коипоненты Sort в массиве type)
        setSortByName(item.name)

        // При клике на тип сортировки весь компонент закрывается
        setOpenName(false) || setOpenAge(false) || setOpenGender(false) || setOpenAddress(false)
    }


    // State обработки открытия Модального окна
    const [onCloseModal, setonCloseModal] = useState(false);

    // Функция закрытия модального окна
    const closeModal = () => {
        setonCloseModal(false);
    }

    // Хранилище данных для модального окна
    const [information, setInformation] = useState([]);

    // Помещает данные в information при клике по строке таблице
    const handleInformation = (columns) => {
        setInformation([columns.age, columns.firstName, columns.lastName, columns.maidenName, columns.address.city, columns.address.address, columns.height, columns.weight, columns.phone, columns.email])
    }

    // Кодирует пробелы для правильных запросов, уворачиваемся от ошибок
    const searchPhoneNumber = encodeURIComponent(searchPhone.trim())


    useEffect(() => {
        // При загрузке данных показывает loading
        setLoading(true)

        const fetchData = async () => {

            const filter =
                //Если какая то из переменных заполнена то она вшивается в url, после чего идет запрос
                searchName || search || searchGender || searchPhoneNumber || searchAddress
                    ? `/filter?key=${items}&value=${searchName
                    || search
                    || searchGender
                    || searchPhoneNumber
                    || searchAddress}`
                    : '';
            let remove = searchName || search || searchGender || searchPhone || searchAddress
                //Если какая то из переменных существует то перед sortBy с &
                ? `&sortBy=${sortItems}&order=${sortByName}`
                : `?sortBy=${sortItems}&order=${sortByName}`;

            // Если в input ничего нет то запрос не идет
            if (sortByName === '') {
                remove = ''
            }

            try {
                //получение данных
                const response = await fetch(url + filter + remove)
                const data = await response.json();

                //Запись данных в columns
                setColumns(data.users)
                setLoading(false);

                if (response.ok) {
                    setError(false)
                } else {
                    //Если данные не приходят на экране появляется компонента Error
                    if (response.status === 404 || response.status === 500) {
                        setError(true)
                    }
                }
            } catch (error) {
                setError(true)
            }
        }
        fetchData()
    // Перерисовка данных на экране при обновлении одной из переменных
    }, [searchName,
        searchGender,
        search,
        searchPhoneNumber,
        searchAddress,
        sortByName,
        sortItems,])
    return (
        //Использовал UseContext
        <Context.Provider value={{

            items, setItems,

            searchGender, searchAddress, searchPhone, searchName, search,
            setSearchGender, setSearchPhone, setSearchAddress, setSearchName, setSearch,

            sortItems, setSortItems, sortByName, setSortByName,

            openName, openAge, openGender, openAddress,
            setOpenName, setOpenAge, setOpenGender, setOpenAddress,

            columns, loading, error, setonCloseModal, onCloseModal,

            removeItemsOnInput, onClickList, closeModal,

            url,

            information, handleInformation,
        }}>
            {children}
        </Context.Provider>
    )
}
