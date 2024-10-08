const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
    .prompt([
      { name: 'nome', message: 'Insira um nome' },
      { name: 'idade', message: 'Insira a idade' },
      { name: 'email', message: 'Insira um email'},
      { name: 'cpf', message: 'Insira seu cpf' }
    ])

    .then((answers) => {
        const response = `O nome do usuário é: ${answers.nome}, ele tem: ${answers.idade}, seu contato: ${answers.email}, seu cpf: ${answers.cpf}`
        console.log(chalk.bgYellow.black(response))
    })

    .catch((erro) => {
    console.error('Ops', erro)
  })