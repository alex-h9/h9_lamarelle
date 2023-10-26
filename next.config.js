/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    output: 'export', 
    // images: {
    //     unoptimized: true,
    // },
	webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets/style')],
    },
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
}

module.exports = nextConfig