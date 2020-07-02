var app = require('express')()
var {index, color} = require('tusbahle')
app.use("/data",index)
app.listen(3000)