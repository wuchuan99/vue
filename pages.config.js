function getEntry(name) {
    console.log(`src/${name}/main.js`)
    return {
        entry: `src/${name}/main.js`,
        chunk: name,
        template: 'public/index.html',
        filename: `${name}.html`,
        chunks: ['chunk-vendors', 'chunk-common', name]
    }
}
function getUploadEntry(name) {
    console.log(`src/${name}/main.js`)
    return {
        entry: `src/${name}/main.js`,
        chunk: name,
        template: 'public/uploadIndex.html',
        filename: `${name}.html`,
        chunks: ['chunk-vendors', 'chunk-common', name]
    }
}
const pages = {
    index: getEntry('index'),
    detail: getEntry('detail')
}
module.exports = pages