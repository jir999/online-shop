import { restaurantsInputChange } from '../actions/restaurants';

export const searchValue = (state = "", action) => {
    const { type, inputValue } = action;
    switch (type) {
        case restaurantsInputChange:
            return inputValue.toLowerCase();
        default:
            return state;
    }
};