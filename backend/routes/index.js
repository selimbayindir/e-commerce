const express =require("express");
const router =express.Router();

//Diğer Route Dosyalarını içe aktarıyoruz.
const productRoute=require("./products.js");
const categoryRoute=require("./categories.js");

//Her Route u ilgili yol altında kullanıyoruz.

router.use("/categories",categoryRoute);
router.use("/products",productRoute);

module.exports=router;