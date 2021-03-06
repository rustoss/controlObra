// se importan las librerias
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'

// se importan los context
import alertaContext from '../../context/alertas/alertaContext'
import authContext from '../../context/autenticacion/authContext'

// se crea el componente
const NuevaCuenta = (props) => {

    // Extraer los valores del context
    const alertasContext = useContext(alertaContext)
    const { alerta, mostrarAlerta } = alertasContext

    const authsContext = useContext(authContext)
    const { mensaje, autenticado, registrarUsuario } = authsContext

    // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        if(autenticado){
            props.history.push('/CONTROLOBRA')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)     
        }

    }, [mensaje, autenticado, props.history])

    // State para iniciar sesion
    const [ usuario, guardarUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const { nombre, email, password, confirmar } = usuario

    const handleChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesion
    const handleSubmit = e => {
        e.preventDefault()

        // Validar que no haya campos vacios
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')            
        }

        // Password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error')
            return
        }

        // Los 2 password son iguales
        if (password !== confirmar) {
            mostrarAlerta('Las passwords no son iguales', 'alerta-error')
            return
        }

        // Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password,
        })
    }


    return ( 
        <div className='form-usuario'>
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{ alerta.msg }</div> ) : null }
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una cuenta</h1>
                
                <form
                    onSubmit={handleSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre:</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu Nombre'
                            value={nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar password:</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu password'
                            value={confirmar}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrarme'
                        />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>Volver a Iniciar Sesion</Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;