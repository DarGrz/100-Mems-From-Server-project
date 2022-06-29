window.onload = function() {
    memeApp.loadData()
}

let memeApp = {
    memeData: null,
    memeNumber: 0,
    memeTitleDomEl: null,
    memeImgDomEl: null,

    loadData: function() {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => memeApp.dataReady(data));
    },
    dataReady: function(data) {
        console.log(data)
    }
}