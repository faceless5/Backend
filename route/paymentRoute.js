const express = require('express')
const router = express.Router()


router.post('/processpayment',processPayment)
router.get('/getStripeAPIKey',sendStripeKey)

module.exports = router