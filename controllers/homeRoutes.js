// Home routes for users, posts and comments
const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// Initial route that render all the posts on the database in the homepage
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

// this route render all the comments of a post 
router.get('/post/:id', async (req, res) => {
  try {
    // get the specific post data and the user data who posted   
    const postData = await Post.findByPk(req.params.id, {
      include: [ {model: User} ]
    });
    // transform format data
    const postUser = postData.get({ plain: true });
    // get all the comments of the post
    const commentData = await Comment.findAll({
      include: [ {model: User}, {model: Post} ],
      where: { post_id : req.params.id },
    });
    // transform format data
    const comments = commentData.map(comment => comment.get({ plain: true }));
    // get data of the user logged
    const loggedUserData = await User.findByPk(req.session.user_id);
    // transform format data
    const loggedUser = loggedUserData.get({ plain: true });
    // render data by post handelebar
    res.render('post', { 
        comments, postUser, loggedUser,
        logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// This route render all the post of the logged in user
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Get the logged user data and their posts 
      const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
    });
    // transform format data
    const user = userData.get({ plain: true });
    // render data by dashborad handelebar
      res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route ask for the title and content of a new post for the logged user
router.get('/newpost', withAuth, async (req, res) => {
  try {
    // Get the logged user data and their posts 
      const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
    });
    // transform format data
    const user = userData.get({ plain: true });
    // render inputs form by newpost handelebar
    res.render('newpost', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route is for update or delete a post for the logged user
router.get('/updatedeletepost/:id', withAuth, async (req, res) => {
  try {
    // Get a specific post data and the user that posted 
    const postData = await Post.findByPk(req.params.id, {
      include: [ {model: User} ]
    });
    const postUser = postData.get({ plain: true });
    // render input form by updatedeletepost handelebar
    res.render('updatedeletepost', {
      ...postUser,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// this route is for the sing in and sign up
router.get('/login', (req, res) => { 
   if (req.session.logged_in) {
     res.redirect('/');
     return;
   }
   res.render('login');
});

module.exports = router;