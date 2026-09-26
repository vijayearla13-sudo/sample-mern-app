//new code
let express = require('express');
let router = express.Router();
let bcrypt=require('bcrypt');
let {users}=require('../models/users');

// POST: /api/emp/register
router.post('/register', async (req, res) => {
    let data = req.body;
    data.password=await bcrypt.hash(data.password,10);
    let newuser=new users(data);
    let result=await newuser.save();
   
    res.send(result);
    //res.send(data);
});

// POST: /api/emp/login
router.post('/login', async (req, res) => {
    let user=await users.findOne({email:req.body.email});
    if(user){
        let passmatch= await bcrypt.compare(req,body.password,user.password);
        if(passmatch){
            res.send("Login successful");
        }else{
            res.send("password invalid");
             }
    }else{
        res.send("Email invalid");
    }
  
});

// GET: /api/emp/viewtasks
router.get('/viewtasks', (req, res) => {
    res.send('view tasks page called');
});


// GET: /api/emp/viewtodo
router.get('/viewtodo', (req, res) => {
    res.send('view todo page called');
});

// PUT: /api/emp/updateprofile
router.put('/updateprofile', (req, res) => {
    res.send('update profile page called');
});
router.patch("/updateprofile/:id", async (req, res) => {
    let data = req.body;

    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }

    let updatedata = await users.findByIdAndUpdate(
        req.params.id,
        { $set: data },
        { new: true }
    );

    res.send(updatedata);
});
module.exports = router;