const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/resources', (req, res) => {
    db.Resources.findAll()
    .then(result => res.json(result))
    .catch(error => res.status(500).json(error))
});
 
router.get('/api/resources/:id', (req, res) => {
    db.Resources.findAll({
        where: {
            id: req.params.id
        },
    })
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

router.post('/api/resources', (req, res) => {
    db.Resources.create(req.body)
    .then(results => res.status(200).json(results))
    .catch(error => res.json(error))
});


router.delete('/api/resources/:id', (req, res) => {
    db.Resources.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((results) => res.status(200).json(results))
    .catch(error => res.status(500).json(error))

});

module.exports = router;