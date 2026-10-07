const express = require('express');
const router = express.Router();


const { 
    createBCMember,
    addMonthlyPayment,
    getAllMembers,
    getPendingPayment,
 } = require('../controllers/bcController');


router.post('/add/member', createBCMember);
router.get("/members", getAllMembers);
router.get("/members/:memberId/pending", getPendingPayment);
router.post('/monthly-payment',addMonthlyPayment)




module.exports = router;
