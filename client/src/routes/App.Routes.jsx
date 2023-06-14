import PhoneDetailsPage from "../pages/PhoneDetailsPage/PhoneDetailsPage"
import PhonesListPage from "../pages/PhonesListPage/PhonesListPage"

const { Routes, Route } = require("react-router-dom")

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/phones' element={<PhonesListPage />} />
            <Route path='/phones/:id' element={<PhoneDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes