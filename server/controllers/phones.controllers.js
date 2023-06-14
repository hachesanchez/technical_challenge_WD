const Phone = require('./../models/Phone.model')


const getAllPhones = (req, res, next) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOnePhone = (req, res, next) => {

    const { id } = req.params

    Phone
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))
}


module.exports = {
    getAllPhones,
    getOnePhone
}