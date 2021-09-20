import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;
    
    //en caso de que el usr o pass no exista
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-next-line
    }, [mensaje, autenticado, props.history])


    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    }) 

    //extraer de usuario
    const{email, password}= usuario;

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value  
        })
    }
    // cuando preciona iniciar sesion
    const onSubmit = e =>{
        e.preventDefault();

        //validar
        if(email.trim()===''||password.trim()===''){
            mostrarAlerta('todos los campos son obligatorios', 'alerta-error');
        }

        //pasr al action
        iniciarSesion({email, password});
    }
    return ( 
        <div className="form-usuario">
            {alerta ? (<div className = {`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={email}
                            placeholder='Tu Email'
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={password }
                            id="password"
                            placeholder='Tu Password'
                            onChange={onChange}
                        />
                    </div>
                    
                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block'
                            value='Iniciar Sesión'
                        />
                    </div>
                </form>
                <Link to={'nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;