import React from "react";
import { useNavigate }  from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  return(
    <section className="navbar">
      <button onClick={() => navigate('/') } className="lineUpNav">Home</button>
      <button onClick={() => navigate('/projects') } className="lineUpNav">Projetos</button>
      <button onClick={() => navigate('/contact') } className="lineUpNav">Contato</button>
    </section>
  );
}

export default NavBar;