const express=require('express')

const depoController=require('../controller/depositController')

const route=express.Router()


route.post('/deposit',depoController.deposit)

route.post('/withdraw',depoController.withdraw)

route.get('/totalAmnt',depoController.currentBalance)

route.post('/stat',depoController.stat)

route.post('/mini',depoController.mini)



module.exports=route