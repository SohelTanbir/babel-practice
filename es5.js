"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrowFunction = function arrowFunction() {
    return alert("Hello world");
};

arrowFunction();

var Student = function () {
    function Student(name, roll) {
        _classCallCheck(this, Student);

        this.name = name;
        this.roll = roll;
    }

    _createClass(Student, [{
        key: "getInfo",
        value: function getInfo() {
            console.log(this.name + " " + this.roll);
        }
    }]);

    return Student;
}();

var obj = new Student("sohelrana", 90083);
obj.getInfo();
