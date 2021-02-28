export const fetchMenu = "fetchMenu";
export const addToCartDisableTrue = 'addToCartDisableTrue';
export const addToCartDisableFalse = 'addToCartDisableFalse';
export const addToCartDisableAllFalse = 'addToCartDisableAllFalse';

export const fetchedMenuData = (data) => ({
    type: fetchMenu,
    fetchedData: data
});

export const toggleAddToCartDisableTrue = (clickedMenuId, disabledValue) => ({
    type: addToCartDisableTrue,
    clickedMenuId,
    disabledValue,
});

export const toggleAddToCartDisableFalse = (clickedMenuId, disabledValue) => ({
    type: addToCartDisableFalse,
    clickedMenuId,
    disabledValue,
});

export const toggleAddToCartDisableAllFalse = () => ({
    type: addToCartDisableAllFalse,
});