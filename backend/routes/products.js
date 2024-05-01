const express =require("express");
const router =express.Router();

//Tüm Ürünleri Getirmek (Read-All)
router.get("/",async(req,res)=>
{
    res.send("Ürünler getirildi.");
})

module.exports=router;