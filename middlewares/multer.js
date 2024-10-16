import multer from "multer"

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = file.originalname
        cb(null, uniqueSuffix)
      }
})

const upload = multer({ storage: storage })
export default upload 