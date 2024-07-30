const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// Initial route that render all the posts on the homepage
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [ {model: User} ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route render all the comments of a post when the user clicked on the post at the homepage
router.get('/post/:id', async (req, res) => {
  try {
    console.log('Entrando a route');
    console.log(req.session.user_id);

    const postData = await Post.findByPk(req.params.id, {
      include: [ {model: User} ]
    });
    const postUser = postData.get({ plain: true });

    const commentData = await Comment.findAll({
      include: [ {model: User}, {model: Post} ],
      where: { post_id : req.params.id },
    });
    const comments = commentData.map(comment => comment.get({ plain: true }));

    const loggedUserData = await User.findByPk(req.session.user_id);
    const loggedUser = loggedUserData.get({ plain: true });

    res.render('post', { 
        comments, postUser, loggedUser,
        logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
      res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newpost', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
    });
    const user = userData.get({ plain: true });
    res.render('newpost', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/updatedeletepost/:id', withAuth, async (req, res) => {
  try {
    
    const postData = await Post.findByPk(req.params.id);
    res.render('updatedeletepost', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


router.get('/post/:id', async (req, res) => {
  try {
    console.log('Entrando a route');
    console.log(req.session.user_id);

    const postData = await Post.findByPk(req.params.id, {
      include: [ {model: User} ]
    });
    const postUser = postData.get({ plain: true });

    const commentData = await Comment.findAll({
      include: [ {model: User}, {model: Post} ],
      where: { post_id : req.params.id },
    });
    const comments = commentData.map(comment => comment.get({ plain: true }));

    const loggedUserData = await User.findByPk(req.session.user_id);
    const loggedUser = loggedUserData.get({ plain: true });

    res.render('post', { 
        comments, postUser, loggedUser,
        logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});