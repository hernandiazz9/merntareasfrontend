import React, { useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {
        //obtener el state de proyecto
        const proyectosContext = useContext (proyectoContext);
        const {proyectoActual} = proyectosContext;

        //obtener tareas
        const tareasContext = useContext (tareaContext);
        const {obtenerTareas} = tareasContext;

    
    const seleccionarProyecto = id =>{
        proyectoActual(id);
        obtenerTareas(id);
    }

    return ( 
        <li>
            <button
                className='btn btn-blank'
                type='button'
                onClick={()=>seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;