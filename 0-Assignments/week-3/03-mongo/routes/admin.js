const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin , Course} = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username , password} = req.body

    //first time sign up -> checking if it is already there or not 

    let findUser = await Admin.findOne({
        username : username 
    })

    if(findUser) {
        return res.status(403).json({
            status : false , 
            message : "User already exist with this username"
        }) 
    }
    await Admin.create({
        username : username , 
        password : password
    })
    return res.status(201).json({
        status : true , 
        message : "User created" ,
        data : req.body
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title , description , imageLink , price} = req.body
    
    let newCourse = await Course.create({
        title : title , 
        description : description , 
        imageLink : imageLink , 
        price : price
    })
    console.log(newCourse)


    res.json({
        message : "Course created Successfully" ,
        courseId : newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({})

    res.json({
        courses : allCourses
    })
});

module.exports = router;