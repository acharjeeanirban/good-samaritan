const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const HelpUser = require('../../models/Help_User');

// @route GET   api/Help_Users
// @desc        Test route
// @access      
router.get('/', auth, async (req, res) => {
    try {
        console.log("bazinga 1 in auth private route: " + req.user.id);
        const user = await HelpUser.findById(req.user.id).select('-password');
        console.log("bazinga 2");
        console.log(user);
        res.json(user);
    } catch(err) {
        console.error(err.message);
        return res.status(500).json({msg: 'server error'});
    }
    
});


function sendInvalidCreds(res) {
    return res
    .status(400)
    .json({ errors: [{ msg: 'Invalid Credentials' }] });
}

// @route       POST api/auth
// @desc        Authemticate User and get token
// @accesss     Public
router.post('/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Password is required'
        ).exists()
    ],

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.body);

        const { email, password} = req.body;

        try {
            
            let user = await HelpUser.findOne({ email });
            if (!user) {
                return sendInvalidCreds(res);
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return sendInvalidCreds(res);
            }

            console.log("bazinga 1: in auth.js - login");
            
            const payload = {
                user: {
                  id: user.id
                }
              };
        
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

        } catch(err) {
            console.error(err.message);
            return res.status(500).json({msg: 'server error while login'});
        }

    }

);

module.exports = router;