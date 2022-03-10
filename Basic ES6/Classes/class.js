class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log("Hello, I am "+this.name+" and I am "+this.age+"years old");
    }
}

class Student extends Person{
    constructor(name,age,rollno){
        super(name,age);
        this.rollno = rollno;
    }
    display(){
        console.log("Hello, I am "+this.name+", I am "+this.age+" years old and my roll no. is "+this.rollno);
    }
}

const stud = new Student("Pavan",21,12);
stud.display();