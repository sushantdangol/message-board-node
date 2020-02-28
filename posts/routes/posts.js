const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage});

let Post = require('../model/posts.model');

router.post('/add', upload.single('postImage'), (req, res) => {
    //get date
    let today = new Date();

    postDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const username = req.body.username;
    const title = req.body.title || "Untitled Post";
    const post = req.body.post;
    const date = postDate;
    const postImage = req.file.filename;

    addpost = new Post({username, title, post, postImage, date});

    addpost.save().then(
        post => res.status(200).json('Post Added')
    ).catch(err => res.status(400).json(`Error caught: ${err}`))
});

router.delete('/:id', (req, res) => {
    Post.findById(req.params.id).then(
        posts => posts.remove().then(() => res.json('Post Removed.'))
    ).catch(
        err => res.status(400).json(`Error caught: ${err}`)
    )
});

router.get('/list', (req, res) => {
    Post.find().sort({createdAt: -1}).then(
        posts => res.json(posts)
    ).catch(
        err => res.status(400).json(`Error caught: ${err}`)
    )
});

module.exports = router;