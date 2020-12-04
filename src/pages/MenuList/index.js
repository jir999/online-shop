import React, {useState ,useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import {fetchedMenuData} from "../../store/actions";
import {useSelector} from "react-redux";
import { getMenuData } from "../../store/selectors";
import GoBack from "../../components/GoBack";
import AddToCart from "../../components/AddToCart";


const MenuList = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const data = useFetch(`/menus/${params.id}.json`);

    useEffect(() => {
        dispatch(fetchedMenuData(data));
    }, [data])

    // useEffect(() => {
    //     fetch(`/menus/${params.id}.json`)
    //         .then(res => res.json())
    //         .then(res => setMenuList(res));
    // },[])


    // console.time("end");
    // useEffect(() => {
    //     dispatch((denuList)))
    // },[menuList]);
    // console.timeEnd("end");

    // console.log("menuList", menuList);


    const {menuData} = useSelector((state) => ({
        menuData: getMenuData(state)
    }))

    console.log("menuData", menuData);

    return (
        <div>
            MenuList
            <GoBack />
            <AddToCart />
        </div>
    )
};

export default MenuList;