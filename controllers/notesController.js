const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/api/notes', (req, res) =>{
    db.Notes.findAll()
    .then(results => res.json(results))
    .catch(error => res.json(error))
});
 
router.get('/api/notes/:id', (req, res) => {
    db.Notes.findAll({
        where: {
            id: req.params.id
        },
    })
    .then(results => res.json(results))
    .catch(error => res.json(error))
});

router.post('/api/notes', (req, res) => {
    db.Notes.create(req.body)
    .then(results => res.json(results)) 
    .catch(error => res.json(error))
});

router.delete('/api/notes/:id', (req, res) => {
    db.Notes.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((results) => res.status(200).json(results))
    .catch(error => res.status(500).json(error))
});

module.exports = router;