const ParceirosSection = () => {
    const parceiros = [
      { id: 1, title: "Parceiro 1", color: "bg-yellow" },
      { id: 2, title: "Parceiro 2", color: "bg-third" },
      { id: 3, title: "Parceiro 3", color: "bg-secondary" },
      { id: 4, title: "Parceiro 4", color: "bg-third" },
      { id: 5, title: "Parceiro 5", color: "bg-secondary" },
      { id: 6, title: "Parceiro 6", color: "bg-third" },
    ];
  
    return (
      <section id="parceiros" className="py-16 bg-white mt-10">
        <div className="container mx-auto px-6 flex flex-wrap items-center">
          {/* Parte Esquerda: Parceiros */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            {/* Círculo central */}
            <div className="w-48 h-48 md:w-64 md:h-64 bg-primary flex items-center justify-center rounded-full shadow-lg relative z-10">
              <span className="text-xl font-bold text-light">ABFN</span>
            </div>
  
            {/* Círculos ao redor */}
            <div className="absolute w-full h-full flex items-center justify-center">
              {parceiros.map((parceiro, index) => {
                const angle = (360 / parceiros.length) * index; // Ângulo para cada círculo
                const radius = 185; // Distância entre o círculo central e os círculos menores
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
  
                return (
                  <div
                    key={parceiro.id}
                    className={`absolute ${parceiro.color} w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg flex items-center justify-center`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <span className="text-center text-sm md:text-base font-semibold text-white">
                      {parceiro.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
  
          {/* Parte Direita: Texto */}
          <div className="w-full lg:w-1/2 mt-40 lg:mt-0 text-center lg:text-left">
            <h2 className="text-4xl font-light text-primary mb-4">Nossos parceiros</h2>
            <div className="border-t-4 border-blue-500 w-1/3 mx-auto lg:mx-0 mb-6"></div>
            <p className="text-3xl font-light text-primary mb-4">
              Conectados com a ABFN
            </p>
            <p className="text-gray-600 font-light text-2xl">
              Nossos parceiros estão todos interligados à ABFN, formando uma rede de oportunidades, bem-estar e inovação.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ParceirosSection;
  