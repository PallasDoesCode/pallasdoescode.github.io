/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        author: 'Tyler Hughes',
        description: 'Portfolio for Tyler Hughes',
        locale: 'en',
        siteUrl: 'https://pallas.media',
        social: [
            {
                name: 'twitter',
                url: 'https://twitter.com/PallasStreams',
            },
            {
                name: 'github',
                url: 'https://github.com/PallasStreams',
            },
        ],
        title: 'Tyler Hughes - Web Developer',
    },
    plugins: [
        {
            resolve: '@wkocjan/gatsby-theme-intro',
            options: {
                basePath: '/',
                contentPath: 'content/',
                showThemeLogo: true,
                theme: 'classic'
            }
        }
    ]
};
