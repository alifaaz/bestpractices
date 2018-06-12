import express from 'express'
import { resolve } from 'path'
import webpack from 'webpack'
import configPack from '../webpack.config.dev'
import composs from "compression";
const app = express()
app.use(composs())
const compiler = webpack(configPack)
app.use(require('webpack-dev-middleware')(compiler, {noInfo: true, publicPath: configPack.output.publicPath}))
app.get('/', (req, res) => {
  return res.sendFile(resolve() + '/src/index.html')
})
app.get('/users', (req, res) => {
  return res.json({
    msg:`This is bad you have to change  it`
  })
})

app.listen(process.env.PORT | 8080, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`localhost run at ${process.env.PORT | 8080}`)
})
