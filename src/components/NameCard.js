import { getNames } from "../api/utils"
import DropdownName from "../components/DropdownName"


function NameCard({ getMail, getName }) {
    return (
        <div >
            <p>
                Email: {getMail}
            </p>
            <p>
                Full name:  {getName}
            </p>
        </div>
    )
}

export default NameCard
