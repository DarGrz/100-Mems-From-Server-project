window.onload = function() {
    memeApp.loadData();
}

let memeApp = {
    memeData: null,
    memeNumber: 0,
    memeTitleDomEl: null,
    memeImgDomEl: null,

   loadData: function() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => memeApp.dataReady(data))
   },
   dataReady: function(data) {
    console.log(data);
    memeApp.memeData = data.data.memes;
    memeApp.memeNumber 
    memeApp.memeTitleDomEl = document.querySelector('.meme-name')[0];
    memeApp.memeImgDomEl = document.querySelector('.meme-img');

    document.addEventListener('keydown', function(e) {
        switch(e.keyCode) {
            case 37:
                console.log("left");
                memeApp.previousMeme;
                break;
            case 38:
                console.log('up');
                break;
            case 39:
                console.log('right');
                memeApp.nextMeme;
                break;
            case 40:
                console.log('down');
                break;

        }
    })

    this.nextMeme();
   },
   nextMeme: function() {
    this.memeNumber++;
    this.setDOMData();
    if(this.memeNumber >= this.memeData.lenght) this.memeNumber = 0;
   },
   previousMeme: function() {
    this.memeNumber--;
    this.setDOMData();
    if(this.memeNumber < 0 )this.memeNumber = this.memeData.lenght -1;
   },
   setDOMData: function() {
    let imgData = this.memeData[this.memeNumber];
    this.memeImgDomEl.src = imgData.url;
    this.memeImgDomEl.innerHTML = imgData.name;


    document.title = "Meme #" + this.memeNumber;
   }

};