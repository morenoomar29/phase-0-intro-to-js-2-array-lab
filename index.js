// Write your solution here!

const cats =["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return cats
 }

 function destructivelyPrependCat(Bob) {
     cats.unshift(Bob);
     return cats;
 }

 function destructivelyRemoveLastCat() {
     cats.pop();
     return cats;
 }

 function destructivelyRemoveFirstCat() {
     cats.shift();
     return cats;
 }

 function appendCat(Broom) {
     const Broom_1= [...cats, Broom];
     return Broom_1;
 }

 function prependCat(Arnold) {
     const Arnold_2=[Arnold, ...cats];
     return Arnold_2;
 }
 
 function removeLastCat() {
     const catbs=cats.slice(0, cats.length -1 );
     return catbs;
}

 function removeFirstCat() {
    const catb= cats.slice(1);
    return catb;
}

