// Posts routes...
//    Create POST
//    Update PUT
//    Delete DELETE

const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newPost = await Post.create({
      user_id: req.session.user_id,
      title: req.body.newPostTitle,
      content: req.body.newPostContent,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update( 
      { content: req.body.updatePostContent, },
      { where: { id: req.params.id, }, }
    );
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    console.log('hola mundo');
    const postData = await Post.destroy({
          where: { id: req.params.id, },
  });
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
