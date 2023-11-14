import bcrypt from 'bcrypt'
import userModel from '../models/user.model.js';

const signinUser = async(req, res) => {

}

const registerUser = async(req, res, next) => {
    let newUser;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const isConsentGiven = JSON.parse(req.body.isConsentGiven);

    const defaultAvatar = 'https://raw.githubusercontent.com/Amaldassk/public_files/main/dp.jpg';
    const avatarUrl = req.file?.[0]?.filename ? `${req.protocol}://${req.get("host")}/assets/userAvatars/${req.file[0].filename}`:defaultAvatar;

    const emailDomain = req.body.email.split('@')[1];
    const role = emailDomain == 'amaldas.tech'?'moderator':'general';

    newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: role,
        avatar: avatarUrl,
    });

    try{
        await newUser.save();
        if(newUser.isNew){
            throw new Error('Failed to add user');
        }

        if(isConsentGiven === false){
            res.status(201).json({
                message:'User added successfully'
            });
        } else {
            next();
        }

    } catch(err){
        res.status(400).json({
            message: 'Failed to add a user',
        });
    }
};

export {signinUser, registerUser};