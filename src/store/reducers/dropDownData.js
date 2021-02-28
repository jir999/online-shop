import { fetchKitchenTypes } from '../actions/dropDownData';

export const dropDownData = (state = [], action) => {
    const { type, fetchedData } = action;
    switch (type) {
        case fetchKitchenTypes:
            return [{ name: 'All', abbr: "all" }, ...fetchedData];
        default:
            return state;
    }
};