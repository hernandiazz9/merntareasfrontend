import React, {Fragment, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tarea from './Tarea';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group'




const ListadoTareas = () => {
     //obtener el state 
     const proyectosContext = useContext (proyectoContext);
     const {proyecto, eliminarProyecto} = proyectosContext;

     //obtener tareas
     const tareasContext = useContext (tareaContext);
     const {tareasproyecto} = tareasContext;


    //si no hay proyecto seleccionado 
    if(!proyecto) return <h2>Seleccione un Proyecto</h2>


     //destructuring
     const [proyectoActual] = proyecto;

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {tareasproyecto.length===0
                    ? (<li className='tarea'><p>No Hay Tareas!</p></li>)
                    : 
                    <TransitionGroup>
                        {tareasproyecto.map(tarea =>(
                        <CSSTransition
                            key={tarea._id}
                            timeout={200}
                            classNames='tarea'
                        >
                        <Tarea 
                            
                            tarea={tarea}
                        />
                        </CSSTransition>

                    ))} 
                    </TransitionGroup>
                    
                }
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
                onClick={()=> eliminarProyecto(proyectoActual._id)}
            >Eliminar Proyecto</button>

        </Fragment>

     );
}
 
export default ListadoTareas;