/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.abfnumerosas.org', // URL do seu site
  generateRobotsTxt: true, // Gera automaticamente o robots.txt
  changefreq: 'daily', // Frequência de atualização sugerida
  priority: 0.7, // Prioridade padrão
  sitemapSize: 5000, // Gera apenas um arquivo, já que seu site tem menos de 5000 URLs
  generateIndexSitemap: false, // Desativa o índice de sitemaps (apenas um sitemap será gerado)
  exclude: [], // Exclua rotas específicas se necessário
  alternateRefs: [
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
