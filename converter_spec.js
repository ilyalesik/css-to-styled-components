var expect = require('chai').expect;
var converter = require('./converter');

describe('converter', function () {

    it('simple', function () {
        var css = ".heading-h-1-left {\n" +
            "\tfont-family: BloggerSans;\n" +
            "\tfont-size: 64px;\n" +
            "\tfont-weight: 500;\n" +
            "\tline-height: 1.09;\n" +
            "\ttext-align: left;\n" +
            "\tcolor: #525252;\n" +
            "}";

        var styledComponent = "export const HeadingH1Left = styled.span`\n" +
            "\tfont-family: BloggerSans;\n" +
            "\tfont-size: 64px;\n" +
            "\tfont-weight: 500;\n" +
            "\tline-height: 1.09;\n" +
            "\ttext-align: left;\n" +
            "\tcolor: #525252;\n" +
            "`";

        expect(converter(css)).to.equal(styledComponent);

    });
});