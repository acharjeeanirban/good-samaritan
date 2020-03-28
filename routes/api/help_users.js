const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const Help_User = require('../../models/Help_User');

// @route GET api/Help_Users
// @desc Test route
router.get('/', (req, res) => {
    res.send('help user route');
})

//register user
router.post('/',
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

        const { name, email, password, country, province, zipcode, age } = req.body;

        try {
            
            let user = await Help_User.findOne({ email });
            if (user) {

                return res
                  .status(400)
                  .json({ errors: [{ msg: 'User already exists' }] });
            }

            user = new Help_User({
                name,
                email,
                password,
                country,
                province,
                zipcode,
                age
              });

            const salt = await bcrypt.genSalt(10);
            

            user.password = await bcrypt.hash(password, salt);

            await user.save();

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
        }


    }

)


module.exports = router;