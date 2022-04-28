const express = require("express")
const https = require("https")
const app = express()
const path = require('path')
const router = express.Router()


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/miscellaneous', (req, res) => {
  res.sendFile(path.join(__dirname + '/miscellaneous.html'))
})
// router.get('/miscellaneous', (req, res) => {
//   const url = 'https://api.nasa.gov/planetary/apod?api_key=0RP81XU3Dm5V63Cc2cEnsBZs7IdiYSJzE4jtSsD6&thumbs=true'
//
//     https.get(url, function(response){
//
//       console.log('statusCode:', response.statusCode);
//
//       response.on("data", function(data){
//         const nasaData = JSON.parse(data).explanation
//         const date = JSON.parse(data).date
//         const thumb = JSON.parse(data).thumbnail_url
//         res.write("<h1>NASA explanation for today's photo of the day: </h1>" + nasaData)
//         res.write("<img src=" + thumb + ">")
//
//         res.sendFile((path.join(__dirname+'/miscellaneous.html')));
//   })
// })
// })

//app.use(express.static('Personal Site'))

app.listen(3000, function(){
  console.log("Server is running on port 3000")
})
