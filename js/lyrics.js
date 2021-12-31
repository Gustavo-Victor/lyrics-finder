//api.lyrics.ovh/v1/u2/one

function findLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`, {
       method: 'GET',
       headers: {'Content-Type': 'application/json'} 
    });
}

const mainForm = window.document.querySelector(".mainForm");
const author = window.document.querySelector("#author");
const song = window.document.querySelector("#song"); 
const button = window.document.querySelector('#submit');
const lyricsDiv = window.document.querySelector("#lyrics");  

mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
}); 


button.addEventListener('click', () => {
    doSubmit();
})

async function doSubmit(){
    lyricsDiv.innerText = '';

    /*then
    findLyrics(author.value, song.value)
    .then(response => response.json())
    .then(data => {
        if(data.lyrics){ 
            lyricsDiv.innerText += data.lyrics; 
        }else{
            lyricsDiv.innerText = data.error;
        }
    })
    .catch(err => {
        console.log(err);
        lyricsDiv.innerText = err;
    });
    */ 

    /*async await*/
    try{
        const response = await findLyrics(author.value, song.value);
        const lyrics_object = await response.json();
        
        if(lyrics_object.lyrics){
            lyricsDiv.innerText = lyrics_object.lyrics;
        }else{
            lyricsDiv.innerText = lyrics_object.error;
        }
        
        author.value = ''
        song.value = ''
    }catch(err){
        console.log(err);
    }
    
}; 
