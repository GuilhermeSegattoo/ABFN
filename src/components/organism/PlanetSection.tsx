"use client";


import React from "react";
import "tailwindcss/tailwind.css";

const PlanetSection: React.FC = () => {
  const partners = [
    { id: 1, color: "bg-orange-500", name: "Escola Padauan" },
    { id: 2, color: "bg-blue-500", name: "Lira CIA" },
    { id: 3, color: "bg-green-500", name: "Nutri Saúde" },
    { id: 4, color: "bg-orange-400", name: "Parceiro 4" },
    { id: 5, color: "bg-blue-400", name: "Parceiro 5" },
    { id: 6, color: "bg-green-400", name: "Parceiro 6" },
   
    
   

  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full h-screen bg-white py-12">
      

      {/* Right Side: Solar System Layout */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 h-[500px] md:h-[600px]">
        <div className="absolute w-24 h-24 bg-gray-800 text-white font-bold flex items-center justify-center rounded-full shadow-lg z-10">
          ABFN
        </div>

        {/* Orbiting Planets */}
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg transition-transform transform hover:scale-125 ${partner.color}`}
            style={{
              animation: `orbit-${index} 10s linear infinite`,
            }}
          >
            <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded-md p-2 -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              {partner.name}
            </div>
          </div>
        ))}

        {/* Keyframes for rotation */}
        <style jsx>{`
          ${partners
            .map((_, index) => `
            @keyframes orbit-${index} {
              0% {
                transform: rotate(${index * (360 / partners.length)}deg) translateX(200px) rotate(-${index * (360 / partners.length)}deg);
              }
              100% {
                transform: rotate(${360 + index * (360 / partners.length)}deg) translateX(200px) rotate(-${360 + index * (360 / partners.length)}deg);
              }
            }
          `)
            .join("\n")}
        `}</style>
      </div>
    </section>
  );
};

export default PlanetSection;
