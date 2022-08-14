const getSleepHours = day => {
  switch (day.toLowerCase()) {
    case 'sunday':
    return 7
    break
    case 'monday':
    return 4
    break
    case 'tuesday':
    return 2
    break
    case 'wednesday':
    return 8
    break
    case 'thursday':
    return 2
    break
    case 'friday':
    return 4
    break
    case 'saturday':
    return 7
    break
  }
}

const getActualSleepHours = () => 
  getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') 


const getIdealSleepHours = () => {
  let idealHours = 7
  return idealHours*7
}

calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()

  if (actualSleepHours === idealSleepHours) { console.log('you got the perfect amount of sleep') 
  }else if (actualSleepHours < idealSleepHours){
    console.log(`you need ${idealSleepHours - actualSleepHours} hours more rest`)
  }else if (actualSleepHours > idealSleepHours){
    console.log(`you slept ${actualSleepHours - idealSleepHours} hours more than needed`)
    }
}

calculateSleepDebt()
