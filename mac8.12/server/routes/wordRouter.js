const router = require('express').Router()
const wordCtrl = require('../controllers/wordCtrl')

router.post('/createWord',wordCtrl.createWord)
router.get('/user_words/:username',wordCtrl.getUserWords)
router.delete('/user_words/:id',wordCtrl.deleteWord)

module.exports = router
