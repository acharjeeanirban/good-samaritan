const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator/check');

const Help_User = require('../../models/Help_User');

// @route GET api/Help_Users
// @desc Test route
router.get('/', (req, res) => {
    res.send('help user route');
});

// router.post('/register', (req, res) => {

//     console.log(req.body);
//     return res.send('register req has been called');

// });

//register user
router.post('/register',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
        check('country', 'Country is required').not().isEmpty(),
        check('province', 'province is required').not().isEmpty(),
        check('zipcode', 'zipcode is required').not().isEmpty(),
        check('age', 'age is required').not().isEmpty()
    ],

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.body);

        const { name,age, email, password, country, province,city, zipcode } = req.body;

        try {
            
            let user = await Help_User.findOne({ email });
            if (user) {

                return res
                  .status(400)
                  .json({ errors: [{ msg: 'User already exists' }] });
            }

            user = new Help_User({
                name,
                age,
                email,
                password,
                country,
                province,
                city,
                zipcode,
              });

            const salt = await bcrypt.genSalt(10);
            
            user.password = await bcrypt.hash(password, salt);

            console.log("bazinga 1");
            await user.save();

            console.log("bazinga 2");

            return res.status(200).json({
                'msg':'User succesfully registered'});


            // const payload = {
            //     user: {
            //       id: user.id
            //     }
            //   };
        
            // jwt.sign(
            //     payload,
            //     config.get('jwtSecret'),
            //     { expiresIn: 360000 },
            //     (err, token) => {
            //         if (err) throw err;
            //         res.json({ token });
            //     }
            // );

        } catch(err) {
            console.error(err.message);
        }

    }

)


module.exports = router;