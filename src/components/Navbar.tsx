import { Component } from "solid-js";

const Navbar: Component = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Minha Empresa</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#plans">Planos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
