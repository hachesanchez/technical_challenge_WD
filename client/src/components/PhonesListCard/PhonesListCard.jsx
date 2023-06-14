import './PhonesListCard.css'
import { Link } from 'react-router-dom'


const PhonesListCard = ({ name, price, imageFileName, _id }) => {

    return (

        <div>
            <Link to={`/phones/${_id}`} className='phone-name'>
                <h1>{name}</h1>
            </Link>
        </div>
    )
}

export default PhonesListCard