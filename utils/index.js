const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const yup = require("yup");

const { APP_SECRET_TST } = require("../config")['test'];

//Utility functions
module.exports.GenerateSalt = async () => {
  return await bcrypt.genSalt();
};

module.exports.GeneratePassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

module.exports.ValidatePassword = async (enteredPassword, savedPassword) => {
    try {
        const password = await bcrypt.compare(enteredPassword, savedPassword)
        return password;
    }catch(err){
        console.log(err)
    }
};

module.exports.GenerateSignature = (payload) => {
  return jwt.sign(payload, APP_SECRET_TST);
};



module.exports.authSchema = yup.object({
  body: yup.object({
    // name: yup.string().min(8).max(40).required().label("Name"),
    email: yup.string().email('Must be a valid email').required().label("Email is required"),
    password: yup
      .string()
      .required()
      .min(8)
      .max(50)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
      )
      .label("Password"),
  }),
});


module.exports.createAppSchema = yup.object({
  body: yup.object({
    name: yup.string().required().min(3).max(20).label("app name"),
    icon: yup.string().url('Icon field must be a valid url').required().label('app icon'),
    url: yup.string().url('Url field must be a valid url').required().label('app url')
  })
})

module.exports.updateAppSchema = yup.object({
  body: yup.object({
    name: yup.string().required().min(3).max(20).label("app name"),
  }),
  params: yup.object({
    id: yup.string().required('parmas id is required')
  })
})