const modelPost = require("../models/modelPost");
const httpHandler = require("../helper/HttpHandler");

const controllerPost = {
  getPosts: async (req, res) => {
    try {
      const posts = await modelPost.find().sort({ createAt: "desc" });
      httpHandler.success(res, posts, "get all posts successfully!");
    } catch (error) {
      console.log(error.message);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await modelPost.findById(req.params.id);
      httpHandler.success(res, post, "get post successfully");
    } catch (error) {
      console.log("error", error);
    }
  },
  createPost: async (req, res) => {
    try {
      const { title, author, content, tags, image } = req.body;

      //create new post
      const post = new modelPost({
        title,
        author,
        content,
        tags,
        image,
      });

      // save to DB
      await post.save();
      httpHandler.success(res, post, "create post done!");
    } catch (error) {
      console.log(error.message);
    }
  },
  updatePost: async (req, res) => {
    try {
      const { title, author, content, tags, image } = req.body;
      const post = await modelPost.findByIdAndUpdate(req.params.id, {
        title,
        author,
        content,
        image,
        tags,
      });

      httpHandler.success(res, post, "updatePost successfully!");
    } catch (error) {
      console.log(error.message);
    }
  },
  deletePost: async (req, res) => {
    try {
      const postDelete = await modelPost.deleteOne({ _id: req.params.id });
      httpHandler.success(res, postDelete, "delete post successfully!");
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = controllerPost;
