const get = require('lodash/get')

async function validateUserRole(message){

  const roles = get(message, 'member.roles.cache', [])
  const channel = get(message, 'channel.type', '')
  const messageAuthor = get(message, 'author.id', '')

  try {
    let {id} = roles.find(role => role.name === "Amigões")
    let userIdWithRole = roles.get(id).members.map(m=>m.user.id)

    if(message.content === "!bicho" && !messageAuthor.includes(userIdWithRole)){
      return false
    }
    else if(channel === "dm"){
      return false
    }

    return true

  } catch (error) {
    return false      
  }
}

module.exports = {validateUserRole}