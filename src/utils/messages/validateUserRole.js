const get = require('lodash/get')

async function validateUserRole(message){

  const roles = get(message, 'member.roles.cache', [])
  const channel = get(message, 'channel.type', '')

  let allowedRoles = ["ADM Master", "Amigões", "ParceriaShow"]

  let {name} = roles.find(r => r.name)

  if(message.content === "!bicho" && !allowedRoles.join().includes(name)){
    return false
  }
  else if(channel === "dm"){
    return false
  }

  return true
}

module.exports = {validateUserRole}