import apisauce from 'apisauce'

const create = (baseURL = 'https://api.github.com/') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

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
