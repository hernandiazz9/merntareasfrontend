import React,{useContext, useEffect} from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group'


const ListadoProyectos = () => {

    //obtener el state  del context
    const proyectosContext = useContext (proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    useEffect(()=>{
        obtenerProyectos();
        //eslint-disable-next-line
    }, [])

    if (proyectos.length=== 0) return <p>No hay Proyectos, Comienza creando uno</p>;

    

    return ( 
        <ul className='listado-proyectos'>
            <TransitionGroup>
            {proyectos.map(proyecto =>(
                 <CSSTransition
                    key={proyecto._id}
                    classNames='proyecto'
                    timeout={200}
                 >
                     <Proyecto 
                        
                        proyecto={proyecto}
                    />
                 </CSSTransition>
                
            ))}
            </TransitionGroup>
 
        </ul>
     );
}
 
export default ListadoProyectos;