//задание 1
function loop(times = 0, callback = null) {
	for (let i = 0; i < times; i++) {
		callback();
	}
}

function myFunction() {
	alert('функция');
}

//задание 2
function calculateArea(width, length, figure){

 

    switch (figure){
        case 'triangle':

        return {

            "area": 1/2 * (width*length),

            "figure": figure,

            "input": width,length

        };
        break;
        case 'rectangle':
			return {

            "area": (width*length),

            "figure": figure,

            "input": width,length

        };
         
        break;
        case 'circle':
		
         return {

            "area": p*(length*length),

            "figure": figure,

            "input": p, length

        };
        break;
 
       }
}
const p=3.14;

var result = calculateArea(9,6,'rectangle');
alert(JSON.stringify(result));
loop(3, myFunction);

//задание3

class Human {
	constructor() {
		this.name = 'name';
		this.age = 'age';
		this.dateOfBirth = 'dateOfBirth';
	}
	displayInfo() {
		console.log(this.name, this.age, this.dateOfBirth);
	}
}

class Employee extends Human {
	constructor() {
		super();
		this.salary = 'salary';
		this.department = 'department';
	}
	displayInfo() {
		console.log(this.salary, this.department);
	}
	printAll() {
		this.displayInfo();
		super.displayInfo();
	}
}

class Manager extends Employee {
  constructor() {
	super();  
    this.developers = ['developer','developer','developer'];
  }
	printDevelopers() {
		console.log(this.developers);
		//добавить разработчика
	}
	addDevelopers() {
		this.developers.push('developer');
		//добавить разработчика
	}
	delDeveloper() {
		this.developers.pop('developer');
		//удалить разработчика
	}
}

class Developer extends Employee {
  constructor() {
	super();  
    this.managers = ['John','Robert'];
  }
	
   chooseManager(){
	    console.log('менеджер:' + this.managers[0]);
		//выбрать менеджера
	}
}


const human = new Human();
const employee = new Employee();
const manager = new Manager();
const developers = new Developer();


manager.printDevelopers();
//manager.addDevelopers();
manager.delDeveloper();
employee.printAll();
developers.chooseManager();

