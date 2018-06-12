import jsk from "json-schema-faker"
import { schema } from "./mockSchema";
import fs from "fs"
import chalk from "chalk"

const json = JSON.stringify(jsk(schema))

fs.writeFile('./src/api/db.json',json,function(err){
    if(err){
      return console.log(chalk.red(err))
    }else{
      return console.log(chalk.green(` Its work just fine `))
    }
})
