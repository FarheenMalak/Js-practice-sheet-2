// Task # 01
// var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var evenNum = [];

// for (var i = 0;i<num.length;i++){
//   if(num[i] % 2 === 0){
//      evenNum.push(num[i]);
//   }
// }
// console.log(evenNum); //filtered even numbers

// Task # 02
// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var oddnum = 0;

// for(var i = 0;i<numbers.length;i++){
//   if(numbers[i] % 2 !==0){
//      oddnum += numbers[i]
//   }
// }
// console.log(oddnum); //Sum of odd numbers

// Task # 03

// for(var i = 1;i <= 100;i++){
//   if(i % 3 === 0 && i % 5 === 0 ){document.write("Fizz Buzz" + "</br>")}
//   else if (i % 3 === 0) {
//    document.write("Fizz" + "</br>");
//   }else if(i % 5 === 0 ){
//      document.write("Buzz"+ "</br>");
//   }
//   else{
//      document.write(i + "</br>");

//   }
//}
 
// Task # 04
// var words = ['Hello','World','Javascript']
// var totalCharacters = 0;
// for (let i = 0; i < words.length; i++) {
//             totalCharacters += words[i].length;
//         }
// console.log(totalCharacters);        

//Task # 05
// var words = ['Burger', 'Pizza', 'Sandwitch', 'Fries', 'Macaroni'];
// var maxWord = '';
// for ( i = 0; i < words.length; i++) {
//   if (words[i].length > maxWord.length) {
//     maxWord = words[i];
//   }
// }
// console.log(maxWord); // Sandwitch

//Task # 06
// var words = ['Hello','world','Javascript','is','fun','to','learn'];
// var longwords=[];
// for(i=0; i < words.length; i++){
//    if(words[i].length >= 3){
//      longwords.push(words[i])
//    }
// }
// console.log(longwords);

// Task # 07

// var usernum = prompt("Enter any number (greater than zero)");
// for(i=1; i <= 10; i++){
//    document.write(usernum + "x" + i + "=" + usernum*i + "</br>" );
// }

//Task # 08
// var numbers = [5, 2, 7, 3, 1];
// var sortedNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//    let j = 0;
//    while (j < sortedNumbers.length && numbers[i] > sortedNumbers[j]) {
//      j++;
//    }
//    sortedNumbers.splice(j, 0, numbers[i]);
// }
// console.log(sortedNumbers); // [1, 2, 3, 5, 7]

//Task # 09 
// var words = ['English', 'Urdu', 'Science', 'Sst', 'Sindhi','Art','Maths','Geography','Botany','Zoology'];
// var searchWord = prompt('Enter a Subject to search for:');
// var newWord = prompt('Enter a new Subject to replace the searched Subject with:');
// for (let i = 0; i < words.length; i++) {
//   if (words[i] === searchWord) {
//     words[i] = newWord;
//   }else{
//      alert("Your Entered subject is not in the list or try again by writing the first letter capital!");
//   } 
//   break
// }
// document.write(words);

//Task # 10
// var numbers = [1, 2, 3, 4, 5, 1, 2, 3];
// var uniqueNumbers = [];
// for ( i = 0; i < numbers.length; i++) {
//   var isUnique = true;
//   for ( j = 0; j < uniqueNumbers.length; j++) {
//     if (numbers[i] === uniqueNumbers[j]) {
//       isUnique = false;
//       break;
//     }
//   }
//   if (isUnique) {
//     uniqueNumbers.push(numbers[i]);
//   }
// }
// console.log(uniqueNumbers);

//END