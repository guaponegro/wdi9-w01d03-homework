console.log("JS is active");

// Easy Going

// for(i = 1; i <= 20; i++){
//     console.log(i);
// }

// // Get Even
// for(i = 0; i <= 200; i+=2){
//     console.log(i);
// }

// Excited Kitten

// letCatTalk = "Love me, pet me! HSSSSSS!"
// letCatTalk2 = "...human...why you taking pictures of me?...";
// letCatTalk3 = "...the catnip made me do it...";
// letCatTalk4 = "...why does the red dot always get away...";
// for(let i = 1; i <= 20; i++){
//     console.log(letCatTalk);
//     if(i % 2 === 0){
//         let testNumber = Math.random();
//         if(testNumber < 0.33){
//             console.log(letCatTalk2);
//         } 
//         if(testNumber > 0.33 && testNumber <= 0.66){
//             console.log(letCatTalk3);
//         }
//         if(testNumber > 0.66){
//             console.log(letCatTalk4);
//         }
//     }
// }

// Fizz Buzz

// for(i = 1; i <= 100; i++){
//  if(i % 3 === 0){
//     console.log("Fizz");
// } if(i % 5 === 0){
//     console.log("Buzz");
// } if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
// }
// console.log(i);
// }

// Getting to Know You

// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];
// // 1)
// shahzad.reverse();
// shahzad.pop();
// shahzad.push("Gameboy");
// console.log(shahzad);
// // 2)
// console.log(daniel[1] + 1);
// // 3
// ryan.pop();
// ryan.push("Gotham City");
// console.log(ryan);
// // 4
// reuben.pop();
// reuben.push("Chicago");
// console.log(reuben);
// // 5
// jim.pop();
// jim.push("New York", "Tokyo", "Los Angeles");
// console.log(jim);
// // Bonus
// jim.splice(2,1);
// console.log(jim);

// Yell at the Ninja Turtles

let ninjaTurtles = ["Donatello", "Leonardo", "Michaelangelo", "Raphael"];

// for(i = 0; i < ninjaTurtles.length; i++){
//     console.log(ninjaTurtles[i].toUpperCase());
// }
let manyNinjaTurtles = function(n) {
    let toggle = n.toLowerCase().split("");
    for(let i = 0; i < toggle.length; i +=2){
        toggle[i] = toggle[i].toUpperCase();
    }
    return toggle.join("");
};

for(let i = 0; i < ninjaTurtles.length; i++){
    console.log(manyNinjaTurtles(ninjaTurtles[i]));
}































