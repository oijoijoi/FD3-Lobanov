class Scales {
    private onScalesArray:Array<Product> = [];

    public add(product:Product) {
        this.onScalesArray.push(product);
    }

    public getSumScale():number {
        let sumScale:number = 0;
        this.onScalesArray.forEach((element:Product) => {
            sumScale += element.getScale();
        });
        return sumScale;
    }

    public getNameList():Array<string> {
        let nameList:Array<string> = [];
        this.onScalesArray.forEach((element:Product) => {
            nameList.push(element.getName());
        });
        return nameList;
    }

}

class Product {
    protected scale:number;
    protected name:string;

    constructor (_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }

    public getScale():number {
        return this.scale;
    }

    public getName():string {
        return this.name;
    }
}

class Apple extends Product {
    constructor(_name:string, _scale:number) {
        super(_name, _scale);
    }
}

class Orange extends Product {
    constructor(_name:string, _scale:number) {
        super(_name, _scale);
    }
}

let scales:Scales = new Scales();

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