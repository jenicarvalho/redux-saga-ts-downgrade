import React, { useEffect, useRef } from 'react';
import { getUsersRequest } from '../../store/ducks/usuarios/actions'
import { useDispatch, useSelector} from 'react-redux'
import { Users } from '../../store/ducks/usuarios/types'

const Usuarios = () => {

  const dispatch = useDispatch()

  const { loading, objetoUsuario } = useSelector((state: any) => state.usuarios)

  
  const user = useRef<HTMLInputElement>(null)

  const buscaUsuarios = () => {
      console.log('page', user?.current?.value)
      dispatch(getUsersRequest(user?.current?.value))
  }


  return (
    <div>
      { loading && <p>carregando....</p> }
      <p>Usuarios</p>

      <input type="text" placeholder="usuario" ref={user}/>
      <button onClick={buscaUsuarios}>Buscar usuario</button>

      {objetoUsuario && 
        <div>
          <p>{objetoUsuario.name}</p>      
          <p>{objetoUsuario.username}</p>
        </div>      
      }
    </div>
  );
}

export default Usuarios;