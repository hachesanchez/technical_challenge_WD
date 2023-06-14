import { Card, Container } from 'react-bootstrap'
import './PhoneDetailsCard.css'
/* import iphoneImg from '../../../../public/assets/images/IPhone_7.png' */

const PhoneDetailsCard = ({ phone }) => {

    return (
        <Container>
            <Card>
                <Card.Title><h1>{phone.name}</h1></Card.Title>
                <Card.Img variant='top' src={phone.imageFileName} />
                <Card.Text>
                    <h4 className='phone.price'>PROCESSOR: {phone.price}</h4>
                    <h4 className='processor'>RAM: {phone.processor}</h4>
                    <h4 className='color'>COLOR: {phone.color}</h4>

                </Card.Text>
            </Card>
        </Container>

    )
}

export default PhoneDetailsCard

