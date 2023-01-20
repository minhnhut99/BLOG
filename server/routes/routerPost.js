const express = require("express");
const API_CONSTANT = require("../config/ApiConstant");
const controllerPost = require("../controllers/controllerPost");
const router = new express.Router();

router.get(API_CONSTANT.GET_POSTS, controllerPost.getPosts);
router.get(API_CONSTANT.GET_POST, controllerPost.getPost);
router.post(API_CONSTANT.CREATE_POST, controllerPost.createPost);
router.put(API_CONSTANT.UPDATE_POST, controllerPost.updatePost);
router.delete(API_CONSTANT.DELETE_POST, controllerPost.deletePost);
module.exports = router;
