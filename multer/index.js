const express = require('express');
const multer = require('multer');


const app = express();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     }
  
//   })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


  app.post('/', upload.single('avatar_1'), function (req, res, next) {
     
    res.send({
        ...req.file
    })
  })

  app.listen(8080,() => {
      console.log('Server is started');
  })
  