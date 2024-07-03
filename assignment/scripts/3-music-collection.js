console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = []
let warAlbum =[]
let greyAlbum = []
let spiritAlbum =[]
let languageAlbum =[]
let heavenerAlbum =[]
let divsionAlbum =[]
function addToCollection(collection, title, artist, yearPublished, tracks) {
  collection.push ({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  })
  return collection[collection.length-1]
}
function createAlbum(album,name, duration){
  album.push ({
    name : name,
    duration : duration
  })
}
createAlbum(warAlbum,`Natural Disastor`, `6:06`)
createAlbum(warAlbum,`Echoes`, `5:46`)
createAlbum(warAlbum,`The Grey`, `6:07`)
createAlbum(warAlbum,`Legion`, `6:00`)
createAlbum(warAlbum,`Tender`, `4:37`)
createAlbum(warAlbum,`War of Being`, `11:02`)
createAlbum(warAlbum,`Sirens`, `4:57`)
createAlbum(warAlbum,`Burden`, `6:34`)
createAlbum(warAlbum,`Sacrifice`, `9:34`)

createAlbum(greyAlbum,`Dark`, `5:04`)
createAlbum(greyAlbum,`Cloud Cascade`, `4:09`)
createAlbum(greyAlbum,`Reflection Room`, `3:50`)
createAlbum(greyAlbum,`Hollow Lght`, `3:58`)
createAlbum(greyAlbum,`Shapeshifter`, `3:45`)
createAlbum(greyAlbum,`Heaven, Alone`, `1:34`)
createAlbum(greyAlbum,`Monarch`, `3:41`)
createAlbum(greyAlbum,`Fireside`, `4:25`)
createAlbum(greyAlbum,`Secret Sun`, `3:22`)
createAlbum(greyAlbum,`Eden`, `4:07`)
createAlbum(greyAlbum,`Brightwing`, `3:15`)
createAlbum(greyAlbum,`Halcyon`, `3:39`)
createAlbum(greyAlbum,`Nova`, `4:19`)

createAlbum(spiritAlbum,`Sun Killer`, `3:47`)
createAlbum(spiritAlbum,`Hurt You`, `3:46`)
createAlbum(spiritAlbum,`Yellowjacket`, `3:18`)
createAlbum(spiritAlbum,`The Summit`, `3:57`)
createAlbum(spiritAlbum,`Secret Garden`, `3:39`)
createAlbum(spiritAlbum,`Silk in the Strings`, `2:57`)
createAlbum(spiritAlbum,`Holy Roller`, `2:53`)
createAlbum(spiritAlbum,`Eternal Blue`, `3:59`)
createAlbum(spiritAlbum,`We Live in a Strange World`, `2:48`)
createAlbum(spiritAlbum,`Halcyon`, `3:40`)
createAlbum(spiritAlbum,`Circle With Me`, `3:53`)
createAlbum(spiritAlbum,`Constance`, `4:30`)

createAlbum(languageAlbum,`The Source`,`2:39`)
createAlbum(languageAlbum,`Language I: Intuition`, `5:24`)
createAlbum(languageAlbum,`Language II: Conspire`, `4:15`)
createAlbum(languageAlbum,`Integration`, `5:46`)
createAlbum(languageAlbum,`Thrive`, `6:04`)
createAlbum(languageAlbum,`Primordial Sound`, `6:28`)
createAlbum(languageAlbum,`Arise`, `3:58`)
createAlbum(languageAlbum,`Ebb & Flow`, `7:06`)
createAlbum(languageAlbum,`The Parable`, `7:05`)

createAlbum(heavenerAlbum,`Absence Persistent`, `3:49`)
createAlbum(heavenerAlbum,`Shade Astray`, `4:35`)
createAlbum(heavenerAlbum,`Labyrinthine`, `3:43`)
createAlbum(heavenerAlbum,`Without a Whisper`, `4:17`)
createAlbum(heavenerAlbum,`False Meridian`, `5:00`)
createAlbum(heavenerAlbum,`Reverie`, `3:10`)
createAlbum(heavenerAlbum,`Immolation of Night`, `3:50`)
createAlbum(heavenerAlbum,`Purity Weeps`, `4:08`)
createAlbum(heavenerAlbum,`Void Surfacing`, `4:30`)
createAlbum(heavenerAlbum,`Emberglow`, `4:21`)
createAlbum(heavenerAlbum,`Elysium`, `4:48`)

