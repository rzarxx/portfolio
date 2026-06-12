/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hirezakusuma.net',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
