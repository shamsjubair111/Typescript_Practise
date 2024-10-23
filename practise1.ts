

// 1. Create a function that takes a string and returns its length. Ensure the function only accepts strings.

// const returnLength = (data:string):number =>{
//     return data?.length;
// }

// let result:number = returnLength("Hello World");
// console.log(`Length of the string is: ${result}`);

// 2. Write a generic function identity<T>(arg: T): T that returns whatever is passed in. Ensure it works with any type.

// const returnIdentity = <T>(data:T):T => {
//    return data;
// }

// const result1 = returnIdentity<string>("Hello World");
// const result2 = returnIdentity<number>(1833023200);
// const result3 = returnIdentity<boolean>(false);
// const result4 = returnIdentity<object>({
//     name: "jubair",
//     age: 26
// });
// const result5 = returnIdentity<object>([1,"hello", false,{nmae:"test",id:1}]);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// 3. Create an interface Person that has properties: name (string), age (number), and gender (string).
// Write a function greet that takes a Person and returns a greeting message.

// interface Person{
//     name:string;
//     age:number;
//     gender:string
// }

// const retrieveData = (data:Person): string => {
//     return `name = ${data?.name}, age = ${data?.age}, gender = ${data?.gender}`;
// }

// const stringOutput = retrieveData({name:"Jubair",age:26,gender:"Male"});
// console.log(stringOutput);

// 4. Create a class Car with properties make, model, and year. Add a method getCarInfo that returns the car's details as a string.

// class Car{
//     make:string;
//     model:string;
//     year:number;

//     constructor(make:string, model: string, year:number){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getCarInfo(): string{
//          return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`;

//     }


// }

// const firstCar = new Car("USA","Audi Q8",2024);
// console.log(firstCar?.getCarInfo());

// 5. Create an enum DaysOfWeek representing the days of the week. Write a function that takes a day (using the enum) and returns a message indicating whether it's a weekday or weekend.

// enum DaysOfWeek{
//     SUNDAY,
//     MONDAY,
//     TUESDAY,
//     WEDNESDAY,
//     THURSDAY,
//     FRIDAY,
//     SATURDAY
//     }


// const getResult = (day:DaysOfWeek): string => {
//     let result:string;
//     if(day == DaysOfWeek?.SUNDAY){
//         return `Weekend`;
//     }
//     else{
//         return `Weekday`;
//     }

// }

// console.log(getResult(DaysOfWeek?.SUNDAY));

// 6. Write a function that takes a tuple of [string, number] representing a product's name and price, and returns a formatted string.

// const returnFormattedString = (data: [string, number]): string => {

//     return `${data[0]} ${data[1]}`;
// }

// console.log(returnFormattedString(["STRING",123456]));

// 7. Union Types
// Write a function display that accepts either a string or number. If it's a number, it should log It's a number; if it's a string, log It's a string.


// type input = string | number;



// const returnData = (data:input): input =>{
//     return data;
// }

// console.log(returnData(5));
// console.log(returnData("Hello World"));

