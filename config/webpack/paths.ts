import path from 'path';

const root = path.resolve(__dirname, '../../');

export const paths = {
    root,
    src: path.resolve(root, 'src'),
    build: path.resolve(root, 'build'),
    public: path.resolve(root, 'public')
};
