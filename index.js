// Write your solution here!

const cats =["Milo", "Otis", "Garfield"];

   function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  };

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return cats;
    //return cats
 }
//destructivelyAppendCat("Ralph");
//console.log(destructivelyAppendCat("Ralph"))

function destructivelyPrependCat(Bob) {
     cats.unshift(Bob);
     return cats
     //return `${cats}`;
 }
//destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat() {
     cats.pop();
     return cats;
 }
//destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
     cats.shift();
     return `${cats}`;
 }
//destructivelyRemoveFirstCat();

function appendCat(Broom) {
     const Broom1= [...cats, Broom];
     return Broom1;
 }
 //appendCat("Broom");

 function prependCat(Arnold) {
     const Arnold_2=[Arnold, ...cats];
     return Arnold_2;
 }
  //prependCat("Arnold");

 function removeLastCat() {
     const catbs=cats.slice(0, cats.length -1 );
     return catbs;
}
//removeLastCat();

 function removeFirstCat() {
    const catb= cats.slice(1);
    return catb;
}
//removeFirstCat();
