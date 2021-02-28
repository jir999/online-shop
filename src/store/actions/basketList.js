export const addToCartClick = 'addToCartClick';
export const basketIconClick = 'basketIconClick';
export const orderBtnClick = 'orderBtnClick';
export const deleteBtnClick = 'deleteBtnClick';
export const minusIconClick = 'minusIconClick';
export const addIconClick = 'addIconClick';

export const handleAddToCartClick = (currentMenuData) => ({
    type: addToCartClick,
    currentMenuData,
});

export const handleBasketIconClick = () => ({
    type: basketIconClick,
});

export const handleMinusIconClick = (menuPrice, id) => ({
    type: minusIconClick,
    menuPrice,
    id,
});

export const handleAddIconClick = (menuPrice, id) => ({
    type: addIconClick,
    menuPrice,
    id,
});

export const handleDeleteBtnClick = (menuPrice, id) => ({
    type: deleteBtnClick,
    basketItemId: id,
    menuPrice,
})

export const handleOrderBtnClick = () => ({
    type: orderBtnClick,
});
