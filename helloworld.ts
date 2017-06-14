/* helloworld.ts */
/*
//blueprint of a house
class House{

  //instance variables - what an object is
  private numWindows: number;
  private numFloors: number;
  private houseColor: string;
  private address: string;
  private protection: boolean;

  //methods - what an object does

  //constructor CREATES your objects
  //addr is a cobstructor parameter
  constructor(numWin: number, numFl: number, houseCol: string, addr: string, protect: boolean){
    this.numWindows = numWin;
    this.numFloors = numFl;
    this.houseColor = houseCol;
    this.address = addr;

    this.protection = protect;
  }

  //void - doesn't return anything
  public giveAddress() : void{
    console.log("Our address is: " + this.address);
  }

  public breakWindow(): void{

    if(this.protection){
      console.log("I HAVE PROTECCCCTION!  GET OFF MY LAWN!");
    }

    if(this.numWindows > 0 && !this.protection){

      let newWin: number = this.numWindows--;
      console.log("My house now has " + newWin + " windows");
      console.log("I now have " + this.numWindows + " windows");
    }
    else{
      console.log("All windows are broken! :( ");
    }
  }

  public changeHouseColor(newHouseColor: string) : string{

    this.houseColor = newHouseColor;
    return this.houseColor;
  }

}

//ivanHouse is an object
let ivanHouse = new House(0, 1, "black", "5555 Merry Way, Candyland", false);

//wadsonHouse is ANOTHER object
let wadsonHouse = new House(7, 3, "white", "1st Penn Ane.", true);

ivanHouse.giveAddress();
ivanHouse.breakWindow();
let newColor = ivanHouse.changeHouseColor("blue");
console.log("Ivan's new house color is: " + newColor);

wadsonHouse.giveAddress();
wadsonHouse.breakWindow();

*/












/*
abstract class Animal {
    abstract makeSound(): void;
    abstract reproduce(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

abstract class Canine extends Animal{
  ///doing a bunch of canine stuff

  private loyalty: number;

  abstract hunt(): void;
  abstract sniff(): void;
}

class Dog extends Canine{

  public makeSound(): void{
    console.log("woof");
  }

  public reproduce(): void{
    console.log("happy time :)");
  }

  public hunt(): void{
    this.move();
    console.log("hunting");
  }

  public sniff(): void{
    console.log("sniff sniff");
  }

}

let fido = new Dog();
fido.move();
*/



//worker, singer, waiter, singingwaiter that inherits both singer and waiter
//show multiple inheritance and interfaces

abstract class Workers{

	protected name: string;
	protected id: number;

	abstract setup(): void;

  //we do NOT use this directly
  //must call thru sub-class
  constructor(name: string, id: number){
    console.log("inside worker's constructor");

    this.name = name;
		this.id = id;
  }

}

interface Waiter{
	timeAllotedPerTable: number;

	collectPaycheck(): void;

	waitTables(): void;
}

interface Singer{
	voiceLeft: number;
	collectPaycheck(): void;
	sing(): void;
}

class SingingWaiter extends Workers implements Waiter, Singer{

	public timeAllotedPerTable: number;
	public voiceLeft: number;

	private panache: number;

	constructor(name: string, id: number, panache: number, timeAlloted: number, voiceLeft: number){
    super(name, id);

    this.timeAllotedPerTable = timeAlloted;
    this.voiceLeft = voiceLeft;
    this.panache = panache;

	}

  public setup(): void{
    console.log("setting up");
  }

	public waitTables(): void{
		console.log("wait tables");
	}

	public sing(): void{
		console.log(this.name + " is singing");
	}

	public collectPaycheck(): void{
		console.log("getting paid :) ");
	}

  public perform(singer: Singer): void{
    singer.sing();

  }

  public getPanache(): number {
    console.log("returning panache");

    return this.panache;
  }

	public setPanache(newPanache: number): void{
		if(newPanache > 0){
			this.panache = newPanache;
		}
		else{
			console.log("cannot go below zero");
			this.panache = 0;
		}
	}

	//a bunch of SingerWaiter methods
}


let singingWaiter: SingingWaiter = new SingingWaiter("Ivan", 1234, 10, 20, 5);
let singingWaiter2: SingingWaiter = new SingingWaiter("Javid", 1234, 10, 20, 5);

singingWaiter.setup();
singingWaiter.waitTables();
singingWaiter.sing();
singingWaiter.collectPaycheck();

singingWaiter.perform(singingWaiter2);
console.log("Panache is: " + singingWaiter.getPanache());

singingWaiter.setPanache(-30000000);
console.log("New panache is: " + singingWaiter.getPanache());


/*
function clean(target) {
  target.prototype.cleaned = true;
  target.prototype.name = "Elisa"
}

@clean
class Animal {}

let animal: ANi


*/




/*
class Greeting {

  public message: string;

  constructor(msg: string) {
      this.message = msg;
  }
    sayHi() {
        return "<h1>" + this.message + "</h1>";
    }
}

let greeter = new Greeting("Hello, world is cool!");
console.log(greeter.message);

let myNumber:   number  = 42;
let myBoolean:  boolean = true;
let myString:   string  = "Hello World";
let unusable:   void    = undefined; // Used as returning type for functions
let myWhatever: any     = { hello: 'World' }; // Can be any other type

let myArray: Array<string> = ['a','b','c']; // Array of strings

console.log(myArray);

document.body.innerHTML = greeter.sayHi();


interface Vehicle {
  engines: number;
  wheels: number;
  isMotorbike(): boolean;
}

interface Vehicle2 {
  engines2: number;
}

class Car implements Vehicle, Vehicle2 {
  model: string;

  constructor(public engines: number, public wheels: number, public engines2: number) {
      this.engines = engines;
      this.wheels = wheels;
      this.engines2 = engines2;
  }

  isMotorbike():boolean {
    return (this.wheels === 2);
  }

  setModel(model):void {
    this.model = model;
  }
}

let car = new Car(1, 9, 32);
car.setModel("Nissan GTR");

console.log(car.engines2);
*/

/*
function clean(target) {
  target.prototype.cleaned = true;
  target.prototype.name = "Ivan";
}

@clean
class Animal {}

let animal = new Animal();
console.log(animal.name);
*/














/*
function classDecorator<T extends {new(...args: any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property javid";
        hello = "override";
        num = 69;
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

let greeter2 = new Greeter("world");
console.log(greeter2.num);

function logClass(target: any) {

  // save a reference to the original constructor
  var original = target;

  // a utility function to generate instances of a class
  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  // the new constructor behaviour
  var f : any = function (...args) {
    console.log("New: " + original.name);
    return construct(original, args);
  }

  // copy prototype so intanceof operator still works
  f.prototype = original.prototype;

  // return new constructor (will override original)
  return f;
}

@logClass
class Person {

  public name: string;
  public surname: string;

  constructor(name : string, surname : string) {
    this.name = name;
    this.surname = surname;
  }
}

var p = new Person("remo", "jansen");
console.log(p.surname);
*/
