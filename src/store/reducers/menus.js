import { fetchMenu } from '../actions/menus';

export const menuData = (state = [], action) => {
    const { type, fetchedData } = action;
    switch (type) {
        case fetchMenu:
            return fetchedData;
        default:
            return state;
    }
};