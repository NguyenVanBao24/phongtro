import express from "express";
import * as post from "../controllers/post";

const router = express.Router();
router.get("/all", post.getPosts);
router.get("/limit", post.getPostsLimit);

export default router;
