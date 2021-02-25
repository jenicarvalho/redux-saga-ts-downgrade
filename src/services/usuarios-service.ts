import axios from 'axios'

const UsuariosService = {
  getUsuarios: () => axios.get('https://jsonplaceholder.typicode.com/users')
}

export default UsuariosService

