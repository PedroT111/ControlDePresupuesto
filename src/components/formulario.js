import React, { Fragment, useState } from "react";
import shortid from "shortid"

import Error from "./error"

const Fromulario = ({guardarGasto, setCrearGasto}) => {

    const [gasto, setGasto] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = (e) => {
        e.preventDefault()

        //Validar formulario
        if(cantidad < 1 || isNaN(cantidad) || gasto.trim() === "" ) {
            setError(true)
            return;
        }

        setError(false)

        //Gasto
        const objectGasto = {
            gasto,
            cantidad,
            id : shortid.generate()
        }

        //Pasar nuevo gasto al componente principal
        guardarGasto(objectGasto)
        setCrearGasto(true)

        setGasto("");
        setCantidad("");
        
    }
    

  



    return(
        <Fragment>
            
                <h3>Agregar Gastos</h3>

                {error ? (<Error mensaje = "Ambos campos son obligatorios"/>) : null}

            <form className ="form-group" onSubmit = {agregarGasto}>
                <input
                type ="text"
                className = "form-control"
                placeholder ="Ej. Alquiler"
                value = {gasto}
                onChange = {e => setGasto (e.target.value)}></input>
                <input
                type="number"
                className="form-control"
                placeholder="Ej. $25000"
                value={cantidad}
                onChange = {e => setCantidad ( parseInt(e.target.value))}></input>
                <button
                className ="btn btn-info"
                type= "submit">Agregar</button>
            </form>
            





        </Fragment>
    )
}

export default Fromulario;