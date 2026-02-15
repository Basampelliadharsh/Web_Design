//push
let fruits = ["mango", "apple", "banana"];
fruits.push("custordappale");
console.log(fruits);
let subjects = ["html", "java", "css"];
subjects.push("python");
console.log(subjects);
let num = [2, 3, 5, 6, 7];
num.push(9);
console.log(num);
//pop
let fruit = ["cherry", "guava", "pomegranate", "banana"];
fruit.pop();
console.log(fruit);
let name = ["adarsh", "ramesh", "sai"];
name.pop();
console.log(name);
let number = [3, 4, 6, 7, 8];
number.pop();
console.log(number);
//shift()
let fruitss = ["banana", "apple", "guava", "cherry"];
fruitss.shift();
console.log(fruitss);
let nums = [1, 3, 4, 5, 6];
nums.shift();
console.log(nums);
let subject = ["ss", "dld", "ec"];
subject.shift();
console.log(subject);
//unshift();
let vill = ["ibp", "llp", "bnr"];
vill.unshift("lbn");
console.log(vill);
let nume = [2, 3, 4, 56, 7];
nume.unshift(4);
console.log(nume);
let waveproperties = ["frequency", "magnitude", "amplitude"];
waveproperties.unshift("signal");
console.log(waveproperties);
//length();
let signals = [2, 3, 4, 5];
console.log(signals.length);
let branch = ["cse", "ece", "civil", "mech", "it", "ce"];
console.log(branch.length);
let cities = ["hyd", "delhi", "mum", "surat"];
console.log(cities.length);
//includes()
let numbers = [1, 3, 4, 5, 6];
console.log(numbers.includes(5));
let array = ["push", "pop", "includes", "indexof", "shift"];
console.log(array.includes("unshift"));
let units = ["heartzs", "amperes", "columbs"];
console.log(units.includes("amp"));
//indexOf//
let numes = [4, 45, 6, 7, 8];
console.log(numes.indexOf(45));
let id = ["aryan", "abhi", "ayansh", "abhi", "ayush"];
console.log(id.indexOf("aryan"));
let codes = ["run", "walk", "jump", "sit", "up"];
console.log(codes.indexOf("up"));
//join
let datas = ["ram", "rom", "bus"];
console.log(datas.join(""));
let n = [2, 3, 4, 5, 6, 7];
console.log(n.join(""));
let nun = [23, 45, 6, 8, 5, 667];
console.log(nun.join(","));
//length
let letts = "hyderabad";
console.log(letts.length);
let numeru = "5665777678876887887878876543";
console.log(numeru.length);
let variable = "hypermetrophia";
console.log(variable.length);
let char = "romanreings";
console.log(char.toUpperCase());
let chars = "basusta";
console.log(chars.toUpperCase());
let nam = "starc";
console.log(nam.toUpperCase());
//objects
let stu = { name: "adarsh", age: 20, course: "degree" };
console.log(stu);
console.log(stu.course);
let employee = { name: "mahesh", age: 28, domain: "seniordesigner" };
console.log(employee);
console.log(employee.domain);
console.log(employee.age);
let teacher = { name: "ramesh", age: 45, subject: "ds" };
console.log(teacher);
console.log(stu.name);
let worker = { name: "sultan", age: 65, city: "hyderabad" };
worker.branch = "cse";
console.log(worker);
let nems = { name: "saikumar", age: 45, brach: "be" };
nems.name = "ranjith";
console.log(nems);
let cadet = { name: "vishal", age: 15, class: 12, group: "mpc" };
delete cadet.age;
console.log(cadet);
let car = { brand: "hyundai", model: 2020, price: 180000 };
console.log(car.brand);
car.color = "black";
console.log(car);
car.price = 1600000;
console.log(car);
let data = [{name:"sainath",age:22,branch:"BA"},
    {name:"adarsh",age:19,branch:"cse"},
    {name:"vishwa",age:20,branch:"ece"},
    {name:"rohith",age:24,branch:"civil"},
];
for (let i = 0;i<data.length; i++){
    console.log(data[i].name);
}
let employe = {name:"saikumar",age:23,salary:140000,role:"back end developer"};
console.log(employe.name);
console.log(employe.age);
console.log(employe.salary);
console.log(employe.role);
