const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/api/activities', (req, res) =>{
    db.Activities.findAll()
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

router.get('/api/activities/:id', (req, res) => {
    db.Activities.findAll({
        where: {
            id: req.params.id
        },
        include: [db.Notes, db.Resources]
    })
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

router.post('/api/activities', (req, res) => {
    db.Activities.create(req.body)
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

router.delete('/api/activities/:id', (req, res) => {
    db.Activities.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((results) => res.status(200).json(results))
    .catch(error => res.status(500).json(error))
});

module.exports = router;