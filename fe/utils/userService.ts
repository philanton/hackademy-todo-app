import axios from 'axios'

const baseuri = `http://${process.env.NEXT_PUBLIC_REST_API_URI}/user`;

const registerUser = (email: string, password: string) => {
  return axios.post(`${baseuri}/signup`, { email, password });
}

const loginUser = (email: string, password: string) => {
  return axios.post(`${baseuri}/signin`, { email, password })
}

const getUser = async () => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios.get<{ email: string }>(`${baseuri}/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    return data.email
  } catch (error) {
    return ""
  }
}

export const userService = {
  registerUser,
  loginUser,
  getUser,
}
