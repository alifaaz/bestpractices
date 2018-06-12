import webpack from "webpack"
import chalk from "chalk"
import webpackConfig from "../webpack.config.production"

//indicate that iam in productoin env

process.env.NODE_ENV ='production'
console.log(chalk.blue(`We Are Building productions App waits min ......`))

webpack(webpackConfig).run((err,states) =>  {

  if (err){ console.log(chalk.red(err))

                    return 1;}
    const jsonStates = states.toJson()

    if(jsonStates.hasErrors){
        return jsonStates.errors.map(err => console.log(chalk.red(err)))

    }
    if(jsonStates.hasWarings) {
        console.log(chalk.yellow(`web pack generate following errors`))
        jsonStates.warnings.map(war => console.log(chalk.yellow(war)))
    }

      console.log(`Webpack States : ${states}`)


      console.log(chalk.green('webpack has completed yr production task'))

    return 0;

})
