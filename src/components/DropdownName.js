import Select from "react-select"


function DropdownName({ allUsers, handleChange }) {
    return (
        <div>
            <Select
                options={allUsers}
                onChange={handleChange}
            />
        </div>
    )
}

export default DropdownName
