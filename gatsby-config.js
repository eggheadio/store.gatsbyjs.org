require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://store.egghead.io',
    title: 'the egghead.io swag store',
    description: 'Buy egghead swag.'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/`)
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        storeUrl: process.env.SHOPIFY_STORE_NAME,
        password: process.env.SHOPIFY_ADMIN_PASSWORD
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'egghead Store',
        short_name: 'egghead Store',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/android-chrome-512x512.png'
      }
    },
    'gatsby-plugin-offline'
  ]
};
