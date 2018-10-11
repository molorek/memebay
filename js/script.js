function displayImage(){
    var num = Math.floor(Math.random() * 1);
    var source_image = "";
    var source_title = "";

    switch(num){

        case 0:
            source_image = "Patrick_Circle";
            source_title = "SAVAGE PATRICK";
        break;
        
        case 1:
            source_image = "Alex_Circle";
            source_title = "Alex Da Lion";
        break;

    }

/*     document.getElementById('mainCircleMemeID').src     = 'img/mainPage/'+ source_image + '.png';
    document.getElementById('mainCircleMemeTopID').src  = 'img/mainPage/'+ source_image + '_Top.png'; */

    document.getElementById('mainCircleMemeID').style.background    = 'url(img/mainPage/'+ source_image + '.png)' + " no-repeat right top";
    document.getElementById('mainCircleMemeTopID').style.background = 'url(img/mainPage/'+ source_image + '_Top.png)' + "no-repeat right top";

    document.getElementById('mainCircleMemeID').title   = source_title;
    document.getElementById('mainCircleMemeTopID').title= source_title;
	
	document.getElementById('mainCircleMemeID').alt     = source_title;
    document.getElementById('mainCircleMemeTopID').alt	= source_title;
}
