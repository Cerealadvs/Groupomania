const router = require('express').Router();
const postCtrl = require('../controllers/post.controller');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// http://localhost:7000/api/post/
router.post('/', auth, multer, postCtrl.createPost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.get('/', auth, postCtrl.getAllPosts);
router.delete('/:id', auth, postCtrl.deleteOnePost);

// Like Unlike
router.patch('/like/:id', auth, postCtrl.likePost);
router.patch('/unlike/:id', auth, postCtrl.unlikePost);

// Comments
router.patch('/comment-post/:id', auth, postCtrl.commentPost);
router.patch('/edit-comment-post/:id', auth, postCtrl.editCommentPost);
router.patch('/delete-comment-post/:id', auth, postCtrl.deleteCommentPost);

module.exports = router;