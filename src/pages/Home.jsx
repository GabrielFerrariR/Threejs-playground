import React from "react";
import Background from "../components/Background";

function Home() {
  return (
    <>
      <Background />
      <section className="page-container">
        <div className="description-container">
          <h1>Olá, sou o Gabriel!</h1>
          <p>Bem vindo ao meu portfólio, sou um estudante de desenvolvimento web fullstack que reside em Belo Horizonte/MG - Brasil, gosto muito de tecnologia, ciência e de estar aprendendo coisas novas constantemente. Veja alguns dos projetos que desenvolvi e entre em contato comigo caso tenha gostado do meu trabalho, tenha sugestões ou queira conversar :D </p>
        </div>
      </section>
    </>
  );
}

export default Home;