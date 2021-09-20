import React, { useContext, useState, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const FormTareas = () => {
     //obtener si el proyecto esta activo
     const proyectosContext = useContext (proyectoContext);
     const {proyecto} = proyectosContext;

     //obtener tareas
     const tareasContext = useContext (tareaContext);
     const {errortarea, agregarTarea, validarTarea, obtenerTareas, tareaseleccionada, actualiarTarea} = tareasContext;

     useEffect(() => {
         if(tareaseleccionada!==null){
             guardarTarea(tareaseleccionada);
         }else{
             guardarTarea({
                 nombre:''
             })
         }
     }, [tareaseleccionada])
     const [tarea, guardarTarea] = useState({
        nombre:'' 
     });

     const { nombre } = tarea; 
    //si no hay proyecto seleccionado 
    if(!proyecto) return null; 


     //destructuring
     const [proyectoActual] = proyecto;

     const onSubmit = e =>{
         e.preventDefault();
        //vcalidar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        };

        if(tareaseleccionada === null){
            //agreagar nueva tarea al state
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        }else{
            actualiarTarea(tarea);
        }
       

        
        // registrar kas tareas

        obtenerTareas(proyectoActual._id)
        // reiniciar form
        guardarTarea({
            nombre:''
        })
     }

     const handleChange= e =>{
         guardarTarea({
             ...tarea,
             [e.target.name] : e.target.value
         })
     };

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        name="nombre" 
                        className='input-text'
                        placeholder='Nombre Tarea'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className='btn btn-primario btn-block btn-submit'
                        value={tareaseleccionada? 'Editar Tarea': 'Agregar Tarea'}
                />
                </div>
            </form>
            {errortarea ? <p className='mensaje error'>El Nombre de la Tarea es Obligatorio</p> : null}
        </div>
     );
}
 
export default FormTareas;