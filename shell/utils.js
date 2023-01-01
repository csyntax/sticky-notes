const path = require('path');
const { URL } = require('url');

export function resolveHtmlPath(htmlFileName) {
    const { NODE_ENV } = process.env;

    if (NODE_ENV === 'development') {
        const port = process.env.PORT || 1212;
        const url = new URL(`http://localhost:${port}`);

        url.pathname = htmlFileName;

        return url.href;
    }

    return `file://${path.resolve(__dirname, '../app/dist', htmlFileName)}`;
}