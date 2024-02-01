const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const findUser = await User.findOne({
    username: username,
    password: password,
  });

  if (findUser) {
    return res.status(403).json({
      status: false,
      message: "USer already exist",
    });
  }

  const createUser = await User.create({
    username: username,
    password: password,
  });

  return res.status(201).json({
    status: true,
    message: "User has been created",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  return res.status(200).json({
    data: allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const username = req.headers.username;
  const courseId = req.params.courseId;

  const purchaseCode = await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  return res.status(201).json({
    status: true,
    message: "Purchase complete",
  });
});
// Implement course purchase logic

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  let user = await User.findOne({ username: req.headers.username }).populate(
    "purchasedCourses"
  );
  console.log("🚀 ~ router.get ~ purchased courses:", user.purchasedCourses);

  const allCourses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  console.log("🚀 ~ router.get ~ allCourses:", allCourses);

  res.json({
    courses: allCourses,
  });
});

module.exports = router;
