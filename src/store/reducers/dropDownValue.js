import { dropdownSelect } from '../actions/dropDownValue';

export const dropDownValue = (state = "", action) => {
    const { type, selectedValue } = action;
    switch (type) {
        case dropdownSelect:
            console.log("B")
            return selectedValue;
        default:
            return state;
    }
};