// bring in express
const express = require('express')

// create express router
const router = express.Router();

// bring in model
const DataModel = require('../dataModel/data-model');

// Get all cohorts
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

// GET cohorts by ID
router.get('/:id', async (req, res) => {
    try {
        const dm = await DataModel.findById(req.params.id)
        if (dm) {
            res.status(200).json(dm)
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


// POST a new cohorts
router.post(('/', async (req, res) => {
    try {
        const dm = await DataModel.add(req.body)
        res.status(201).json(dm)
    } catch (error) {
        res.status(500).json({
            message: "Please provide necessary information"
        })
    }
}))

// UPDATE a cohorts
router.put('/:id', async (req, res) => {
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


// REMOVE cohorts
router.delete('/:id', async (req, res) => {
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


module.exports = router;