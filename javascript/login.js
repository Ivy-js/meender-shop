const path = require("path")
const express = require("express")


const app = express()


app.use('', express.static(path.join(__dirname, '/public')))


app.get('/', (request, response) =>{
    return response.sendFile('main.html', {root: '.'})
})




const port = "3000"
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

