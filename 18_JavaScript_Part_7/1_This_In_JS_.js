// this Keyword
// "This" keyword refers to an object that is executing the current piece of code.

const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
    // let average = (eng+math+phy)/3;
     let average = (this.eng + this.math + this.phy)/3;
    }
}
student.getAvg();