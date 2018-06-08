import express from 'express'
import { resolve } from 'path'
import webpack from 'webpack'
import configPack from '../webpack.config.dev'

const app = express()
const compiler = webpack(configPack)
app.use(require('webpack-dev-middleware')(compiler, {noInfo: true, publicPath: configPack.output.publicPath}))

app.get('/', (req, res) => {
  return res.sendFile(resolve() + '/src/index.html')
})

app.listen(process.env.PORT | 8080, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`localhost run at ${process.env.PORT | 8080}`)
})
