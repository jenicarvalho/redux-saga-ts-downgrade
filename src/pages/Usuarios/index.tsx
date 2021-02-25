import React, { useEffect } from 'react';
import { getUsersRequest } from '../../store/ducks/usuarios/actions'
import { useDispatch, useSelector} from 'react-redux'
import { Users } from '../../store/ducks/usuarios/types'

const Usuarios = () => {

  const dispatch = useDispatch()

  const { loading, arrayDeUsuarios } = useSelector((state: any) => state.usuarios)

  const buscaUsuarios = () => {
      dispatch(getUsersRequest())
  }
  
  return (
    <div>
      { loading && <p>carregando....</p> }
      <p>Usuarios</p>
      <button onClick={buscaUsuarios}>Buscar usuarios</button>

      { arrayDeUsuarios !== undefined  && arrayDeUsuarios.map((item: Users) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}

export default Usuarios;