"use strict";
// ------------Question 2 Personal Message---------------//
// let personName:string = "Qalb e Ali"
// console.log(`Welcome To The Typescript Class ${personName}`)
// ------------Question 3 Name Case ---------------//
// console.log(personName.toLowerCase())
// console.log(personName.toUpperCase())
// ------------Question 4 Famous Quote ---------------//
// let author = "Albert Einstein"
// let quote = "A person who never made a mistake never tried anything new.
// console.log(`${author} Once Said, "${quote}" `)
// ------------Question 5 Famous Quote ---------------//
// Done Completed in The Aboove
// ------------Question 6 Stripping Names---------------//
// let fName ="    Ali    "
// console.log(fName.trim())
// ------------Question 7 & 8 Mathematics   ---------------//
// let addition:number = 4+4;
// let substraction:number = 10-2;
// let multiplication:number = 4*2
// let divison:number = 64/8;
// console.log(addition)
// console.log(substraction)
// console.log(multiplication)
// console.log(divison)
// ------------Question 9 Favorite Numer   ---------------//
// let favrtNumer:number = 14
// console.log(`Hey Everyone! ${favrtNumer} is my favorite Number`)
// ------------Question 10 Comments   ---------------//
// I am going to write a function which iss simple
// function normalFunction(condition) {
//     // code to execute
// }
// ------------Question 11 Array Accessing   ---------------//
// let names:string[] = ["Ali","Habib","Naveed","Hurairah"]
// console.log(...names)
// ------------Question 11 Array Greeting   ---------------//
// let friendsNames:string[] = ["Ali","Habib","Naveed","Hurairah"]
// let message:string = "Assalm u Alikum From"
// for(let i=0; i<friendsNames.length; i++){
//     console.log(friendsNames[i])
// }
// ------------Question 12 Message Greeting   ---------------//
// let guests:string[] = ["Ali","Habib","Naveed","Hurairah"]
// let msg:string = "Assalm u Alikum From"
// for(let i=0; i<guests.length; i++){
//     console.log(`${msg} ${guests[i]}`)
// }
// ------------Question 13 My Own Array of Transportation   ---------------//
// let transportationArray = ["Bike", "Car","Honda","Aeroplane","Audi"]
// let message1 = "I would like to own a"
// function transportationVehicle (array:Array<string>) {
//   return array.map((item) => console.log(`${message1} ${item}`))
// }
// transportationVehicle(transportationArray)
// ------------Question 14 Guest Array   ---------------//
// let guestArray: string[] = ["Ali", "Habib", "Naveed", "Zia", "Usman"];
// let dear: string = "Dear";
// let msg2: string =
//   "I Would Like To Invite You In A Dinnet At My Home On Friday";
// function invitationFunc1(array: Array<string>) {
//   return guestArray.map((item) => console.log(`${dear} ${item}, ${msg2}`));
// }
// invitationFunc1(guestArray)
// ------------Question 15 Guest Array Modificationss  ---------------//
// let guestArray: string[] = ["Ali", "Habib", "Naveed", "Zia", "Usman"];
// let dear: string = "Dear";
// let msg2: string =
//   "I Would Like To Invite You In A Dinnet At My Home On Friday";
// function invitationFunc2(array: Array<string>) {
//   array.map((item) => {
//     console.log(`${dear} ${item}, ${msg2}`);
//   });
//   console.log(
//     "\x1b[37m%s\x1b[0m",
//     `*********** Unforunately, ${array[1]} is unable to come to dinner due to busy schedule ***********`
//   );
//   array.splice(1, 1, "Hurirah");
//   array.map((item) => {
//     console.log(`${dear} ${item}, ${msg2}`);
//   });
// }
// invitationFunc2(guestArray);
// ------------Question 16 & 17  More Guest Array  ---------------//
// let guestArray: string[] = ["Ali", "Habib", "Naveed"];
// let dear: string = "Dear";
// let msg2: string =
//   "I Would Like To Invite You In A Dinnet At My Home On Friday";
// function invitationFunc3(array: Array<string>) {
//   // Adding More Guests
//   console.log(
//     "\x1b[33m%s\x1b[0m",
//     " Hi Everyone, I got a bigger table and there will be more people in the dinner. Hurahh!!"
//   );
//   array.unshift("Hassan");
//   array.splice(array.length - 1, 0, "Bilal");
//   array.map((item) => console.log(`Dear ${item}, ${msg2}`));
//   // Shrinking The Array
//   console.log(
//     "\x1b[31m%s\x1b[0m",
//     "Unfortunately, Our Big Table Is Very Late And I Can Invite Only Two People To Dinner"
//   );
//   //   Removing All The Persons From The Array One By One
//   for (let i = 0; i < array.length; i++) {
//     if (array.length > 2) {
//       let result = array.splice(array.length - 1, 1);
//       console.log(
//         "\x1b[37m%s\x1b[0m",
//         `${result} Sorry I Can't Invite You To Dinner Due To The Shortage Of Space`
//       );
//       //   Inviting The Last Two Person To Dinner
//       if (array.length === 2) {
//         array.map((item) =>
//           console.log(
//             "\x1b[32m%s\x1b[0m",
//             `Dear ${item} You Are Still Invited To Dinner`
//           )
//         );
//       }
//       for (let i = 0; i < array.length; i++) {
//         if (array.length > 0) {
//           array.pop();
//         }
//       }
//     }
//   }
// }
// invitationFunc3(guestArray);
// ------------Question 18  World Places  ---------------//
// let favrtPlaces: Array<string> = [
//   "Saudia",
//   "Istanbul",
//   "Switzerland",
//   "London",
//   "Pakistan",
// ];
// function favrPlaceFunc(array: Array<string>) {
//   // Printing in original Form
//   console.log(array);
//   // Soriting a New in Alphaatical order
//   let sortedArray = [...array].sort();
//   console.log(sortedArray);
//   //   Printing Original Array Again
//   console.log(array);
//   // Printing The Array In Reverse Alphabetical Order
//   let reverseAlphabeticalArray = [...array];
//   reverseAlphabeticalArray.sort((a, b) => b.localeCompare(a));
//   console.log(reverseAlphabeticalArray);
//   //   Printing Original Array Again
//   console.log(array, "The Original Array");
//   //   Reversing the order
//   let reverseArray = array.reverse();
//   console.log(reverseArray, "Reversed Array is here");
//   let reReverseARRAY = array.reverse();
//   console.log(reReverseARRAY, "Rereversed Array is here");
//   // Soritng the origianal array in alphabetical order
//   let sortArray = array.sort();
//   console.log(sortArray,"Final Sort Array");
//   // Soritng the origianal array in alphabetical order
//   let reverseAlphaArray = array.sort((a,b) => b.localeCompare(a))
//   console.log(reverseAlphaArray,"Final Reverse Array");
// }
// favrPlaceFunc(favrtPlaces);
// ------------Question 20  Array Of Anything  ---------------//
// let emptyArray:any = []
// function arrayOfAnything(input:any){
//     emptyArray.push(input)
//     // console.log(emptyArray);
//     return emptyArray
// }
// console.log(arrayOfAnything("Something"));
// ------------Question 21  Object Of Anything  ---------------//
// function createObject () {
//     let result = {
//         mountain:"K2",
//         country:"Pakistan",
//         rirver:"Sindh",
//         city:"Faisalbad"
//     }
//     return result
// }
// console.log(createObject());
// ------------Question 23  Conditional Test  ---------------//
// let car = 'subaru';
// console.log(car == 'subaru')
// let number = 1
// console.log(number == 0);
// let animal = "elephant"
// console.log(animal=="tiger");
// let bike = "honda"
// console.log(bike == "honda");
// let name1 = "Ali"
// console.log(name1 == "Ali");
// let name2 = "Ali"
// console.log(name2 == "ali");
// let bol = true
// console.log(bol == true);
// let country = "Pakistan"
// console.log(country == "Saudia");
// Checking Whethere An Element is in Array or not
// let numbers:Array<number> = [2,3,4,5,6,7,8]
// if(numbers.includes(2)){
//     console.log("The Numer is in an array");
// }else {
//     console.log("Number is not in an array");
// }
// ------------Question 25  ALIEN GAME   ---------------//
// let alien_color:string = "Green"
// function checkAlienColor(color:string){
//     if(color == "green"){
//        return console.log("Playe Just Earned 5 Points");
//     }else {
//         return
//     }
// }
// checkAlienColor(alien_color)
// ------------Question 26  ALIEN GAME 2   ---------------//
// function checkAlienColor2(color:string) {
//     let finalColor = color.toLowerCase()
//     console.log(finalColor,"finalColor");
//  if(finalColor == "green"){
//         console.log("Player just earned 5 points for shooting the alien");
//     }else {
//         console.log("Player just earned 10 points for shooting the alien");
//     }
// }
// checkAlienColor2("brown")
// ------------Question 27  ALIEN GAME 2   ---------------//
// function checkAlienColor2(color:string) {
//         let finalColor = color.toLowerCase()
//      if(finalColor == "green"){
//             console.log("Player just earned 5 points for shooting the alien");
//         }else if(finalColor == "yellow") {
//             console.log("Player just earned 10 points for shooting the alien");
//         }else if (finalColor == "red") {
//             console.log("Player just earned 15 points for shooting the alien");
//         }else {
//             return
//         }
//     }
//     checkAlienColor2("YELLOW")
// ------------Question 28  Human Life Stages   ---------------//
// function humanLifeStages(age:number) {
//     if (age < 2) {
//         console.log("The person is a baby");
//     }else if (age == 2 || age < 4){
//         console.log("The person is a toddler");
//     }else if (age == 4 || age < 13){
//         console.log("The person is an kid");
//     }else if (age == 13 || age < 20){
//         console.log("The person is an teenager");
//     }else if (age == 20 || age < 65){
//         console.log("The person is an adult");
//     }else {
//         console.log("The Person is elder");
//     }
// }
// humanLifeStages(13)
// ------------Question 29  Favourite Fruits   ---------------//
// let favouriteFruits:Array<string> = ["Apple","Peach","Apricot","Banana"]
// function fruitCheck(fruit:string){
//     if(favouriteFruits.includes ("Apple")){
//         console.log(`You Really Like ${fruit}`);
//     }else if(favouriteFruits.includes ("Peach")){
//         console.log(`You Really Like ${fruit}`);
//     } else if(favouriteFruits.includes ("Apricot")){
//         console.log(`You Really Like ${fruit}`);
//     }else if(favouriteFruits.includes ("Banana")){
//         console.log(`You Really Like ${fruit}`);
//     }
// }
// fruitCheck("Apple")
// ------------Question 30 & 31  Hello Admin   ---------------//
// let peopleArray: Array<string> = ["Talha", "Ali", "Admin", "Habib", "Naveed"];
// function greetingToUsers(array: Array<string>) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let user = element.toLowerCase();
//     if (user === "admin") {
//       console.log("Hello admin, would you like to see a status report?");
//     } else {
//       console.log(`Welcome back ${element}`);
//     }
//   }
// //   Checking If Array is empty
//   if(!array.length){
//     console.log("We Need To Find Some New Users");
//   }
//   while (array.length > 0) {
//     console.log(array);
//     array.pop()
//     console.log(array,"Array is starting empty now");
//   }
// }
// greetingToUsers(peopleArray);
// ------------Question 32  Checking Username   ---------------//
// let current_users:Array<string> = ["Talha", "Ali", "Admin", "Habib", "Naveed"]
// let new_users:Array<string> = ["Usman", "Wajid", "Inam", "Habib", "Naveed"]
// function userChecker(name:string){
//     let editName = name.toLowerCase()
//     let openCurrentArray = [...new_users]
//     if(openCurrentArray.includes(name)){
//         console.log("The Username is already available");
//     }else {
//         console.log("Username is available");
//     }
// }
// userChecker("Naveed")
// ------------Question 33  Checking Username   ---------------//
// let ordinalNumber:Array<number> = [1,2,3,4,5,6,7,8,9]
// function makingOrdinalNumber(array:Array<number>) {
//     const ordinalEnding:string[] = ["st","nd","rd"]
//     for(const number of array){
//         let ending:string
//         if(number % 10 === 1 && number % 100 !== 11){
//             ending = "st"
//         }else if(number % 10 === 2 && number % 100 !== 12) {
//             ending="nd"
//         }else if(number % 10 === 3 && number % 100 !== 13){
//             ending = "rd"
//         }else {
//             ending = "th"
//         }
//         console.log(`${number}${ending}`);
//     }
// }
// makingOrdinalNumber(ordinalNumber)
// ------------Question 34  Pizza Problem  ---------------//
// let pizzaArray:string[] = ["Veggie Pizza","Pepperoni Pizza","Meat Pizza"]
// function pizzaPanga(array:string[]){
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         console.log(element);
//         console.log(`I really love ${element}`);
//     }
//     console.log("Pizza is a beloved culinary delight known for its versatility. With its combination of a crispy crust, savory tomato sauce, melted cheese, and an array of toppings, it offers a delightful fusion of flavors and textures that has made it a universally cherished dish worldwide. Whether enjoyed as a classic Margherita or loaded with diverse ingredients, pizza continues to satisfy a wide range of tastes and preferences.");
// }
// pizzaPanga(pizzaArray)
// ------------Question 35  Animal Array  ---------------//
// let animalArray:string[] = ["Horse","Dog","Cat"]
// function workingOnAnimal(array:string[]){
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         // console.log(element);
//         // console.log(`${element} would be the great animal to pet`);
//          }
//          console.log("All of these animals are loyal and good to keep at home");
// }
// workingOnAnimal(animalArray)
// ------------Question 36  T_Shirt Program  ---------------//
// function make_Shirt(size:number,message:string){
//    return (`This is a t-shirt with size ${size}, and message:${message}`)
// }
// console.log(make_Shirt(34,"Awesome"));
// ------------Question 37 Large T_Shirt  ---------------//
// let shirtSize:string = "Large"
// let shirtSize2:string = "Medium"
// let message:string = "I Love Typescript"
// function large_Shirt(size:string, message:string){
// console.log(`The shirt size is ${size} and with the message of ${message}`);
// }
// large_Shirt(shirtSize,message)
// ------------Question 38 Cities  ---------------//
// let default_country:string = "Pakistan"
// function describe_city(city:string,country:string){
// console.log(`The City ${city} is in ${country}`);
// }
// describe_city("Faisalabad",default_country)
// describe_city("Lahore",default_country)
// describe_city("Manchester",default_country)
// ------------Question 39 City Names  ---------------//
// function city_country(city:string,country:string){
//  return `"${city},${country}" `
// }
// console.log(city_country("Faisalbad","Pakistan"));
// console.log(city_country("Makkah","Saudia"));
// console.log(city_country("London","Engalnd"));
// ------------Question 40 Make_Album  ---------------//
// function make_Album(artist_name:string,album_title:string, make_Album?:number){
//     return {artist:artist_name,album:album_title,numberOfSongs:make_Album}
// }
// console.log(make_Album("Falak Tk","Akshay Kumars"));
// console.log(make_Album("Heeriya","Unknown"));
// console.log(make_Album("Bandeya","Arjit Singh",3));
// ------------Question 41 Magician Names  ---------------//
// let magician_Name: Array<string> = [
//   "Houdini",
//   "David Copperfield",
//   "Criss Angel",
//   "David Blaine",
// ];
// function printMagicians(array: Array<string>) {
//   return array.map((item) => console.log(item));
// }
// printMagicians(magician_Name);
// ------------Question 42 Great Magician  ---------------//
// let magician_Name2: Array<string> = [
//   "Houdini",
//   "David Copperfield",
//   "Criss Angel",
//   "David Blaine",
// ];
// function make_Great(array: Array<string>) {
//   let result = array.map((item) => console.log(`The Great Magician ${item}`));
//   console.log(result);
//   // ------------Question 43 Unchanged Magician  ---------------//
//   let copiedArray = [...array];
//   console.log(copiedArray, "copiedArray");
//   console.log(array, "Simple Array");
// }
// console.log(make_Great(magician_Name2));
//   // ------------Question 44 Sandwich  ---------------//
// function makeSandwich(array:Array<string>){
//     let open = array.toString()
//     return (`Sandwich Should contain ${open}`)
// }
// console.log(makeSandwich(["Bread","Mayonise","Ketchup","Chicken","Potato"]));
//   // ------------Question 45 Car Object  ---------------//
function carInfo(manafaturer, modelName, otherDetail) {
    return { manafaturer: manafaturer, model: modelName };
}
console.log(carInfo("Honda", "Civic", ["color", "red"]));
