console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = []
function addToCollection(collection, title, artist, yearPublished) {
  collection.push ({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  })
  return collection[collection.length-1]
}
console.log(`test for addToCollection1:`, addToCollection(myCollection, `War of Being`, `Tesseract`, 2023));
console.log(`test for addToCollection2:`, addToCollection(myCollection, `Greyview`, `Invent Animate`, 2021));
console.log(`test for addToCollection3:`, addToCollection(myCollection, `Eternal Blue`, `Spiritbox`, 2021));
console.log(`test for addToCollection4:`, addToCollection(myCollection, `Language`, `The Contortionist`, 2014));
console.log(`test for addToCollection5:`, addToCollection(myCollection, `Heavener`, `Invent Animate`, 2023));
console.log(`test for addToCollection6:`, addToCollection(myCollection, `Divisions`, `Starset`, 2019));
console.log(`my current collection:`, myCollection);


function showCollection(collection){
  for(let album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
  return `Some Bangers :)`
}
showCollection(myCollection)

function findByArtist(collection,artist){
  let holdingArray =[]
  console.log(`checking for ${artist} in your collection!`);
  for (let i = 0; i < collection.length; i++) {
    if(artist == collection[i].artist){
      holdingArray.push(collection[i])
    }
  }
  return holdingArray
}
console.log(findByArtist(myCollection, `Invent Animate`));
console.log(findByArtist(myCollection, `Steely Dan`));

// function search(collection, searchCritera){
//   let holdingArray = []
//   if(searchCritera ==undefined || searchCritera ===`` || Object.keys(searchCritera)==0){
//     return collection}
//   for (let i = 0; i < collection.length; i++) {
//     if(searchCritera == collection[i].artist || searchCritera==collection[i].yearPublished){
//       holdingArray.push(collection[i])
//     }
//   }
//   return holdingArray
// }

function search(collection,artistCriteria,yearCriteria){
  let holdingArray = []
  if(artistCriteria ===undefined || artistCriteria ===`` || Object.keys(artistCriteria)===0){
   return collection}
  if(yearCriteria ===undefined || yearCriteria ===`` || Object.keys(yearCriteria)===0){
    return collection}
for(let piece of collection){
  if(piece.artist == artistCriteria && piece.yearPublished == yearCriteria){
    holdingArray.push(piece)
    }
  }
  return holdingArray
}
console.log(`test for search function, should have tesseract: `, search(myCollection,{artist:`Tesseract`, yearPublished:2023}));
console.log(`test for empty array search function,`, search(myCollection,));
console.log(`test for empty object`, search(myCollection, {}));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
