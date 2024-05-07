const user = {
    name: 'Diego Fernandes',
    height: 190,
    hasTicket: true,
  }
  
  const necessaryHeight = 130
  
  const currentHour = new Date().getHours()
  
  const isParkOpen = currentHour > 9 && currentHour < 18
  
  if (!isParkOpen) {
    throw new Error('O parque está fechado!')
  }
  
  const hasTicket = user.hasTicket
  
  if (!hasTicket) {
    throw new Error(`O ${user.name} não possui um bilhete para entrar no parque!`)
  }
  
  const isUserAvailableToEnterToy = user.height > necessaryHeight
  
  if (!isUserAvailableToEnterToy) {
    throw new Error(`O ${user.name} não pode entrar no brinquedo!`)
  } 
  
  console.log(`O ${user.name} se divertiu muito! :)`)