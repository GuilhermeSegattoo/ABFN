"use client";


const Politica = () => {
  return (
    <div id="politica">
      <section className="py-16 px-6 bg-gray-100 text-gray-800">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
          <p className="mb-4">
            Na <strong>Associação Brasileira das Famílias Numerosas (ABFN)</strong>, privacidade e segurança são prioridades. Comprometemo-nos à transparência no tratamento de dados pessoais dos nossos associados, parceiros e usuários.
          </p>
          <p className="mb-4">
            Esta Política de Privacidade detalha como coletamos, usamos e transferimos informações de clientes e usuários que acessam nosso site. Ao utilizar nossos serviços, você consente com a coleta e uso de suas informações pessoais conforme descrito nesta Política, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018) e outras legislações aplicáveis no Brasil.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Quais Dados Coletamos?</h2>
          <p className="mb-4">
            Durante o uso de nosso site, coletamos os seguintes dados:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Nome:</strong> Para identificação de associados e dependentes.
            </li>
            <li>
              <strong>Email:</strong> Para identificação.
            </li>
            <li>
              <strong>Telefone:</strong> Para contato e comunicação.
            </li>
            <li>
              <strong>Dados da família:</strong> Coletados para identificação de dependentes.
            </li>
            <li>
              <strong>Dados de navegação:</strong> Coletados automaticamente, como IP, dispositivo utilizado e cookies.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">2. Como Coletamos os Dados?</h2>
          <p className="mb-4">
            Coletamos os dados nas seguintes ocasiões:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Durante o preenchimento de formulários no site.</li>
            <li>Automaticamente durante a navegação, por meio de cookies.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Seus Direitos</h2>
          <p className="mb-4">
            Em conformidade com a LGPD, garantimos os seguintes direitos:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Acessar e corrigir seus dados pessoais.</li>
            <li>Solicitar anonimização, bloqueio ou exclusão de dados.</li>
            <li>Revogar o consentimento para o tratamento de dados.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Segurança</h2>
          <p className="mb-4">
            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados e incidentes de segurança. Apesar disso, nenhuma plataforma é inteiramente segura, e comunicaremos qualquer incidente de segurança que envolva seus dados.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Contato</h2>
          <p className="mb-4">
            Para mais informações ou para exercer seus direitos, entre em contato conosco:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>E-mail:</strong> abfnumerosas@gmail.com
            </li>
            
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Politica;
