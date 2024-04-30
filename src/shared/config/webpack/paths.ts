import path from 'path';

// FIXME: Find the way to do it better. Env-callback is possible solution.
const root = path.resolve(__dirname, '../../../../');

export const paths = {
    root,
    src: path.resolve(root, 'src'),
    build: path.resolve(root, 'build'),
    public: path.resolve(root, 'public')
};
