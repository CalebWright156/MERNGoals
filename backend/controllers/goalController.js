const asyncHandler = require('express-async-handler')


const { restart } = require("nodemon")

// Access: Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "get goals"})
}) 

// Desc: Set goals
// route: POST/api/goals
// Access: Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: "Set goal"})
}) 

// Desc: Update goals
// route: PUT/api/goals/:id
// Access: Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}) 

// Desc: Delete goals
// route: DELETE/api/goals/:id
// Access: Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}) 

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}