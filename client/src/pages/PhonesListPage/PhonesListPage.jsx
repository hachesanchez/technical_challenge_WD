import { Container } from "react-bootstrap"
import PhonesListCard from "../../components/PhonesListCard/PhonesListCard"
import './PhonesListPage.css'
import { useEffect, useState } from "react"
import phoneService from "../../services/phone.service"


const PhonesListPage = () => {

    const [phones, setPhones] = useState()


    useEffect(() => {
        loadPhones()
    }, [])


    const loadPhones = () => {
        phoneService
            .getAllPhones()
            .then(({ data }) => {
                setPhones(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (

        phones?.map(elm => {
            return (
                <Container>
                    <PhonesListCard {...elm} />
                </Container>
            )
        })
    )
}

export default PhonesListPage