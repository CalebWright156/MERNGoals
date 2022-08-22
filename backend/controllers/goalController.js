const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')


const { restart } = require("nodemon")

// Desc: get goals
// route: GET api/goals
// Access: Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
}) 

// Desc: Set goals
// route: POST/api/goals
// Access: Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
}) 

// Desc: Update goals
// route: PUT/api/goals/:id
// Access: Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
}) 

// Desc: Delete goals
// route: DELETE/api/goals/:id
// Access: Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findByIdAndDelete(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    res.status(200).json({ id: req.params.id })
}) 

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}