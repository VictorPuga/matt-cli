const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const minimist = require('minimist');

module.exports = () => {
    clear();
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'

    if(args.version || args.v) {
      cms = 'version'
    } 
    if (args.help || args.h) {
      cmd = 'help'
    }
    if (args.shortcuts || args.s) {
      cmd = 'shortcuts'
    }
    if (args.cc) {
      cmd = 'create-component'
    }
    if (args.weather || args.w) {
      cmd = 'weather'
    }

    console.log(
      chalk.keyword('orange')(
        figlet.textSync('Matt', { horizontalLayout: 'full' })
      )
    );
    switch (cmd) {
      case 'create-component': 
        require('./cmds/create-component')(args)
        break
        
      case 'hey': 
        require('./cmds/hey')(args)
        break

      case 'weather': 
        require('./cmds/weather')(args)
        break

      case 'shortcuts': 
        require('./cmds/shortcuts')(args)
        break

      case 'version': 
        require('./cmds/version')(args)
        break

      case 'help': 
        require('./cmds/help')(args)
        break

      default: 
        console.error(`"${cmd}" is not a valid command!`)
        break
    }
}