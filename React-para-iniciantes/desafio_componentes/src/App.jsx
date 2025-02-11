import React from "react";
import Header from "./Header";
import Produtos from "./Produtos"; 
import Home from './Home';

const App = () => {
  const {pathname} = window.location;

  let Component;

  if(pathname === '/produtos'){
    Component = Produtos;
  }else{
    Component = Home;
  }

  return (
  <section>
    <Header />
    <Component />
  </section>
  );
};

export default App;
