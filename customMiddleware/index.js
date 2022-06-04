

const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json())

function customValidation(req,res,next){
  
    const {id, name, rating,Description, Genre , Cast} = req.body;
    console.log(typeof(id))
    if(!id || typeof(id) !== 'number' ){
        res.status(401).send('Id is not Number or it doesnot exist');
    }
    else if(!name || typeof(name) !== 'string') {
        res.status(401).send('Name is not String or it doesnot exist');
    }
    else if(!rating || typeof(rating) !== 'number') {
        res.status(401).send('Rating is not Number or it doesnot exist');
    }
    else if(!Description || typeof(Description) !== 'string') {
        res.status(401).send('Description is not String or it doesnot exist');
    }
    else if(!Genre || typeof(Genre) !== 'string') {
        res.status(401).send('Genre is not String or it doesnot exist');
    }
    else if(!Cast || typeof(Cast) !== 'string'){
        res.status(401).send('Cast is not String or it doesnot exist'); 
    }
    next();

}


app.post('/', customValidation, (req,res) => {
   fs.readFile('./db.json', 'utf8', (err,data) => {
       console.log(req.body);
       const parsed = JSON.parse(data);
       parsed.movies = [...parsed.movies, req.body];
      
       fs.writeFile('./db.json',JSON.stringify(parsed), (error)  => {
          if(error) console.log(error);
          console.log('file is write successfully');
       })
   }
)}
)


app.listen(8080,() => {
    console.log("Server is started")
})