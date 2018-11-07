var Scales = /** @class */ (function () {
    function Scales() {
        this.onScalesArray = [];
    }
    Scales.prototype.add = function (product) {
        this.onScalesArray.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        this.onScalesArray.forEach(function (element) {
            sumScale += element.getScale();
        });
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        this.onScalesArray.forEach(function (element) {
            nameList.push(element.getName());
        });
        return nameList;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Orange = /** @class */ (function () {
    function Orange(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Orange.prototype.getScale = function () {
        return this.scale;
    };
    Orange.prototype.getName = function () {
        return this.name;
    };
    return Orange;
}());
var scales = new Scales();
scales.add(new Apple('Apple One', 5));
scales.add(new Apple('Apple Two', 2));
scales.add(new Apple('Apple Three', 4));
scales.add(new Apple('Apple Four', 1));
scales.add(new Apple('Apple Five', 3));
scales.add(new Orange('Orange One', 5));
scales.add(new Orange('Orange Two', 2));
scales.add(new Orange('Orange Three', 4));
scales.add(new Orange('Orange Four', 1));
scales.add(new Orange('Orange Five', 30));
console.log(scales.getNameList());
console.log(scales.getSumScale());
//# sourceMappingURL=app.js.map