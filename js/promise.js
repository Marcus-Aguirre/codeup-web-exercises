"use strict";

// const myPromise = new Promise((resolve, reject) => {
//
//     let number = Math.random();
//
//     console.log(`Our number is ${number}`);
//
//     if (number > 0.5) {
//
//         resolve();
//
//     } else {
//
//         reject();
//
//     }
//
// })


// function wait (delay) {
//
//    return new Promise((resolve) => {
//
//     setTimeout(function(){
//
//         resolve();
//
//     }, delay)
//
//     });
//
// }
//
// wait(2000).then(() => console.log(`You'll see this message after 2 seconds.`));
// wait(6000).then(() => console.log(`You'll see this message after 6 seconds.`));
//



function gitHubUserInfo (userName){

   fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {"Authorization": `token ${gitHubKey}`}})
       .then(data => console.log(data.json()))
       .catch(() => console.log("Failed"));



}

gitHubUserInfo("Marcus-Aguirre");



