const express = require('express')
const app = express()
const port = 5000
const cupcakesRouter = require('./Router/cupcakes')


app.use('/', cupcakesRouter)



app.listen(port, () => console.log(`listening on ${port}`) )