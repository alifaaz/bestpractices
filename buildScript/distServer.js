import express from 'express'
import { resolve } from 'path'
import compress from "compression";
const app = express()



app.use(compress())
app.use(express.static('dist'))

app.get('/', (req, res) => {
  return res.sendFile(resolve() + '/dist/index.html')
})
app.get('/user',(req,res) => {
    res.json({
      msg:`hello from  user URL hahah ITs mw again `
    })
})
app.listen(process.env.PORT | 8080, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`localhost run at ${process.env.PORT | 8080}`)
})
