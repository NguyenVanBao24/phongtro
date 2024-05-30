import * as postService from "../services/post";
export const getPosts = async (req, res) => {
  try {
    const response = await postService.getPostsService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at controller",
    });
  }
};

export const getPostsLimit = async (req, res) => {
  const page = req.query.page;
  console.log(page);
  try {
    const response = await postService.getPostsServiceLimit(page);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at controller",
    });
  }
};
