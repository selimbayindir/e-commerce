const express =require("express");
const router =express.Router();

//Tüm Kategorileri Getirmek (Read-All)
router.get("/",async(req,res)=>
{
    res.send("Kategoriler getirildi.");
})

module.exports=router;