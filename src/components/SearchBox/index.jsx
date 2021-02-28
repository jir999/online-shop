import { useDispatch } from 'react-redux';
// import { handleInputChange } from '../../store/actions/restaurants';
import Input from '@material-ui/core/Input';

const SearchBox = ({ value, onInputChange }) => {
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        onInputChange(e.target.value);
    }

    return (
        <Input
            className="searchBox"
            onChange={handleInputChange}
            placeholder="Search by name"
            value={value}
        />
    )
    // return (
    //     <Input className="searchBox" onChange={(e) => dispatch(handleInputChange(e.target.value))} placeholder="Search by name" />
    // )
};

export default SearchBox;