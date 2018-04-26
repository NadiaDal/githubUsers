import _ from 'lodash'

export const debounce = (f, time = 500) => {
  return _.debounce(f, time)
}
