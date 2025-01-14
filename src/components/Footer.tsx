import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="footer p-10 bg-base-200 text-base-content">
      <div>
        <span class="footer-title">Minha Empresa</span>
        <p>Endereço<br />Telefone<br />Email</p>
      </div>
      <div>
        <span class="footer-title">Links</span>
        <a class="link link-hover">Sobre</a>
        <a class="link link-hover">Privacidade</a>
      </div>
    </footer>
  );
};

export default Footer;
