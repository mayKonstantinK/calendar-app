import moment from 'moment';

export function convertData(data) {
  return data.map((item) => {
    return {
      ...item,
      title: item.label,
      start: moment(item.start).toDate(),
      end: moment(item.end).toDate(),
    }
  })
}