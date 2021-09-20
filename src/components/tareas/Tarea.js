import React,{useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Tarea = ({tarea}) => {
    //obtener el state de proyecto
    const proyectosContext = useContext (proyectoContext);
    const {proyecto} = proyectosContext;


    //obtener tareas
    const tareasContext = useContext (tareaContext);
    const {eliminarTarea, obtenerTareas,actualiarTarea, guardarTareaActual} = tareasContext;

    //extraer el proyecto
    const [ proyectoActual] = proyecto;
 
    //funcion cuando eliminar tarea
    const tareaEliminar = id =>{
        eliminarTarea(id, proyectoActual._id)
        obtenerTareas(proyectoActual._id)
    }
    const cambiarEstado = tarea =>{
        if (tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        actualiarTarea(tarea);
    }

    const  seleccionarTarea = tarea =>{
        guardarTareaActual(tarea);
    }

    return ( 
         <div className="tarea sombra">
             <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                ?
                    (
                        <button
                            type='button'
                            className='completo'
                            onClick={()=>cambiarEstado(tarea)}
                        >completo</button>
                    )
                :
                    (
                        <button
                            type='button'
                            className='incompleto'
                            onClick={()=>cambiarEstado(tarea)}
                        >Incompleto</button>
                    )    
                
                }
            </div>
            <div className="acciones">
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={()=>seleccionarTarea (tarea)}
                >Editar</button>
                <button
                    onClick={()=>tareaEliminar(tarea._id)}
                    type='button'
                    className='btn btn-secundario'
                >Eliminar</button>
            </div>

         </div>
     );
}
 
export default Tarea;