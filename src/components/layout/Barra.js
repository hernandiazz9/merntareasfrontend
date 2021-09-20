import React,{useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext';


const Barra = () => {

    //extraer la info de autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado, usuario, cerrarSesion  } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, [])


    return ( 
        <div className="app-header">
            {usuario? <p className='nombre-usuario'>Hola <span>{usuario.nombre}</span></p> :null}
            

            <nav className='nav-principal'>
                <button 
                    className='btn btn-blank cerrar-sesion'
                    onClick={()=>cerrarSesion()}
                >Cerrar Sesion</button>
            </nav>
        </div>
     );
}
 
export default Barra;