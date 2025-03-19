const userModel = require('../model/modelUser');
const {join} = require('path');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
let refreshTokens = [];


const JWT_SECRET = process.env.JWT_KEY;
const RT_JWT_SECRET = process.env.RT_SECRET;
//partie de securitee
const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: "30m",
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, RT_JWT_SECRET, {
    //id se truve sur postaman lors de login
    expiresIn: "1h",
  });
};
//fin partie de securitee

module.exports = {
    verifyEmail : async (req,res) =>{
      // this code for test onetime
        try {
            const {verificationCode} = req.params;
            const user = await userModel.findOne({verificationCode});
            user.verified = true;
            user.verificationCode = "undefined";
            user.save()
            return res.sendFile(join(__dirname,"../template/succes.html"))

        } catch (error) {
            return res.sendFile(join(__dirname,"../template/error.html"))

        }

},
login: async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).send({
        message: " Email  not found.",
        /*  message: "Email or password missing." */
      });
    } else {
      const validPassword = await bcrypt.compare(
        req.body.pasword,
        user.pasword
      );
      console.log(req.body.pasword)
      console.log(user.pasword)
//remarque
      if (!validPassword) {
       res
          .status(401)
          .json({ success: false, message: " password not found" });
      } else {
        //partie de securit
const AccessToken = generateAccessToken(user); //accesstoken de const user
          const RTToken = generateRefreshToken(user);
          refreshTokens.push(RTToken);
          //fin partie de securit
        res
          .status(200)
          .json({
            success: true,
            message: "success",
            data: user,
            AccessToken: AccessToken,
            RTToken:RTToken
          });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false, message: "error" });
  }
},
logout: (req, res) => {
  const RefreshToken = req.body.token;
  refreshTokens = refreshTokens.filter(() => token !== RefreshToken);
  res.status(200).json({ message: "you logged out" });
},
verifyRefreshToken: (req, res) => {
  const RefreshToken = req.body.token;
  if (!refreshTokens.includes(RefreshToken))
    return res.status(400).json({ message: "refresh token is not valid" });
  jwt.verify(RefreshToken, RT_JWT_SECRET, (err, user) => {
    refreshTokens = refreshTokens.filter((token) => token !== RefreshToken);
    const newAcessTokens = generateAccessToken(RefreshToken);
    const newRefreshTokens = generateRefreshToken(RefreshToken);
    refreshTokens.push(newRefreshTokens);
    res.status(200).json({ token: newAcessTokens, rtoken: newRefreshTokens });
  });
}
}




