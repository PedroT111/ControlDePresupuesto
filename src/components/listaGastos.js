import React from "react";

import Gasto from "./gasto"



const ListaGastos = ({gastos}) => {

    return(
        <React.Fragment>
            <h2>Lista de Gastos</h2>
            
            {
                gastos.map( gasto => (
                    <Gasto
                    key = {gasto.id}
                    gasto = {gasto}/>
                ))
            }

        </React.Fragment>
    )

}

export default ListaGastos;