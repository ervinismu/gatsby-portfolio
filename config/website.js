const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ervinismu - Portfolio Site', // Navigation and Site Title
  siteTitleAlt: 'Ervinismu', // Alternative Site title for SEO
  siteUrl: '#', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  // siteDescription: 'Playful & Colorful One-Page website with Parallax effect',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ervinismu', // Twitter Username
  ogSiteName: 'ervinismu', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
