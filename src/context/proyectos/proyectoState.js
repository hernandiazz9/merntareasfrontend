import React,{useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import clienteAxios from '../../config/axios';
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = props =>{

    const intialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto:null
    }

    const [state, dispatch] = useReducer(proyectoReducer, intialState);

    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = async () =>{
        try {
            const resultado = await clienteAxios.get('/api/proyectos')

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    const agregarProyecto = async proyecto =>{
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
            
        }
    }
    const mostrarError = () =>{
        dispatch({
            
            type: VALIDAR_FORMULARIO
        })
    }
    const proyectoActual = proyectoid =>{
        dispatch({
            type: PROYECTO_ACTUAL, 
            payload: proyectoid
        })
    }
    const eliminarProyecto = async (proyectoId) =>{
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);

            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto

            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )


}
export default ProyectoState;