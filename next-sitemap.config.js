/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.abfnumerosas.org', //  URL do seu site
    generateRobotsTxt: false, // Gera automaticamente o robots.txt
    changefreq: 'daily', // Frequência de atualização sugerida
    priority: 0.7, // Prioridade padrão
    sitemapSize: 5000, // Limite de URLs por arquivo de sitemap
    exclude: ['/admin/*', '/secret/*'], // Exclua rotas específicas
    alternateRefs: [
      // Exemplo para rotas multilíngues
      {
        href: 'https://www.abfnumerosas.org/en',
        hreflang: 'en',
      },
      {
        href: 'https://www.abfnumerosas.org/pt',
        hreflang: 'pt',
      },
      {
        href: 'https://www.abfnumerosas.org/es',
        hreflang: 'es',
      },
    ],
  };
  