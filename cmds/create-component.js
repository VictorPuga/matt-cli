const ora = require('ora')
const createComponent = require('../utilities/createComponent')

module.exports = async (args) => {
  let name = 'component'
  let big = false
  if(args.name) {
    name = args.name
  } 
  if (args.n) {
    name = args.n
  }
  if (args.big || args.b) {
    big = true
  }

  const spinner = ora({
    text: `Generating component with name "${name}"`,
    spinner: 'dots', 
    color: 'green'
}).start()

  try {
    const placeholder = await createComponent(name)
    spinner.stop()
    console.log(placeholder)

  } catch (err) {
    spinner.stop()

    console.error(err)
  }
  
}