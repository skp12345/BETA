const express= require("express");
const router= express.Router();

router.get('/home' , (req,res) =>{
    console.log("request at user home");
    res.send("response from user home");
}
);

router.get('/add' , (req,res) =>{
    console.log("request at user add");
    res.send("response from user add");
}
);

module.exports= router;