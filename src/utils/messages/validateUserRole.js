const get = require('lodash/get')

async function validateUserRole(message){

  const roles = get(message, 'member.roles.cache', [])
  const channel = get(message, 'channel.type', '')
  const messageAuthor = get(message, 'author.id', '')

  if(roles.length !== 0){
    let {id} = roles.find(role => role.name === "ParceriaShow")
    let userIdWithRole = roles.get(id).members.map(m=>m.user.id)
  
    if(message.content === "!bicho" && !messageAuthor.includes(userIdWithRole)){
      return false
    }
    else if(channel === "dm"){
      return false
    }
  
    return true
  }

  return false
}

module.exports = {validateUserRole}