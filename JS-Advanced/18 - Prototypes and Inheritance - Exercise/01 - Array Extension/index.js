(() => {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
    
    Array.prototype.skip = function(n) {
        return this.slice(n);
    };
    
    Array.prototype.take = function(n) {
        return this.slice(0, n + 1);
    };
    
    Array.prototype.sum = function() {
        return this.reduce((previous, current) => previous + current);
    };
    
    Array.prototype.average = function() {
        return this.reduce((previous, current) => previous + current) / this.length;
    };
})();