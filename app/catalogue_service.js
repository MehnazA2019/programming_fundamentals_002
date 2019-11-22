// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;  
}

function checkBook(book) {
//I need to look at each book in the catalogue
    //for (let i=0; i<catalogue.length; i++){
      // let bookToCheck =cataogue[i]; console.log(book);
    
    
    //}
//whilst checking each book, need to see if the book and author 
//match the one that is passed into the function
 // if it does I can return true (without checking the rest)
 //otherwise i need to cont. checking 

 // if (bookToCheck ===book) {
 // return true;  
 // } }
 // else {return false;}

  var i;
for (i = 0; i < catalogue.length; i++) {
  if (catalogue[i] === book) {return true}; 
  //else {return false;
}

return false;}

//{
//catalogue.forEach(book => return book);

//{if (book) {return true;} else {return false;};
//}
// if (book) for catalogue.for each
//

function countBooksByFirstLetter(letter) {
  // Your code here:
//  var i;
//  for(i=0, i<catalogue.length; i++) {
  //   if (catalogue[i] === catalogue.startsWith(letter,0) 
  //   {return var x= catalogue.startsWith(letter,0); 
  //   x.toString();})
  // }
  // // return 0;}

  
  // const newArray = catalogue.filter((letter) => {
  //   return catalogue.startsWith === letter;})
  
  let original =[catalogue];
  let countBooksByFirstLetter = original.filter(
    function(original)
    {return original.startsWith === letter;});
    console.log(countBooksByFirstLetter);


//   const newArray = catalogue.filter(function(letter) => {
//       return catalogue.startsWith === letter;})
// console.log(newArray);


  //catalogue.startsWith(letter, 0);

//}

function countBooksByKeyword(keyword) {
  // Your code here
}

function getBooksByAuthor(author) {
  // Your code here
}

  


module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};