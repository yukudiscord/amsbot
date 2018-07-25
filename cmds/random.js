var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var random = array => { return array[Math.floor(Math.random()*array.length)] }

exports.info = {description: 'Рандомное говно\npassword - Рандомный пароль', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  var subcmd = args.shift()
  if(!subcmd) return msg.reply(`Ты должен указать нужный режим (смотри в ${client.p}help random)`)
  if(subcmd == 'password') {
    var res = ''
    var range = parseInt(args[0])
    if(range > 40) return msg.reply('Максимальная длина пароля - 40')
    if(isNaN(range)) range = 8
    if(range < 6) range = 6
    for(var i = 0;i<range;i++) {
      res += random(alphabet.concat(numbers))
    }
    msg.author.send(res)
    msg.reply('Чекни лс')
  }
}