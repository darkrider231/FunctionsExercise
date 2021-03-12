// FUNCTION EXERCISE

// 1
function fozzieZBear(){
    console.log("Wocka Wocka!");
}
fozzieZBear();

console.log(" ");

// 2
function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
}
beaker("Meep");

console.log(" ");

// 3
function werewolf(a, b){
    if(a = "Muppet")
        if(b = "Show"){
            console.log("It's time to play the music. It's time to light the lights.");
        }
}
werewolf();

console.log(" ");

// 4
function kermit(){
    return "Kermit The Frog";
}
const froggy = kermit();
console.log(froggy);

console.log(" ");

// 5
function muppetShowSeasons(seasons){
    if(seasons = 5){
        return true;
    }
    else {
        return false;
    }
}

console.log(" ");

// 6a
const muppets = [
    "Kermit The Frog",
    "Miss Piggy",
    "Fozzie Bear",
    "The Great Gonzo"
];

// 6b
function showMuppets(names) {
    console.log(names);
}
muppets.forEach(showMuppets);

console.log(" ");

// 7
const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
}
manOrMuppet();

console.log(" ");

// 8
rainbowConnection = () => ("Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me")
const rainbow = rainbowConnection();
console.log(rainbow);

// 9
// No

// 10
// Yes

// 11a
const newMuppetMovies = [
    {movie: "The Muppets"},
    {movie: "Muppets Most Wanted"}
];

// 11b
muppetMovies = movies => movies.movie.toUpperCase();
const upperMovies = newMuppetMovies.map(muppetMovies);
console.log(upperMovies);

// 12a
const oldMuppetMovies = [`The Muppet Movie`, `The Muppets Take Manhattan`,`The Great Muppet Caper`,`The Muppet Christmas Carol`, `Muppet Treasure Island`, `Muppets From Space`];

// 12b
const twoMuppetMovies = function(name){
    return name.length > 3;
}
const twoMovies = oldMuppetMovies.filter(twoMuppetMovies);
console.log(twoMovies);

// BONUS
// 13a
const charactersOne = [
    'Statler',
    'Waldorf'
];

// 13b
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];

// 13c
function randomMuppet(characters){

    Math.random(charactersOne);
    Math.random(charactersTwo);
    characters = Math.random = charactersOne.concat(charactersTwo);
    console.log(characters);
}
randomMuppet();

// 14
const newString = ['i want to change every other letter captialized'];
function caps(string){
    string = newString[0].toUpperCase();
    console.log(string);
    return string.toUpperCase();
}
caps(newString);