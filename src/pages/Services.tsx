import { Component } from "solid-js";

const Services: Component = () => {
  return (
    <section id="services" class="p-10 bg-base-200">
      <h2 class="text-3xl font-bold">Serviços</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div class="card shadow-lg">
          <div class="card-body">
            <h3 class="card-title">Consultoria</h3>
            <p>Ajudamos você a definir a melhor estratégia.</p>
          </div>
        </div>
        <div class="card shadow-lg">
          <div class="card-body">
            <h3 class="card-title">Design de Banco de Dados</h3>
            <p>Criamos estruturas eficientes para seus dados.</p>
          </div>
        </div>
        <div class="card shadow-lg">
          <div class="card-body">
            <h3 class="card-title">Manutenção</h3>
            <p>Garantimos a segurança e integridade do seu sistema.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
