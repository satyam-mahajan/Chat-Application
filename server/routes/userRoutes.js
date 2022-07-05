const {register, login, getAllUsers,setAvatar,} = require("../controllers/userController");
const router = require("express").Router();

router.post("/login", login);
router.post("/register",register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);

module.exports = router;