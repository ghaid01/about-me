// 'use stripct'
// var gameScore;
// gameScore = 0;
// var name = prompt('What is your name ?');
// alert('Welcome ' + name + ' to my guessing game!!');
// var questions = [
//     ['Do you think I\'m 18?',
//         'Yes!! you are right!!',
//         'oops you were wrong'

//     ],
//     [
//         'Do you think I study software engineering?',
//         'Yupp that is rightt!!',
//         'nope not true'





//     ],
//     ['Do I like singing?',
//         'Yes!! you are right!!',
//         'oops you were wrong'

//     ],
//     ['Do I like puppies?',
//         'Yupp that is rightt!!',
//         'nope not true'

//     ],
//     ['Is my favorite color blue?',
//         'Yes!! you are right!!',
//         'oops you were wrong'

//     ],

// ]
// function getqus()
// var currentquestion = questions[0];


// var age = prompt(currentquestion[0]);
// age = age.toLocaleLowerCase();
// if (age == 'yes') {
//     alert('Yes!! you are right!!');
//     gameScore++
// } else if (age == 'y') {
//     alert('Yes!! you are right!!');
//     gameScore++
// } else if (age == 'no') {
//     alert('oops you were wrong');


// } else if (age == 'n') {
//     alert('oops you were wrong');
// }
// else {
//     alert('guess again!');
// }
// getqus();
// var currentquestion = questions[1];


// var major = prompt(currentquestion[0]);
// major = major.toLocaleLowerCase();
// console.log('major', major)
// if (major == 'yes') {
//     alert('Yupp that is rightt!!');
//     gameScore++

// }
// else if (major == 'y') {
//     alert('Yupp that is rightt!!');
//     gameScore++
// }
// else if (major == 'no') {
//     alert('nope not true');
// }
// else if (major == 'n') {
//     alert('nope not true');
// } else {
//     alert('guess again!');
// }
// var currentquestion = questions[2];

// var hobbies = prompt(currentquestion[0]);
// hobbies = hobbies.toLocaleLowerCase();
// if (hobbies == 'yes') {
//     alert('Yes!! you are right!!');
//     gameScore++
// } else if (hobbies == 'y') {
//     gameScore++
//     alert('Yes!! you are right!!');
// } else if (hobbies == 'no') {
//     alert('oops you were wrong');


// } else if (hobbies == 'n') {
//     alert('oops you were wrong');
// }
// else {
//     alert('guess again!');
// }
// var currentquestion = questions[3];


// var puppies = prompt(currentquestion[0]);
// puppies = puppies.toLocaleLowerCase();
// if (puppies == 'yes') {
//     alert('Yupp that is rightt!!');
//     gameScore++

// }
// else if (puppies == 'y') {

//     alert('Yupp that is rightt!!');
//     gameScore++
// }
// else if (puppies == 'no') {
//     alert('nope not true');
// }
// else if (puppies == 'n') {
//     alert('nope not true');
// } else {
//     alert('guess again!');
// }
// var currentquestion = questions[4];

// var color = prompt(currentquestion[0]);
// color = color.toLocaleLowerCase();
// if (color == 'yes') {
//     alert('Yes!! you are right!!');
//     gameScore++
// } else if (color == 'y') {
//     alert('Yes!! you are right!!');
//     gameScore++
// } else if (color == 'no') {
//     alert('oops you were wrong');


// } else if (color == 'n') {
//     alert('oops you were wrong');
// }
// else {
//     alert('guess again!');
// // }
function numbervalidation(inputString) {
    var inputnumber = parseInt(inputString);
    while (isNaN(inputnumber)) {
        inputString = prompt('please enter a number');
        inputnumber = parseInt(inputString)
    }
    return inputnumber;

}
var i;

for (i = 0; i < 3; i++) {
    var input = prompt('How many hours do i spend in college?');
    var hours = numbervalidation(input);

    if (hours < 9) {
        alert('too short');
    } else if (hours > 9) {
        alert('too long');
        
    } else if (hours == 9) {
        alert('That is right!!');
        break;
        
    }

    //     gameScore++
    //     break;
    //         else {
    //         alert('please enter a number');
    //     }



}
// hours = prompt('How many hours do i spend in college?');


// var songs =prompt('What are my favorite songs');
// var i;
// for (i = 0; i < 5; i++) {
// if (songs == 'all of me' || songs == 'falling' || songs == 'sweater weather'){
//     alert('yup!! good guess');
//     gameScore++
//     break;
// } else {
//     alert('that is wrong');


// }
// songs=prompt('What are my favorite songs?');
// }

// alert('GameScore= ' + gameScore);



