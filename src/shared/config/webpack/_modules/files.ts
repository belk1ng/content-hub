export const files = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
}