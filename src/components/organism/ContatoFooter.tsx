const ContatoFooter = () => {
  return (
    <footer className="bg-orange-500 mt-20 text-white py-12">
      <div id="contato" className="container mx-auto px-6">
        {/* Seção de Contato */}
        <div className="flex flex-wrap items-center justify-between mb-12">
          {/* Texto e Botão */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Seja o primeiro a saber das novidades!
            </h2>
            <a
              href="#contato"
              className="inline-block bg-white text-orange-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all mt-4"
            >
              Nossa Newsletter →
            </a>
          </div>
          {/* Logo */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <h3 className="text-4xl font-bold"><a href="/">ABFN</a></h3>
          </div>
        </div>

        {/* Linha Divisória */}
        <hr className="border-t border-orange-300 mb-6" />

        {/* Rodapé */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Links do Rodapé */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li className="text-light font-light text-lg hover:border-b-4 hover:border-third hover:text-third">
                <a href="/news">Notícias</a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Contato:</span>
              </li>

              <li>
                <a href="mailto:abfnumerosas@gmail.com" className="hover:underline">
                  abfnumerosas@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <ul className="space-y-2">
              <li>
                <a href="/termos" className="hover:underline">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="/politica" className="hover:underline">
                  Política e Privacidade
                </a>
              </li>

            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="w-full md:w-1/4">
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:underline">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#instagram" className="hover:underline">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Desenvolvedor */}
        <div className="mt-6 text-center text-sm">
          <p>2025 ABFN | Todos os direitos reservados.</p>
          <a href="https://www.devsegatto.com">Desenvolvedor Guilherme Segatto</a>
        </div>
      </div>
    </footer>
  );
};

export default ContatoFooter;
