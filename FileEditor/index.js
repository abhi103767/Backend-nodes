// similarly append CONTENT test.txt will append the 'content' at the end of the file
// delete test.txt will delete the file
// create test.txt will create a new file
// rename test.txt new.txt will rename the file


const fs = require('fs');
const path = require('fs')

const type = process.argv[2];




if(type === 'read'){
     fs.readFile( process.argv[3],'utf8',(error,data) => {
         if(error) console.log(error);
         console.log(data);
     })

}

if(type === 'append'){

    fs.appendFile(process.argv[4], process.argv[3], (error) => {
      console.log(error)
    })

}
if( type === 'delete'){

    fs.unlink(process.argv[3],(error) => {
        console.log(error)
    })

}
if(type === 'create'){
    fs.writeFile(process.argv[3],'', (error) => {
        console.log(error)
    })

}

if(type === 'rename'){
 
   fs.renameSync(process.argv[3],process.argv[4], (error) => {
       console.log(error)
   } );
}


if(type === 'list'){
   
   fs.readdir('.', (error ,files) => {
       console.log(files)

   })
}


