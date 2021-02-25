import axios from 'axios'

const UsuariosService = {
  getUsuarios: (user: any) => axios.get(`https://jsonplaceholder.typicode.com/users/${user}`)
}

export default UsuariosService

