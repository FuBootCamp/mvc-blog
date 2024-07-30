
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:post_id', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      post_id: req.params.post_id,
      user_id: req.session.user_id,
      content: req.body.newCommentContent,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;