import React, {useEffect, useContext} from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTareas from '../tareas/FormTareas';
import ListadoTarea from '../tareas/ListadoTareas';
import AuthContext from '../../context/auth/authContext';

const Proyectos = () => {

    //extraer la info de autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, [])

    return ( 
        <div className="contenedor-app">
            <Sidebar />
            
            <div className="seccion-principal">
                <Barra />
                <main>
                    <FormTareas />
                    <div className="contenedor-tareas">
                        <ListadoTarea />
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Proyectos;