const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const sequelize = require('./util/database')

const User = require('./model/user')

const cors = require('cors')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,'public')))

app.use(cors())

const userRoutes = require('./routes/user');

app.use('/user',userRoutes)



app.listen(3000)
