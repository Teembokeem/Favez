import moment from 'moment'
export function toDuration(timestamp = '') {
  const t1 = moment(timestamp, 'YYYY-MM-DDTHH:mm:ss')
  const t2 = moment()
  const duration = moment.duration(t2.diff(t1))
  return getDurationStr(duration)
}

export function getDurationStr(momentDuration) {
  const years = momentDuration.asYears()
  const months = momentDuration.asMonths()
  const days = momentDuration.asDays()
  const hours = momentDuration.asHours()
  const minutes = momentDuration.asMinutes()
  const seconds = momentDuration.asSeconds()

  if (years >= 1) { return Math.round(years) + 'y' }
  if (months >= 1) { return Math.round(months) + 'm' }
  if (days >= 1) { return Math.round(days) + 'd' }
  if (hours >= 1) { return Math.round(hours) + 'h' }
  if (minutes >= 1) { return Math.round(minutes) + 'm' }
  if (seconds >= 1) { return Math.round(seconds) + 's' }
  return 'now'
}
