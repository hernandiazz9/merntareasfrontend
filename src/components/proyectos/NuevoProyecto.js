import React, {Fragment, useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {

        //obtener el state del formulario del context
    const proyectosContext = useContext (proyectoContext);
    const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;



    //state proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });
    const {nombre} = proyecto;
    
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    const onSubitProyecto = e =>{
        e.preventDefault();

        //validar
        if(nombre === '') {
            mostrarError()
            return;
        }

        //agregar al state
        agregarProyecto(proyecto)

        //reinicar form
        guardarProyecto({
            nombre: ''
        })

        
    }
    const onClick = () =>{
        mostrarFormulario()
    }

    return ( 
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick ={onClick}
            > Nuevo Proyecto</button>

           {
               formulario ? (
                    <form
                        className='formulario-nuevo-proyecto'
                        onSubmit={onSubitProyecto}
                    >
                        <input 
                            type="text" 
                            name="nombre" 
                            className='input-text'
                            placeholder='Nombre Proyecto'
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type="submit"
                            className='btn btn-primario btn-block'
                            value='Agregar Proyecto'
                        />
                    </form>

               ) :null}

               {errorformulario ? (
                   <p className='mensaje error'> El Nombre es OBLIGATORIO</p>
               )
               : null
               
               }
        </Fragment>
     );
}
 
export default NuevoProyecto;