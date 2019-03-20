"use strict";

/////////////////// MAP ////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map(n => n + numbers.indexOf(n));

console.log(newNumbers);





/////////////////// FILTER ////

const bits = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1];

// const allOnes = bits.filter(n => n == true);
const allOnes = bits.filter(n => n === 1);

// const allZeroes = bits.filter(n => n == false);
const allZeroes = bits.filter(n => n === 0);

console.log(allOnes);

console.log(allZeroes);





const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// ////// 3 languages or more ////
const trilingualUsers = users.filter(n => n.languages.length >= 3);

console.log(trilingualUsers);



/////// return an array of strings made up of emails ////
const emailList = users.map(n => n.email);

console.log(emailList);



// ////// reduce to total years of experience ////
const averageExp = users.reduce((total, user) => {

    total += user.yearsOfExperience;

    return total;

}, 0);

const average = averageExp / users.length;

console.log(`The average experience is: ${average} years.`);




// ////// reduce to longest email  //////
const longestEmail = users.reduce((longest, currentEmail) => {

    if(currentEmail.email.length > longest.length){

        longest = currentEmail.email;

    }

    return longest;

    }, "");

console.log(`The longest email is: ${longestEmail}`);





// ////// reduce to all instructors first name  //////
const firstNames = users.reduce((allNames, currentName) => {

    allNames += currentName.name + " ";

    return allNames;

},"The instructors are: ");

console.log(firstNames);




//////// return a unique list of languages //////

const uniqueLanguages = users.reduce(function(person, currentLang){

    person += currentLang.languages + ",";

    let languages = person.split(',');

    for (let i = 0; i < languages.length; i++){

        for(let x = 1; x < languages.length; x++){

            if(languages[i] === languages [x]){

                languages.splice(x,1);

            }
        }
    }

    return languages;

}, []);

console.log(uniqueLanguages);





const listOfLanguages = (list, user) => {
    list.push(user.languages);
    return list;
};

let languages = users.reduce(listOfLanguages, []);

languages = languages.flat();

languages = new Set(languages);

languages = Array.from(languages);

console.log(languages);



