// URL PATH
const express = require("express");
const { home, createUser, getUsers, editUser, deleteUser } = require("../controllers/userControllers");
const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUser",getUsers);
router.put("/editUser/:id",editUser);
router.delete("/deleteUser/:id",deleteUser);



module.exports = router;
