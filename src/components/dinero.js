import React, { Fragment } from "react";


const Dinero = ({dinero, restante}) => {

 

    return(
        <Fragment>
            <div>
                Presupuesto : $ {dinero}
            </div>
            <div>
                Dinero Disponible : $ {restante}
            </div>



        </Fragment>
    )



}

export default Dinero;