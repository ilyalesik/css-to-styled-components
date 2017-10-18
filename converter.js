
module.exports = function (cssContent) {
    return cssContent.replace(/\.[\w\-]+\s\{/g, function (str) {
        return str.replace(/\-/g, '_')
    });
};