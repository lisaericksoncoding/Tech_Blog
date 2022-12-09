
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'postID',
            'userID',
            'postTitle',
            'postContent',
            'createdAt'
        ],
        include: [{
            model: Comment,
            attributes: [
                'commentID',
                'postID',
                'userName',
                'commentContent',
                'createdAt'
            ],
            include: {
                model: User,
                attributes: ['userName']
            }

        },
        {
            model: User,
            attributes: ['userName']
        }
        ]
    })

        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
