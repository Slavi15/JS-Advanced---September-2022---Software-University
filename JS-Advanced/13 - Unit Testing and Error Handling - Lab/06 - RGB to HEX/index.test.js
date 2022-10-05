const { expect } = require('chai');
const { rgbToHexColor } = require('./index.js');

describe('rgbToHexColor', function() {
    it('should return color string', () => expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA'));
    it('should return color string', () => expect(rgbToHexColor(0, 0, 0)).to.equal('#000000'));
    it('should return color string', () => expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF'));

    it('should return undefined', () => expect(rgbToHexColor(-255, 158, 170)).to.be.undefined);
    it('should return undefined', () => expect(rgbToHexColor(255, -158, 170)).to.be.undefined);
    it('should return undefined', () => expect(rgbToHexColor(255, 158, -170)).to.be.undefined);
    it('should return undefined', () => expect(rgbToHexColor(256, 158, 170)).to.be.undefined);
    it('should return undefined', () => expect(rgbToHexColor('255', 158, 170)).to.be.undefined);
    it('should return undefined', () => expect(rgbToHexColor(254.5, 158, 170)).to.be.undefined);
});