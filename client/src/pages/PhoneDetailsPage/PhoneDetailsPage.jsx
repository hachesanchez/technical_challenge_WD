import { Container } from "react-bootstrap"
import PhoneDetailsCard from "../../components/PhoneDetailsCard/PhoneDetailsCard"
import './PhoneDetailsPage.css'
import { useEffect, useState } from "react"
import phoneService from "../../services/phone.service"
import { useParams } from "react-router-dom"



const PhoneDetailsPage = () => {

    const { id } = useParams()
    const [phone, setPhone] = useState()

    useEffect(() => {
        loadPhone()
    }, [])

    const loadPhone = () => {
        phoneService
            .getOnePhone(id)
            .then(({ data }) => {
                console.log(data)
                setPhone(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <div>
            {phone ? (
                <PhoneDetailsCard phone={phone} />
            ) : (
                <p>Loading phone details...</p>
            )}
        </div>
    )
}

export default PhoneDetailsPage