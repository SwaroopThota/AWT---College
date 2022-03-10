function myFun(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
  this.display = function () {
    setTimeout(() => {
      console.log("Id:", this.id, ",Name:", this.name, ",Salary:", this.salary);
    }, 1000);
  };
  this.display();
}
myFun(01, "John", 21212);
