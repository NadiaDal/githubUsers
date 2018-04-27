import apisauce from 'apisauce'
const consoleMonitor = (response) => console.log(response)

const create = (baseURL = 'https://api.github.com/') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  if (__DEV__) {
    api.addMonitor(consoleMonitor)
  }

  const getUsers = (query) => api.get('users', query)
  const getFollowers = (login) => api.get(`users/${login}/followers`)

  return {
    getUsers,
    getFollowers
  }
}

export default {
  create
}
