const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/api/destinations', (req, res) =>{
    db.Destination.findAll()
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

router.get('/api/destinations/:id', (req, res) => {
    db.Destination.findAll({
        where: {
            id: req.params.id
        },
        include: [db.Activites]
    })
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

router.post('/api/destinations', (req, res) => {
    db.Destination.create(req.body)
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

router.delete('/api/destinations/:id', (req, res) => {
    db.Destination.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((results) => res.status(200).json(results))
    .catch(error => res.status(500).json(error))
});

module.exports = router;