import axios from 'axios'

const API_URL = '/users/'

// Login user
const login = async (userData: any) => {
  const response = await axios.post('/api/users/login', userData)
  console.log(response)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.user))//
    localStorage.setItem('token', JSON.stringify(response.data.token))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  login,
  logout,
}

export default authService