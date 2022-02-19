
const arrowFunction = ()=> alert("Hello world");

arrowFunction();

class Student {
    constructor(name, roll){
        this.name =name;
        this.roll =  roll;
    }

    getInfo(){
        console.log(this.name + " " + this.roll);
    }


}
const obj  = new Student("sohelrana", 90083);
obj.getInfo()