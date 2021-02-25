export const addToCartClick = 'addToCartClick';
export const basketIconClick = 'basketIconClick';
export const orderBtnClick = 'orderBtnClick';

export const handleAddToCartClick = (currentMenuData, bool) => ({
    type: addToCartClick,
    currentMenuData,
    showBasket: bool,
});

export const handleBasketIconClick = (bool) => ({
    type: basketIconClick,
    showBasket: bool,
});

export const handleOrderBtnClick = () => ({
    type: orderBtnClick,
});