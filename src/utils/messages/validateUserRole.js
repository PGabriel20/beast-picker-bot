const get = require('lodash/get')

async function validateUserRole(message){

  const roles = get(message, 'member.roles.cache', [])
  const channel = get(message, 'channel.type', '')
  const messageAuthor = get(message, 'author.id', '')

  const allowedRoles = ["RPG", "Amigões"]

  if(roles.length !== 0){

    let allowedUserIds = []

    allowedRoles.forEach(item => {
      let {id} = roles.find(role => role.name === item)

      allowedUserIds.push(roles.get(id).members.map(m=>m.user.id))
    })
  
    if(message.content === "!bicho" && ! allowedUserIds.flat().includes(messageAuthor)){
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