  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4];
let result = [];
for (num of nums) {
  result.push(num*2);
}
// console.log(result);

// Using map()
function multiplyBy2(num) {
  return num*2;
}
let result1 = nums.map(multiplyBy2);
// console.log(result1);

// Simplified w/ map()
let result2 = nums.map(function (num) {return num*2});
// console.log(result2);


// Simplfied w/ map() + arrow function
let result3 = nums.map(num => num*2);
// console.log(result3);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
const studentsWithIDs = students.map(student => [student.id, student.name])
console.log(studentsWithIDs);

const studentObjsWithIds = students.map(student => ({id: student.id, name: student.name}));
console.log(studentObjsWithIds);

let age = [32, 44, 35];
const studentObjsWithAge = students.map(student => ({...student, age: age[students.indexOf(student)]}));
console.log(studentObjsWithAge);
