const menus = {
  main: `
    matt [command] <options>

    create-component.... generate a brand new React Component
    hey ................ greet Matt, the CLI
    weather ............ look up for the weather today
    shortcuts........... show shortcuts for the commands
    version ............ show package version
    help ............... show help menu for a command
    `,

  "create-component": `
    matt create-component <options>

    --name, -n ....the name for the component
    --big, -b ..... the type of component to create

    * Remember to navigate to the directory where you want the component!
    `,
    hey: `
    matt hey <options>

    No options to see here ...
    `,
    weather: `
    matt weather <options>

    --location, -l ..... the location search in

      * For example: matt weather --location "London"
`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0]

  console.log(menus[subCmd] || menus.main)
}