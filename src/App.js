import React, { Fragment, useEffect, useState } from "react";
import "./App.css"

//Components
import PreguntaPresupuesto from "./components/preguntaPresupuesto"
import Formulario from "./components/formulario"
import ListaGastos from "./components/listaGastos";
import Dinero from "./components/dinero"





function App() {
  //State
  const [dinero, setDinero] = useState(0);
  const[restante, setRestante] = useState(0);
  const [pregunta, setPregunta] = useState(true);
  const [gasto, guardarGasto] = useState({});
  const [ crearGasto, setCrearGasto] = useState(false)


  //Al agregar un gasto nuevo
  const[gastos, guardarGastos] = useState([]);




  //UseEfecct que va actualizando el dinero disponible

  useEffect(() => {
    if(crearGasto){
      //Agrega gastos
      guardarGastos(
        [
          ...gastos,
          gasto
        ]
      )

       //Resta del dinero disponible
    const dineroDisponible = restante - gasto.cantidad;
    setRestante(dineroDisponible)

    setCrearGasto(false)
    }
  }, [gasto] );




  return (
    <Fragment>
    <div>
      <h1>Presupuesto</h1>


      { pregunta ? (
      <PreguntaPresupuesto
      setDinero = {setDinero}
      setRestante={setRestante}
      setPregunta={setPregunta}  />) : (

        <div className = "controlGastos">

      <div className="gastos"> 
      <Formulario
      guardarGasto = {guardarGasto}
      setCrearGasto = {setCrearGasto}
      /> </div>

      <div className="dinero"> 
        <ListaGastos
        gastos = {gastos}/>

        <Dinero
        dinero ={dinero}
        restante = {restante}
       />

       </div>

    </div>
      ) }


    </div>

    
    </Fragment>
  );
}

export default App;
