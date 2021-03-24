function getRandomInt(arrayLength) {
  return Math.floor(Math.random() * Math.floor(arrayLength - 1))
}

const openingTimes = ['Regular', 'Non-Regular', 'Spare', 'Closed']
const repeatCondition = ['Doesnt Repeat', 'Weekly Until', 'Daily Until']

var times = 3
let dailyStatuses = []

for (var i = 0; i < times; i++) {
  const newOpeningTimes = {
    id: i,
    openingStatus: openingTimes[getRandomInt(openingTimes.length)],
    repeatCondition: repeatCondition[getRandomInt(repeatCondition.length)],
    start: new Date(2015, 3, i),
    end: new Date(2015, 3, i),
  }
  dailyStatuses.push(newOpeningTimes)
}

export default dailyStatuses
