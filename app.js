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

// let ninjaTurtles = ["Donatello", "Leonardo", "Michaelangelo", "Raphael"];

// // for(i = 0; i < ninjaTurtles.length; i++){
// //     console.log(ninjaTurtles[i].toUpperCase());
// // }
// let manyNinjaTurtles = function(n) {
//     let toggle = n.toLowerCase().split("");
//     for(let i = 0; i < toggle.length; i +=2){
//         toggle[i] = toggle[i].toUpperCase();
//     }
//     return toggle.join("");
// };

// for(let i = 0; i < ninjaTurtles.length; i++){
//     console.log(manyNinjaTurtles(ninjaTurtles[i]));
// }

// Return of the Closets (Alien Attire)

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

//   // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   let kristynsShoe = kristynsCloset[0];
//   kristynsCloset.shift();
//   thomsCloset[2].push(kristynsShoe);
//   console.log(thomsCloset);
//   console.log(kristynsCloset);

// // Return of the Closets (Dress 'em Up)
// const outfitOne = [kristynsCloset[1], thomsCloset[0][0], kristynsCloset[3]];
// console.log(outfitOne);

// const outfitTwo = [thomsCloset[0][1], thomsCloset[1][0], kristynsCloset[2]];
// console.log(outfitTwo);

// const outfitThree = [thomsCloset[2][0], kristynsCloset[4], kristynsCloset[5]];
// console.log(outfitThree);

// // Dirty Laundry
// for(let i = 0; i < kristynsCloset.length; i++){
//     console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
// }
// // Inventory
// let thomsShirts = thomsCloset[0];
// let thomsPants = thomsCloset[1];
// let thomsAccesories = thomsCloset[2];

// for(let i = 0; i < 1; i++){
//     console.log(thomsShirts);
//     console.log(thomsPants);
//     console.log(thomsAccesories);
// }

// Multiples of 3 and 5

let sum = 0;
for(let i = 0; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
        sum += i;
    }
}
console.log(sum);






























