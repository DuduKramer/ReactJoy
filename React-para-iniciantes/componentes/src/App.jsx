import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Form from "./Form/Form.jsx";

const Teste = () =>{
  const active = false;
  if(active){
    return <p>Teste</p>
  } else{
    return null;
  }
}

const App = ()=>{
  return (
    <React.Fragment>
    <Teste />
    <Header />
    <Form />
    App
    <Footer /> 
    </React.Fragment>
  )
};

export default App;