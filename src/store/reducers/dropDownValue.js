import { dropdownSelect } from '../actions/dropDownValue';

export const dropDownValue = (state = 'all', action) => {
    const { type, selectedValue } = action;
    switch (type) {
        case dropdownSelect:
            return selectedValue;
        default:
            return state;
    }
};