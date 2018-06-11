const ora = require('ora')
const getWeather = require('../utilities/getWeather')

module.exports = async (args) => {
  const spinner = ora({
    spinner: 'dots', 
    color: 'green'
}).start()

  try {
    const location = args.location || args.l
    const weather = await getWeather(location)

    spinner.stop()

    console.log(`Current conditions in ${location}:`)
    console.log(
`\t${weather.condition.temp}°F ${weather.condition.text}
`)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}