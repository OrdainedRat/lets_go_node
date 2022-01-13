const express = require('express')

const app = express();

app.get('/hello', (req, res) => {
    res.json({message: 'hey there'})
})

const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})