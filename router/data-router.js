// bring in express
const express = require('express')

// create express router
const router = express.Router();

// bring in model
const DataModel = require('../dataModel/data-model');

// Get all something
router.get('/', async (req, res) => {
    try {
        const dm = await DataModel.find()
        res.status(200).json(dm)
    } catch (err) {
        res.status(500).json({
            message: "The something could not be retrieved"
        })
    }
})

// GET something by ID
router.get('/:id', (req, res) => {
    try {
        const dm = await DataModel.findById(req.params.id)
        if (dm) {
            res.status(200).json(br)
        } else {
            res.status(404).json({
                message: "The something with this specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The something information could not be retrieved"
        })
    }
})


// POST a new something
router.post(('/', (req, res) => {
    try {
        const dm = await DataModel.add(req.body)
        res.status(201).json(dm)
    } catch (error) {
        res.status(500).json({
            message: "Please provide necessary information"
        })
    }
}))

// UPDATE a something
router.put('/:id', (req, res) => {
    try {
        const dm = await DataModel.update(req.params.id, req.body)
        if (br) {
            res.status(200).json(dm)
        } else {
            res.status(404).json({
                message: "The something with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The something information could not be modified"
        })
    }
})


// REMOVE something
router.delete('/:id', (req, res) => {
    try {
        const count = await DataModel.remove(req.params.id)
        if (count > 0) {
            res.status(200).json({
                message: "The something has been deleted"
            })
        } else {
            res.status(404).json({
                message: "The something with the specific ID does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "The something could not be removed"
        })
    }
})