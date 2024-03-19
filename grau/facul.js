/* Uma pessoa pode estudar em uma faculdade se:

Tiver concluído o ensino médio
Tiver 18 anos ou mais
Não estiver cursando outra faculdade

Escreva um programa com estas variáveis 
e mostre em uma mensagem se a pessoa pode ou não estudar nesta faculdade.*/

let pessoa = 'liujack'
let idade = 18
let maiorDeIdade = 18
let faculdade = true
let cursando = false

if (maiorDeIdade <= idade)

{
console.log('1/3')
}
else {console.log('0/3')}

if ( faculdade == true)
{
console.log('2/3')
}
else {console.log('0/3')}

if (cursando == false)
{
console.log('3/3')
}
else {console.log('0/3')}

let em = true
let maior = 18
let id = 17 >= maior
let cursand = false

if(id && em && cursand) {
    console.log (' ele podera entrar')
}
else {
    console.log ('infelizmente n pode')
}
