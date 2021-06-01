import React, { Fragment } from "react";


const Gasto = ({gasto}) => {


    return(
        <Fragment>
            <li className = "liGastos">
                <p>
                    {gasto.gasto}
                </p>
                <span>
                    $ {gasto.cantidad}
                </span>
            </li>
        </Fragment>
    )

}

export default Gasto;