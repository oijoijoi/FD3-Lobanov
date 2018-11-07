var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    return Apple;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    return Orange;
}(Product));
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