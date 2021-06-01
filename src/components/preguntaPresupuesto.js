import React, {Fragment, useState} from "react"

//Components
import Error from "./error"



const PreguntaPresupuesto = ({setDinero, setRestante, setPregunta}) => {

    const [presupuesto, setPresupuesto] = useState(0);
    const[error, setError] = useState(false)

    const definirPresupuesto = (e) => {
        setPresupuesto(
            parseInt(e.target.value)
        )
    }

    const confirmarPresupuesto = (e) => {
        e.preventDefault();

        if( presupuesto < 1) {
            setError(true)
        }
        else{
            setError(false)
            
            setPregunta(false);
        }
        setDinero(presupuesto);
        setRestante(presupuesto);
        
    }    


    return(
        <Fragment>
            <div className="w-75 bg-light mx-auto">
            <h3>Ingresar Presupuesto Semanal</h3>

            {  error ? (<Error mensaje = "El presupuesto debe ser mayor o igual a $1"/>) : null}

            <form onSubmit ={confirmarPresupuesto} className="form-group">
                <input
                type="number"
                placeholder="Ingresar Presupuesto"
                className="from-control"
                onChange ={definirPresupuesto}
                value = {presupuesto}>

                </input>

                <button type="submit" class="btn btn-info  mt-3">Confirmar</button>
               
                
            </form>
            </div>
        </Fragment>
        
    )




}

export default PreguntaPresupuesto;