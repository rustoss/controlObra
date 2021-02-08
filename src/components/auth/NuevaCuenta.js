import React, {useState} from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

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

        // Password minimo de 6 caracteres

        // Los 2 password son iguales

        // Pasarlo al action
    }


    return ( 
        <div className='form-usuario'>
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