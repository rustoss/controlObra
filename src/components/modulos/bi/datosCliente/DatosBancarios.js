// se importan las librerias
import { Fragment } from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';

// Se importan los estilos
import { styleDatos } from '../../../../styles/bi/stylesBi'


const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: '#1565c0',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: '#64b5f6',
        borderWidth: 1,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 5,
        padding: '4px !important',
      },
    },
  })(TextField);
  
const DatosBancarios = () => {

    const css = styleDatos()


    return (
        <Fragment>
            <Box className={css.box}>
                <form className={css.root} noValidate autoComplete="off">
                    <ValidationTextField
                        label="Nombre de la empresa"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                    <ValidationTextField
                        label="RFC"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                    <ValidationTextField
                        label="Direccion fiscal"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                    <ValidationTextField
                        label="Telefono movil"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                     <ValidationTextField
                        label="Obra"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                </form>
            </Box>
        </Fragment>
    );
}
export default DatosBancarios;