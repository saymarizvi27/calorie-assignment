const { createUser, ifUserExists , ifUserExistsById } = require('../models/user/model.user');
const { createHash, compareHash } = require('../utility/password');
const { generateToken } = require('../utility/auth');
const { saveUser, checkUser } = require('../utility/redis');

async function httpUserSignUp(req, res) {
    try {
        const userDetails = req.body;
        if (!userDetails.firstName || !userDetails.lastName || !userDetails.password || !userDetails.email) {
            return res.status(400).json({
                error: 'Missing required property',
            });
        }
        const ifEmailUsed = await ifUserExists({ email: userDetails.email });

        if (ifEmailUsed) {
            return res.status(400).json({
                error: 'Email already exists',
            });
        }

        userDetails.password = createHash(userDetails.password);
        await createUser(userDetails);
        return res.status(201).json
            ({
                data: userDetails,
                code: 201,
                message: 'user created succesfully',
                error: false
            });
    }
    catch (e) {
        console.log(e, "ERROR")
        return res.status(500).json({
            error: 'Internal server error ',
        });
    }
}

async function httpUserLogin(req, res) {
    try {
        const userDetails = req.body;

        if (!userDetails.password || !userDetails.email) {
            return res.status(400).json({
                error: 'Missing required property',
            });
        }
        const user = await ifUserExists({ email: userDetails.email });

        if (!user) {
            return res.status(404).json({
                error: 'Email or Password is Invalid',
            });
        }

        const passwordMatches = compareHash(userDetails.password, user.password);

        if (!passwordMatches) {
            return res.status(404).json({
                error: 'Email or Password is Invalid',
            });
        }
        console.log('this is user', user);

        const token = generateToken(user._id.toString());
        await saveUser(user._id.toString(), token);
        return res.status(200).json
            ({
                data: token,
                code: 200,
                message: '',
                error: false
            });
    }
    catch (e) {
        console.log(e, "ERROR")
        return res.status(500).json({
            error: 'Internal server error ',
        });
    }
}

// async function httpUserDetails(req,res){

//     const userId = req.body.userId;
//     console.log()
//     const user = await ifUserExistsById(userId);
//     console.log(user)
//     if (user){
//         return res.status(200).json
//         ({
//             data: user,
//             code: 200,
//             message: 'User Details',
//             error: false
//         });
//     }
   

// }

module.exports = {
    httpUserSignUp,
    httpUserLogin,
    httpUserDetails
}