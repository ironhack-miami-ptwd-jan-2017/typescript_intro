var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Workers = (function () {
    function Workers(name, id) {
        console.log("inside worker's constructor");
        this.name = name;
        this.id = id;
    }
    return Workers;
}());
var SingingWaiter = (function (_super) {
    __extends(SingingWaiter, _super);
    function SingingWaiter(name, id, panache, timeAlloted, voiceLeft) {
        var _this = _super.call(this, name, id) || this;
        _this.timeAllotedPerTable = timeAlloted;
        _this.voiceLeft = voiceLeft;
        _this.panache = panache;
        return _this;
    }
    SingingWaiter.prototype.setup = function () {
        console.log("setting up");
    };
    SingingWaiter.prototype.waitTables = function () {
        console.log("wait tables");
    };
    SingingWaiter.prototype.sing = function () {
        console.log(this.name + " is singing");
    };
    SingingWaiter.prototype.collectPaycheck = function () {
        console.log("getting paid :) ");
    };
    SingingWaiter.prototype.perform = function (singer) {
        singer.sing();
    };
    SingingWaiter.prototype.getPanache = function () {
        console.log("returning panache");
        return this.panache;
    };
    SingingWaiter.prototype.setPanache = function (newPanache) {
        if (newPanache > 0) {
            this.panache = newPanache;
        }
        else {
            console.log("cannot go below zero");
            this.panache = 0;
        }
    };
    return SingingWaiter;
}(Workers));
var singingWaiter = new SingingWaiter("Ivan", 1234, 10, 20, 5);
var singingWaiter2 = new SingingWaiter("Javid", 1234, 10, 20, 5);
singingWaiter.setup();
singingWaiter.waitTables();
singingWaiter.sing();
singingWaiter.collectPaycheck();
singingWaiter.perform(singingWaiter2);
console.log("Panache is: " + singingWaiter.getPanache());
singingWaiter.setPanache(-30000000);
console.log("New panache is: " + singingWaiter.getPanache());
