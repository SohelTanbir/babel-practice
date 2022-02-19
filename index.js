
const arrowFunction = ()=> console.log("Hello world");

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

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("This is a Promise");
    }, 2000)
})

myPromise
.then((res)=> console.log(res));