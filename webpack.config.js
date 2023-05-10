module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'scriptsFinales.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilosFinales.css'
        })
    ]
}
