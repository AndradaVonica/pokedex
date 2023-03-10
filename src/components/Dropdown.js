
import Select from "react-select"

function Dropdown({ handleChange, allPokemons }) {


    return (
        <div>
            <Select
                options={allPokemons}
                onChange={handleChange}
            />
        </div>
    );

}
export default Dropdown;
