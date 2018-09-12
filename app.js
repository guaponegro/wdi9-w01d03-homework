console.log("JS is active");

// Easy Going
for(i = 1; i <= 20; i++){
    console.log(i);
}

// Get Even
for(i = 0; i <= 200; i+=2){
    console.log(i);
}

// Excited Kitten
letCatTalk = "Love me, pet me! HSSSSSS!"
letCatTalk2 = "...human...why you taking pictures of me?...";
letCatTalk3 = "...the catnip made me do it...";
letCatTalk4 = "...why does the red dot always get away...";
for(let i = 1; i <= 20; i++){
    console.log(letCatTalk);
    if(i % 2 === 0){
        let testNumber = Math.random();
        if(testNumber < 0.33){
            console.log(letCatTalk2);
        } 
        if(testNumber > 0.33 && testNumber <= 0.66){
            console.log(letCatTalk3);
        }
        if(testNumber > 0.66){
            console.log(letCatTalk4);
        }
    }
}

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



























