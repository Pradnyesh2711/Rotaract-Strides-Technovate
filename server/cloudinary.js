const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dvxacup6m",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,

  secure: true,
});

export default cloudinary;
