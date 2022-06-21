import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <section className="page-container">
        <div className="description-container">
          <h1 className="line-1 anim-typewriter">Olá, sou o Gabriel :)</h1>
          <p className="lineUp">Bem vindo ao meu portfólio!<br/></p>
          <p className="lineUp">Sou um estudante de desenvolvimento web fullstack que reside em Belo Horizonte/MG - Brasil</p> 
          <p className="lineUp">Gosto muito de tecnologia, ciência e de estar aprendendo coisas novas constantemente. </p>
        <NavBar/>
        </div>
      </section>
    </>
  );
}

export default Home;