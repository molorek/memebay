var imagesArray =   [   'Patrick_Circle',
                        'Alex_Circle'
                    ];

function displayImage(){
    var num = Math.floor(Math.random() * 2); // 0...6
    document.getElementById('mainCircleMemeID').src     = 'img/mainPage/'+ imagesArray[num] + '.png';
    document.getElementById('mainCircleMemeTopID').src  = 'img/mainPage/'+ imagesArray[num] + '_Top.png';
}
