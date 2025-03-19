const multer = require("multer");
//multer package pour uplaoding images or videos

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, "./storages");//stokage des image
    },
    filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)

    },
});
const fileFilter = (req,file,cb) => {
    if (
        file.mimetype =="image/jpeg" ||
        file.mimetype =="image/jpg" ||
        file.mimetype =="image/png" ||
        file.mimetype =="video/mp4" ||
        "application/pdf"
    ){
        cb(null,true); 
    }else{
        cb(new Error("Error"),false);
    };
};
module.exports = multer({
    storage: storage,//
    fileFilter: fileFilter,
    limits: {_filesize: 1024 *10}
});