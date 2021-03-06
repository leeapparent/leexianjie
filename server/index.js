const express = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)

require('./routes/admin')(app)

app.set('secret', '123kjk1331')

app.listen(3009, () => {
    console.log('http://localhost:3009')
})