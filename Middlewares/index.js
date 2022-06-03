const express = require('express');
const res = require('express/lib/response');
const teacherRouters = require('./routes/teacher.route')
const studentRouters = require('./routes/student.route');
const app = express();

app.use('/teachers',teacherRouters);
app.use('/students',studentRouters);




app.listen('8080',() => {
    console.log('port is on runnning on 8080 port');
})