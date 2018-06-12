import express from "express";
import { createReadStream } from "fs";
require('dotenv').config()
import { join } from "path";
const conf = require(join(__dirname)+'/config/conf.json')

console.log(`__dirname = > ${__dirname} \n __filename => ${__filename}`)
console.log(conf.DB)
// fs.unlink('./config/conf.json',(err,data) => {
//   console.log('file deleted')
// })

const app = express()
















































// console.log(process.env.NODE_ENV == 'production')
// // app.use(express.compress())
// app.set('view cache', (process.env.NODE_ENV == 'production') ) //use it if i use template
// app.set('view engine','pug') // this is for html engine
// // app.set('trust proxy,true) if i use reverse proxy to run this app behind using nginx
// app.enabled('case sensitive routing')
// // app.disable('strict routing') this option for make router work strictly and displine
// // app.disable('etag') its for cache purpose
// // app.set('subdomain offset',2) for domain purpose if the app use subdomain
// app.use('/pub',express.static('puplic'))

// // app.set('islog',true)
// const logger = (req,res,next) => {

//   console.log('logged')
//   // console.log(path.relative(__filename))
//   console.log(`time is : ${(new Date).toString()} ,\t method:${req.method}\t url :${req.url}\t query: ${req.query} ` , )
//   console.log(req.query.soso)
//   console.log(req.regexp)
//   console.log(req.params)
//   return  next()
// }
// app.use(logger)
// app.get('/',(req,res) => {
//   createReadStream('./test.csv').pipe(res)
// })
// app.all('/:do',(req,res,next) => {
//   next(new Error('no thin here you moron call the develolper'))
//   const response = `<h1>cool it ne haahahah</h1> Date:${req.params.do} - ${(new Date).toString()}`
//       res.set({'authorization':'itsmehahahahah', 'coco':'alifaazhahah'})
//   return res.status(201).send([{name:"sameer"},{name:"tahsen"}])


// })

// app.get('/[\$]book',(req,res) => {

//   const  response = `<h1>${req.title}</h1> Date: ${req.times} `

//   res.send(response)

// })
// // app.configure('stage','production',function(){
// //   console.log('production')
// // })
// // app.configure('development',function(){
// //   console.log('development stata')
// // })

// error handling
app.use((err,req,res,next)  =>  {

  console.log(err)

  return res.status(500).send({msg:err.message})
})
app.listen(process.env.PORT | 8080, (err) => {
  if(err){
    console.log(err)
  }
  console.log(`localhost run at ${process.env.PORT | 8080 }`)

})
