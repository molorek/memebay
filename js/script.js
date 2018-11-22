function memeOnClick(ID){
    var bbPop   = 'blackBackPopular';
    var popNT   = 'popularNameText';
    var popT    = 'popularText';
    var mcmpb   = 'mcmpb';
    var mcmtpb  = 'mcmtpb';

    document.getElementById(bbPop).setAttribute("class", "blackBackPopularOpen");
    document.getElementById(bbPop).setAttribute("style", "display: block;");

    document.getElementById('bcpb').setAttribute("class", "bodyCirclePopularBig");
    document.getElementById(mcmtpb).setAttribute("class", "mainCircleMemeTopPBig");
    document.getElementById(mcmpb).setAttribute("class", "mainCircleMemePBig");

    document.getElementById(popNT).setAttribute("class", "popularNameTextOpen");
    document.getElementById(popNT).setAttribute("style", "display: block;");

    document.getElementById(popT).setAttribute("class", "popularTextOpen");
    document.getElementById(popT).setAttribute("style", "display: block;");

    setMemeText(ID);
    setMemeInCircle(ID, mcmpb, mcmtpb);
}

function backOnClick(){
    document.getElementById('blackBackPopular').setAttribute("class", "blackBackPopularClose");

    document.getElementById('bcpb').setAttribute("class", "bodyCirclePopularBigClose");
    document.getElementById('mcmtpb').setAttribute("class", "mainCircleMemeTopPBigClose");
    document.getElementById('mcmpb').setAttribute("class", "mainCircleMemePBigClose");  

    document.getElementById('popularNameText').setAttribute("class", "popularNameTextClose");
    document.getElementById('popularText').setAttribute("class", "popularTextClose");
}

function setMemeInCircle(ID, setID, setTopID){
    var source_image    = "";
    var source_title    = "";
    switch(ID){

        case 0:
            source_image    = "Patrick_Circle";
            source_title    = "SAVAGE PATRICK";
        break;
        
        case 1:
            source_image = "Alex_Circle";
            source_title = "Alex the lion";
        break;

        case 2:
            source_image = "Skeleton_Circle";
            source_title = "SPOOKY SKELETON";
        break;
        
        case 3:
            source_image    = "Pinguin_Circle";
            source_title    = "Penguin-Pun";
        break;

        case 4:
            source_image    = "Pika_Circle";
            source_title    = "Surprised PIKACHU";
        break;

        case 5:
            source_image    = "REXON_Circle";
            source_title    = "ILLIA BIELIKOV";
        break;

        case 6:
            source_image    = "Ricardo_Circle";
            source_title    = "BE CAREFUL";
        break;

    }
    
    document.getElementById(setID).style.background         = 'url(img/memesInCircles/'+ source_image + '.png)' + " no-repeat right top";
    document.getElementById(setID).title                    = source_title;
    document.getElementById(setID).alt                      = source_title;
    
    document.getElementById(setTopID).style.background      = 'url(img/memesInCircles/'+ source_image + '_Top.png)' + "no-repeat right top";
    document.getElementById(setTopID).title                 = source_title;
    document.getElementById(setTopID).alt	                = source_title;

}

function setMemeText(ID){
    var name = "";
    var text = "";

    switch(ID){

        case 0:
            name    = "SAVAGE PATRICK";
            text    = "Savage Patrick (sometimes referred to as Evil Patrick or Angry Patrick) refers to a still"+
                      "image of Patrick Star from Spongebob Squarepants looking as though he's in the midst of a"+
                      "maniacally evil chuckle.";
        break;
        
        case 1:
            name    = "Alex the lion";
            text    = "I am a faggot - an abstract meme depicting Alex the lion from the cartoon 'Madagascar', which"+
                      " placed his front paws, and the words 'I am a faggot.'";
        break;

        case 2:
            name    = "SPOOKY SKELETON";
            text    = "Spooky Skeleton refers to a series of image macros and reaction images featuring a picture "+
                      "of a cartoon skeleton grabbing its skull, tearing the skull from its neck and throwing it. "+
                      "Online, the image reflects frustration towards other people's posts on message boards and social media.";
        break;
        
        case 3:
            name    = "Penguin-Pun";
            text    = "Penguin-Pun - is a meme with a 3d model of a penguin in glasses, who holds a phone in his hand and speaks puns"+
                      " (for example, “Hello, is it a circumflexa? Flex!”). Continuation of a series of memes with a penguin with glasses.";
        break;

        case 4:
            name    = "Surprised PIKACHU";
            text    = "Surprised Pikachu refers to a screenshot from the Pokémon anime of the character Pikachu"+
                      " with its mouth agape, as though it were surprised at something. In the autumn of 2018, the"+
                      " image was used as a reaction image paired with captions where a set-up leads to a predictable"+
                      " outcome that nevertheless leaves one surprised.";
        break;
    }    

    document.getElementById('popularNameText').textContent    = name;
    document.getElementById('popularText').textContent        = text;
}