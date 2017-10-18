
module.exports = function (cssContent) {
    return cssContent
        .replace(/\.[\w\-]+\s\{/g, function (str) {
            var className = str.slice(1, str.length - 2);
            var classNameConverted = className
                .replace(/\b\w/g, function(l){ return l.toUpperCase() })
                .replace(/\-/g, '');
            return "export const " + classNameConverted + " = styled.span`";
        })
        .replace(/\}/g, "`");
};