createAlbum(divsionAlbum,`A Brief History of the Future`,`1:37`)
createAlbum(divsionAlbum,`Manifest`,`4:27`)
createAlbum(divsionAlbum,`Echo`,`3:36`)
createAlbum(divsionAlbum,`Where the Skies End`,`6:33`)
createAlbum(divsionAlbum,`Perfect Machine`,`5:23`)
createAlbum(divsionAlbum,`Telekinetic`,`5:12`)
createAlbum(divsionAlbum,`Stratosphere`,`4:17`)
createAlbum(divsionAlbum,`Faultline`,`3:36`)
createAlbum(divsionAlbum,`Solstice`,`5:41`)
createAlbum(divsionAlbum,`Trials`,`4:18`)
createAlbum(divsionAlbum,`Waking Up`,`3:49`)
createAlbum(divsionAlbum,`Other Worlds Than These`,`4:18`)
createAlbum(divsionAlbum,`Diving Bell`,`5:38`)



console.log(`test for warAlbum`, warAlbum);
console.log(`test for addToCollection1:`, addToCollection(myCollection, `War of Being`, `Tesseract`, 2023, warAlbum));
console.log(`test for addToCollection2:`, addToCollection(myCollection, `Greyview`, `Invent Animate`, 2021, greyAlbum));
console.log(`test for addToCollection3:`, addToCollection(myCollection, `Eternal Blue`, `Spiritbox`, 2021, spiritAlbum));
console.log(`test for addToCollection4:`, addToCollection(myCollection, `Language`, `The Contortionist`, 2014, languageAlbum));
console.log(`test for addToCollection5:`, addToCollection(myCollection, `Heavener`, `Invent Animate`, 2023, heavenerAlbum));
console.log(`test for addToCollection6:`, addToCollection(myCollection, `Divisions`, `Starset`, 2019, divsionAlbum));
console.log(`my current collection:`, myCollection);
console.log(`test for the first song:`, myCollection[0].tracks[0]);

function showCollection(collection){
  for(let album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:`);
    for(let i=0; i<album.tracks.length;i++){
      console.log(`${i+1}. ${album.tracks[i].name}: ${album.tracks[i].duration}`);
    }
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

// function search(collection, searchCriteria){
//   let holdingArray = []
//   if(searchCriteria ==undefined || searchCriteria ===`` || Object.keys(searchCriteria)==0){
//     return collection}
//   for (let i = 0; i < collection.length; i++) {
//     if(searchCriteria == collection[i].artist || searchCriteria==collection[i].yearPublished){
//       holdingArray.push(collection[i])
//     }
//   }
//   return holdingArray
// }

function testFunc(collection, searchCriteria){
  let holdingArray=[]
  if(Object.hasOwn(searchCriteria,`trackName`)===true){
    for(let element of collection){
      for(let i=0;i<element.tracks.length;i++){
        if(element.tracks[i].name === searchCriteria.trackName){
          holdingArray.push(element)
        }
      }
      }
     return holdingArray 
  }
}


function search(collection, searchCriteria){
  let holdingArray = []
  if(searchCriteria === undefined){
    return collection}
  if(Object.hasOwn(searchCriteria,`trackName`)===true){
    for(let element of collection){
      for(let i=0;i<element.tracks.length;i++){
        if(element.tracks[i].name === searchCriteria.trackName){
          holdingArray.push(element)
        }
      }
      }
  }
  if(holdingArray.length>0)
    return holdingArray
  if(searchCriteria.artist === undefined || searchCriteria.artist === `` || Object.keys(searchCriteria) === 0){
   return collection}
  if(searchCriteria.yearPublished === undefined || searchCriteria.yearPublished === `` || Object.keys(searchCriteria) === 0){
    return collection}
for(let piece of collection){
  if(piece.artist === searchCriteria.artist && piece.yearPublished === searchCriteria.yearPublished){
    holdingArray.push(piece)
    }
  }
  return holdingArray
}
console.log(`test for search function, should have tesseract: `, search(myCollection,{artist:`Tesseract`, yearPublished:2023}));
console.log(`test for empty parameters search function,`, search(myCollection,));
console.log(`test for empty object`, search(myCollection, {}));
console.log(`test for empty object parameter`, search(myCollection, {artist: `Starset` }));
console.log(`test for just an trackName`, search(myCollection,{trackName:`Trials`}));
console.log(`test for just an trackName`, search(myCollection,{trackName:`Trials`,artist:`Beyonce`}));
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
