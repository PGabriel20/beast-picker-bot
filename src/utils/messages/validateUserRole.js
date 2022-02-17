async function validateUserRole(message){

  let adminRole = message.member.roles.cache.find(r => r.name === "ADM Master")

  if(message.content === "!bicho" && !adminRole){
    return false
  }

  return true
}

module.exports = {validateUserRole}