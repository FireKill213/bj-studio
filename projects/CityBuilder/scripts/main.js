//background music
function togglemusic(){
    if(criteria[5] == 0){
        amplification[0] = 0;
        criteria[5] = 1;
        document.getElementById('togglemusic').style.backgroundImage = 'url("misc/ui/buttons/mute.png")'
        var audio = document.getElementById("backgroundaudio");
        audio.volume = amplification[0];
    }else{
        amplification[0] = 0.3;
        criteria[5] = 0;
        document.getElementById('togglemusic').style.backgroundImage = 'url("misc/ui/buttons/volume.png")'
        var audio = document.getElementById("backgroundaudio");
        audio.volume = amplification[0];
    }
}
var amplification = new Array;
amplification[0] = 0.3;
var audio = document.getElementById("backgroundaudio");
    audio.volume = amplification[0];
//toggle startbutton
function showstart(){
    cityname[1] = document.getElementById('inputname').value;
    var wordlength = cityname[1].length;
    if(wordlength == 0){
    document.getElementById('play').style.visibility = 'hidden';
    }else{
        document.getElementById('play').style.visibility = 'visible';
    }
}
//Table Construction-------------------------------------------
var isOK;
    function fill(){
        var grid = "";
        for (let rows = 1; rows <= 8; rows++) {
            grid = grid + `<tr>`;
            for (let columns = 0; columns <= 9; columns++) {
                if(rows == 1 && columns == 0){
                    grid = grid + `<td class = "foresttop" id="Border"></td>`;
                }
                isOK = false;
                for (let i1 = 1; i1 < 8; i1++){if(rows == 1 && columns == i1){isOK = true}}if(isOK){
                    grid = grid + `<td class = forest id="Border"></td>`;  
                }                            
                if(rows == 1 && columns == 8){
                    grid = grid + `<td class = "corner2" id="Border"></td>`;
                }
                if(rows == 1 && columns == 9){
                    grid = grid + `<td class = "coasttop" id="Border"></td>`;
                }
                isOK = false;
                for (let i1 = 2; i1 < 8; i1++){if(rows == i1 && columns == 0){isOK = true}}if(isOK){
                    grid = grid + `<td class = "mountain" id="field-${rows}${columns}"></td>`;
                }
                isOK = false;
                for (let i1 = 2; i1 < 8; i1++) {
                    for (let i2 = 1; i2 < 9; i2++) {
                        if(rows == i1 && columns == i2){
                            isOK = true;
                        }
                    }
                }
                if(isOK){
                    grid = grid + `<td class="field" id = "field-${rows}${columns}" style="background-image: url(misc/fields/roads.png); "> <button class = "fieldbtn" id = "${rows}${columns}"onclick="action(this.id)"></button> </td>`;
                }
                isOK = false;
                for (let i1 = 2; i1 < 8; i1++){if(rows == i1 && columns == 9){isOK = true}}if(isOK){
                    grid = grid + `<td class = "coast" id="field-${rows}${columns}" ></td>`;
                }
                if(rows == 8 && columns == 0){
                    grid = grid + `<td class = "forestbottom" id="Border"></td>`;
                }
                isOK = false;
                for (let i1 = 1; i1 < 8; i1++){if(rows == 8 && columns == i1){isOK = true}}if(isOK){
                    grid = grid + `<td class = "connection" id="Border"></td>`;
                }
                if(rows == 8 && columns == 8){
                    grid = grid + `<td class = "corner3" id="Border"></td>`;
                }
                if(rows == 8 && columns == 9){
                    grid = grid + `<td class = "coastbottom" id="Border"></td>`;
                }                  
            }    
            grid += `</tr>`;
        }
        document.getElementById("table").innerHTML = grid;
    }
    fill();
//End of Table Construction------------------------------------
//When starting the game----------------------------------
function startsettings(){
    document.getElementById('startscreen').style.display='none';
    document.getElementById('background').style.display='block';
    var audio = document.getElementById("click");
                audio.play();
    cityname[0] = document.getElementById('inputname').value;
    document.getElementById("cityinfo").innerHTML = cityname[0]+  ' has '  +' ' +0 +' residents.';
    chosebombs();
}
function chosebombs(){//Random numbers                   
    do{
        var everythingfine = true;
        for(var i = 0; i < 4; i++){
            chosennumbers[i] = randomgenerator(21, 77);
        }                
        for(var i = 0; i < 3; i++){          
            for(var j = i + 1; j < 4; j++){
                for(var k = 30; k <= 70; k = k+10){
                    for(var l = 28; l <= 68; l = l+10){
                        for(var m = 29; m <= 69; m = m+10){
                            if(chosennumbers[i] == chosennumbers[j] || chosennumbers[i] == k || chosennumbers[j] == k || chosennumbers[i] == l || chosennumbers[j] == l || chosennumbers[i] == m || chosennumbers[j] == m){
                                everythingfine = false;                            
                            }
                        }                                
                    }
                }
            }
        }
    }while(everythingfine == false);
}
//When pressing on a field--------------------------------
document.getElementById('bulldoze').addEventListener('click', bulldoze);
document.getElementById('building1').addEventListener('click', building1);
document.getElementById('building2').addEventListener('click', building2);
document.getElementById('building3').addEventListener('click', building3);
document.getElementById('powerplant').addEventListener('click', power);
document.getElementById('park').addEventListener('click', park);              
function bulldoze(){
    background[0] = 'url("misc/fields/roads.png")';
    playaudio[0] = document.getElementById('destroy');
    document.getElementById("activated").style.display = 'block';
    document.getElementById("activated").style.marginLeft = '495px';
}
function building1(){
    background[0] = 'url("misc/fields/1residential.png")';
    dosth();
    document.getElementById("activated").style.marginLeft = '555px';
}
function building2(){
    background[0] = 'url("misc/fields/commercial.png")';
    dosth();
    document.getElementById("activated").style.marginLeft = '615px';
}
function building3(){
    background[0] = 'url("misc/fields/industry.png")';
    dosth();
    document.getElementById("activated").style.marginLeft = '675px';
}
function power(){
    background[0] = 'url("misc/fields/powerplant.png")';
    dosth();
    document.getElementById("activated").style.marginLeft = '735px';
}
function park(){
    background[0] = 'url("misc/fields/park.png")';
    dosth();
    document.getElementById("activated").style.marginLeft = '795px';
}
function dosth(){
    playaudio[0] = document.getElementById('place');
    document.getElementById("activated").style.display = 'block';
}
//whats happening when placing a building
function action(id){
    criteria[3] = 0;
    var image = document.getElementById("field-"+id);
    var compStyles = window.getComputedStyle(image).backgroundImage;
    if(background[0].substr(-10) == compStyles.substr(-10)){
            if(background[0].substr(-10) == 'oads.png")'){
                document.getElementById('error').innerHTML = "Here is nothing you can demolish!";
                document.getElementById('error').style.display = 'block';
                setTimeout(function(){document.getElementById('error').style.display = 'none';},2500);
                deactivate();
            }else{
                document.getElementById('error').innerHTML = "You've already placed this type of building here!";
                document.getElementById('error').style.display = 'block';}
                setTimeout(function(){document.getElementById('error').style.display = 'none';},2500);
                deactivate();
                return;
    }else{
        var image = document.getElementById("field-"+id);
        var audio = playaudio[0];
    }
    if(background[0].substr(-10) == 'tial.png")' && (id == 28 || id == 38 || id == 48 || id == 58 || id == 68 || id == 78)){
        if(id != blocked[id]){
            if(background[0].substr(-10) == 'tial.png")' && residential['cost']*2 <= budget[0] && residential['power'] <= electricity[0]){
                budget[0] -= residential['cost']*2;
                image.style.backgroundImage = 'url("misc/fields/2residential.png")';
                audio.play();
            }else{
                document.getElementById('error').innerHTML = "You don't have enought Recources to build this building!";
                document.getElementById('error').style.display = 'block';
                setTimeout(function(){document.getElementById('error').style.display = 'none';},2500); 
            }
        }else{
            document.getElementById('error').innerHTML = "You can not place a residential building near a powerplant or industry building!";
            document.getElementById('error').style.display = 'block';
            setTimeout(function(){document.getElementById('error').style.display = 'none';},2500);
            deactivate();
        }                      
    }else{
        if(background[0].substr(-10) == 'oads.png")'){
            if('lant.png")' == compStyles.substr(-10) || 'stry.png")' == compStyles.substr(-10)){
                image.style.backgroundImage = background[0];
                audio.play();
                releasefields(id); 
            }else{
                if('tial.png")' == compStyles.substr(-10)){
                    image.style.backgroundImage = background[0];
                    audio.play();
                    resireleasefields(id);
                }else{ 
                image.style.backgroundImage = background[0];
                audio.play();
                }  
            }                                                                                   
        }else{
            if(background[0].substr(-10) == 'tial.png")' && residential['cost'] <= budget[0] && residential['power'] <= electricity[0]){
                if(id != blocked[id]){
                    budget[0] -= residential['cost'];
                    image.style.backgroundImage = background[0];
                    audio.play();
                }else{
                    document.getElementById('error').innerHTML = "You can not place a residential building near a powerplant or industry building!";
                    document.getElementById('error').style.display = 'block';
                    setTimeout(function(){document.getElementById('error').style.display = 'none';},2500);
                    deactivate();
            }   
            }else{
                if(background[0].substr(-10) == 'cial.png")' && commercial['cost'] <= budget[0] && commercial['power'] <= electricity[0] && commercial['citizens'] <= workers[0]){
                budget[0] -= commercial['cost'];
                image.style.backgroundImage = background[0];
                audio.play();
                }else{
                    if(background[0].substr(-10) == 'stry.png")' && industry['cost'] <= budget[0] && industry['power'] <= electricity[0] && industry['citizens'] <= workers[0]){
                        if(id != resiblocked[id]){
                            budget[0] -= industry['cost'];
                            image.style.backgroundImage = background[0];
                            audio.play();
                        }else{
                            document.getElementById('error').innerHTML = "You can not place a industry building near a residential building!";
                            document.getElementById('error').style.display = 'block';
                            setTimeout(function(){document.getElementById('error').style.display = 'none';},2500);
                            deactivate();
                        }                                   
                    }else{
                        if(background[0].substr(-10) == 'lant.png")' && powerplant['cost'] <= budget[0]){
                            if(id != resiblocked[id]){
                                budget[0] -= powerplant['cost'];
                                image.style.backgroundImage = background[0];
                                audio.play();
                            }else{
                                document.getElementById('error').innerHTML = "You can not place a powerplant near a residential building!";
                                document.getElementById('error').style.display = 'block';
                                setTimeout(function(){document.getElementById('error').style.display = 'none';},2500);
                                deactivate();
                            }
                        }else{
                            if(background[0].substr(-10) == 'park.png")' && publicpark['cost'] <= budget[0] && publicpark['power'] <= electricity[0]){
                            budget[0] -= publicpark['cost'];
                            image.style.backgroundImage = background[0];
                            audio.play();
                            }else{
                                document.getElementById('error').innerHTML = "You don't have enought Recources to build this building!";
                                document.getElementById('error').style.display = 'block';
                                setTimeout(function(){document.getElementById('error').style.display = 'none';},2500);
                                deactivate();
                            }                                              
                        }
                    }
                } 
            }
        }
    }
    for(r = 0; r < 4; r++){                       
        if(id == chosennumbers[r] && background[0].substr(-10) != 'lant.png")' && criteria[3] == 0){
            setTimeout(function(){
                image.style.backgroundImage = 'url("misc/fields/Maus.gif")';
                document.getElementById('destroy').play();
                document.getElementById('error').innerHTML = "One of your buldings was destroyed by a bomb!";
                document.getElementById('error').style.display = 'block';
                countfields();
                setTimeout(function(){image.style.backgroundImage = 'url("misc/fields/roads.png")';},200);
                setTimeout(function(){document.getElementById('error').style.display = 'none';},2500);
            }, randomgenerator(3000, 12000)); //must be changed!------------------------------------------------------------------------
            chosennumbers[r] = 0;
        } 
    }
    deactivate(); 
    countfields();                                    
}
function deactivate(){
    document.getElementById("activated").style.display = 'none';
    criteria[3] = 1;
}
function blockfields(i){
    var nr = parseInt(i);
    var a = nr + 1; var b = nr - 1; var c = nr + 10; var d = nr - 10; var e = nr + 9; var f = nr - 9; var g = nr + 11; var h = nr - 11; 
    blocked[a] = a; blocked[b] = b; blocked[c] = c; blocked[d] = d; blocked[e] = e; blocked[f] = f; blocked[g] = g; blocked[h] = h;
}
function releasefields(id){
    var nr = parseInt(id);
    var a = nr + 1; var b = nr - 1; var c = nr + 10; var d = nr - 10; var e = nr + 9; var f = nr - 9; var g = nr + 11; var h = nr - 11;  
    blocked[a] = 0; blocked[b] = 0; blocked[c] = 0; blocked[d] = 0; blocked[e] = 0; blocked[f] = 0; blocked[g] = 0; blocked[h] = 0;
}
function resiblockfields(i){
    var nr = parseInt(i);
    var a = nr + 1; var b = nr - 1; var c = nr + 10; var d = nr - 10; var e = nr + 9; var f = nr - 9; var g = nr + 11; var h = nr - 11;  
    resiblocked[a] = a; resiblocked[b] = b; resiblocked[c] = c; resiblocked[d] = d; resiblocked[e] = e; resiblocked[f] = f; resiblocked[g] = g; resiblocked[h] = h;
}
function resireleasefields(id){
    var nr = parseInt(id);
    var a = nr + 1; var b = nr - 1; var c = nr + 10; var d = nr - 10; var e = nr + 9; var f = nr - 9; var g = nr + 11; var h = nr - 11;  
    resiblocked[a] = 0; resiblocked[b] = 0; resiblocked[c] = 0; resiblocked[d] = 0; resiblocked[e] = 0; resiblocked[f] = 0; resiblocked[g] = 0; resiblocked[h] = 0;
}
//Bank Control-------------------------------------------
//Counts the amount of buildings placed               
function countfields(){
    var roadcount = 0;
    var resicount = 0;
    var commcount = 0;
    var inducount = 0;
    var powecount = 0;
    var parkcount = 0;
    residential['income'] = 50;
    for(var i = 21; i < 79; i++){
            var state = document.getElementById('field-'+i);
            var compStyles = window.getComputedStyle(state).backgroundImage;
            if(compStyles.substr(-10) == 'oads.png")'){
                roadcount++;
            }else{
                if(compStyles.substr(-10) == 'tial.png")'){
                resicount++;
                resiblockfields(i);
                }else{
                    if(compStyles.substr(-10) == 'cial.png")'){
                    commcount++;
                    }else{
                        if(compStyles.substr(-10) == 'stry.png")'){
                        inducount++;
                        blockfields(i);
                        }else{
                            if(compStyles.substr(-10) == 'lant.png")'){
                            powecount++;
                            blockfields(i);
                            }else{
                                if(compStyles.substr(-10) == 'park.png")'){
                                parkcount++;     
                            }
                        }
                    }
                }   
            }
        }                                                    
    }
    roads[0] = roadcount;
    criteria[7] = commcount;
    happiness[0] = parkcount * publicpark['entertainment'] + commcount * commercial['entertainment'] + inducount * industry['entertainment'] + powecount * powerplant['entertainment'];
    workers[0] = commcount * -commercial['citizens'] + resicount * residential['citizens'] + inducount * -industry['citizens'] + powecount * powerplant['citizens'] + parkcount * publicpark['citizens'];
    if(workers[0] > 24){
        happiness[0] = happiness[0] - 0.2;
    }
    if(workers[0] < 0){
        document.getElementById('citizens').style.color = 'rgb(194, 41, 41)';
    }else{
        if(workers[0] > 0){
        document.getElementById('citizens').style.color = 'rgb(68, 134, 68)';
        }else{
            document.getElementById('citizens').style.color = 'black';
        }
    }
    happy();
    population[0] = resicount * residential['citizens'];
    document.getElementById("cityinfo").innerHTML = cityname[0] +' has'  +' ' +population[0] +' residents.';
    electricity[0] = commcount * -commercial['power'] + resicount * -residential['power'] + inducount * -industry['power'] + powecount * powerplant['power'] + parkcount * -publicpark['power'];
    if(electricity[0] < 0){
        document.getElementById('power').style.color = 'rgb(194, 41, 41)';
    }else{
        if(electricity[0] > 0){
        document.getElementById('power').style.color = 'rgb(68, 134, 68)';
        }else{
            document.getElementById('power').style.color = 'black';
        }
    }
    income[0] = commcount * commercial['income'] + resicount * residential['income'] + inducount * industry['income'] + powecount * 
    powerplant['income'] + parkcount * publicpark['income'];
    
    if(income[0] < 0){
        document.getElementById('income').style.color = 'rgb(194, 41, 41)';
    }else{
        if(income[0] > 0){
        document.getElementById('income').style.color = 'rgb(68, 134, 68)';
        }else{
            document.getElementById('income').style.color = 'black';
        }
    }
    if(budget[0] < 8000 && powecount == 0){
        document.getElementById('gameOver').innerHTML = '<div style="font-size:70px;color:rgb(194, 41, 41);">Game Over!</div><br>You didnt had enough money left to build a Powerplant!<br><br><br>You can go back to the start screen by pressing the button below and restart the game to try it again.';
        end();
    }
    document.getElementById('income').innerHTML = 'Income: ' +income[0]; 
    document.getElementById('budget').innerHTML = 'Budget: ' +budget[0];
    document.getElementById('citizens').innerHTML = workers[0];
    document.getElementById('power').innerHTML = electricity[0]; 
                        
}
//Happiness-----------------------------------------------
function happy(){  
        if(happiness[0] >= 0.4){
            document.getElementById('happy').style.backgroundImage = 'url("misc/ui/buttons/outstanding.png")';
            document.getElementById('happyinfo').innerHTML = 'Your happiness is outstanding.';
            residential['income'] = residential['income']+100;
        }else{
            if(happiness[0] >= 0.2){
               document.getElementById('happy').style.backgroundImage = 'url("misc/ui/buttons/happy.png")';
               document.getElementById('happyinfo').innerHTML = 'Your happiness is good.';
            }else{
                if(happiness[0] <= -0.2){
                   document.getElementById('happy').style.backgroundImage = 'url("misc/ui/buttons/sad.png")';
                   document.getElementById('happyinfo').innerHTML = 'Your happiness is bad.';
                }else{
                   document.getElementById('happy').style.backgroundImage = 'url("misc/ui/buttons/neutral.png")';
                   document.getElementById('happyinfo').innerHTML = 'Your happiness is sufficient.';
                }
            }
        }
}   
//End of Happiness----------------------------------------

//Everything for the ingame clock-------------------------
//changes the gamespeed and the look of the button
function speedbtn(){
    gamespeed[0] = gamespeed[0]  / 2;
    if(gamespeed[0]  < 500){
        gamespeed[0]  = 2000;
        document.getElementById('speed').value = "1x";
    }else{
        if(gamespeed[0]  == 1000){
        document.getElementById('speed').value = "2x";
        }else{
            if(gamespeed[0]  == 500){
            document.getElementById('speed').value = "4x";
            }
        }     
    }                                
}
var time = 0;
var daytime = " am";
var counter = 0;
var day = 1;
//creates the clock of the game
function clock(){
    time++;
    counter++;
    if(budget[0] <= 1000 && income[0] <= 0){
        document.getElementById('gameOver').innerHTML = '<div style="font-size:70px;color:rgb(194, 41, 41);">Game Over!</div><br>You run out of money!<br><br><br>You can go back to the start screen by pressing the button below and restart the game to try it again.';
        end();
    }else{
        if(roads[0] == 0 && income[0] > 0){
            document.getElementById('gameOver').innerHTML = '<div style="font-size:70px;color:rgb(141, 219, 77);">You Won!</div><br>You did it and finished the game by building a building on every single field. You also had a positive income.<br><br><br>You can go back to the start screen by pressing the button below and restart the game if you want.';
        end();
        }else{
            if(time > 12){
                time = 1;
            }
        }                       
    } 
    if(counter == 2 && day > 3 && criteria[8] == 0){ //trigger for random events
        criteria[4] = randomgenerator(0,20);
        if(criteria[4] == 2){
            flodropsbombs();
        }
        if(criteria[4] == 3 && criteria[7] >= 2){
            burgersale();
        }
        if(criteria[4] == 4 && budget[0] > 3000){
            taxevasion();
        }
        if(criteria[4] == 5 && budget[0] < 10000){
            lotterywin();
        }
        if(criteria[4] == 6){
            for(var bl = 28; bl <= 78; bl = bl+10){
                var image = document.getElementById("field-"+bl);
                criteria[bl] = window.getComputedStyle(image).backgroundImage;
            }
            if((criteria[28].substr(-10) != 'oads.png")') || (criteria[38].substr(-10) != 'oads.png")')|| (criteria[48].substr(-10) != 'oads.png")') || (criteria[58].substr(-10) != 'oads.png")') || (criteria[68].substr(-10) != 'oads.png")') || (criteria[78].substr(-10) != 'oads.png")')){//There are Buildings on the coast
                flood();                                                           
            }   
        }
    }                   
    while(counter > 11){
        daytime = " pm";
        // Here comes everything whats happen after one day
        if(counter >= 24){
            counter = 0;
            daytime = " am";
            //adds a delay to the Day counter
            setTimeout(function() {
                day++;
                var audio = document.getElementById("endofday");
                audio.play();
                budget[0] = budget[0] + income[0];
                document.getElementById('budget').innerHTML = 'Budget: ' +budget[0];
                //there are not enough workers
                if(workers[0] < 0 && criteria[0] < 1){
                    document.getElementById('error').innerHTML = '<div style="color:rgb(194, 41, 41);">You have not enough workers!</div>';
                    document.getElementById('error').style.display = 'block';
                    setTimeout(function(){document.getElementById('error').style.display = 'none';},3000);
                    criteria[0] ++;
                }else{
                    if(workers[0] < 0 && criteria[0] == 1){
                        document.getElementById('gameOver').innerHTML = '<div style="font-size:70px;color:rgb(194, 41, 41);">Game Over!</div><br>You didnt had enough workers!<br><br><br>You can go back to the start screen by pressing the button below and restart the game to try it again.';
                        end();
                    }else{
                        criteria[0] = 0;
                    }  
                }
                // there is not enough electricity
                if(electricity[0] < 0 && criteria[1] < 1){
                    document.getElementById('error').innerHTML = '<div style="color:rgb(194, 41, 41);">You have not enough electricity!</div>';
                    document.getElementById('error').style.display = 'block';
                    setTimeout(function(){document.getElementById('error').style.display = 'none';},3000);
                    criteria[1] ++;
                }else{
                    if(electricity[0] < 0 && criteria[1] == 1){
                        document.getElementById('gameOver').innerHTML = '<div style="font-size:70px;color:rgb(194, 41, 41);">Game Over!</div><br>You didnt had enough electricity!<br><br><br>You can go back to the start screen by pressing the button below and restart the game to try it again.';
                        end();
                    }else{
                        criteria[1] = 0;
                    }  
                }
                //the happiness is to low
                if(happiness[0] < -0.3 && criteria[2] < 1){
                    document.getElementById('error').innerHTML = '<div style="color:rgb(194, 41, 41);">Your happiness is not sufficient!</div>';
                    document.getElementById('error').style.display = 'block';
                    setTimeout(function(){document.getElementById('error').style.display = 'none';},3000);
                    criteria[2] ++;
                }else{
                    if(happiness[0] < -0.3 && criteria[2] == 1){
                        document.getElementById('gameOver').innerHTML = '<div style="font-size:70px;color:rgb(194, 41, 41);">Game Over!</div><br>Your citizens were sad!<br><br><br>You can go back to the start screen by pressing the button below and restart the game to try it again.';
                        end();
                    }else{
                        criteria[2] = 0;
                    }  
                }
                
            }, gamespeed[0]);                       
        }
            break;
    }
    clearTimeout;
    if(criteria[9] == 1){
        return;
    }
    setTimeout(clock, gamespeed[0]);
    document.getElementById('day').innerHTML = "Day: " +day;
    document.getElementById('clock').innerHTML = +time +daytime;
}
document.getElementById('speed').addEventListener('click', speedbtn);
document.getElementById('play').addEventListener('click', clock);
function end(){
    document.getElementById('gameOverWindow').style.display = 'block';
    document.getElementById('gamebar').style.display='none';
    gamespeed[0] = 9999;
    criteria[8] = 1;
}
//End of clock--------------------------------------------
//Random Events-------------------------------------------
//Bomb Drop
var f = 3600
function flodropsbombs(){
    if(criteria[6] == 0){ //Starts the Audio once
        criteria[6] = 1;
        var audio = document.getElementById("bombdrop");
        audio.play();  
    }
    var flo = document.getElementById("flodropsbombs");                  
    setTimeout(function(){
        f = f-2
        flo.style.left= f+'px';
        flo.style.top= f / 1.5 +'px';
        gamespeed[0] = 2000; //sets the gameespeed to slow while plane is dropping the bomb
        document.getElementById('speed').value = "1x";
        if(f > -300){
            flo.style.display = 'block'; 
            flodropsbombs();
        }else{ //After the plane has passed
            flo.style.display = 'none';
            criteria[6] = 0; 
            f = 3600;
            do{
                var everythingfine = true;
                chosennumbers[8] = randomgenerator(21, 77);              
                for(var k = 30; k <= 70; k = k+10){
                    for(var l = 28; l <= 68; l = l+10){
                        for(var m = 29; m <= 69; m = m+10){
                            if(chosennumbers[8] == k || chosennumbers[8] == l || chosennumbers[8] == m){
                                everythingfine = false;                            
                            }
                        }                                
                    }
                }
            }while(everythingfine == false);
            var image1 = document.getElementById("field-"+chosennumbers[8]);
            var compStyles = window.getComputedStyle(image1).backgroundImage;
            if(compStyles.substr(-10) != 'lant.png")' && compStyles.substr(-10) != 'oads.png")'){ //Removes building if available
            document.getElementById('field-'+chosennumbers[8]).style.backgroundImage="url('misc/fields/roads.png')";
            var audio = document.getElementById("destroy");
            audio.play();  
            countfields(); 
            document.getElementById('error').innerHTML = 'One of your buildings was destroyed by Flo the flying pioneer!';
            document.getElementById('error').style.display = 'block';
            setTimeout(function(){document.getElementById('error').style.display = 'none';},5000); 
            }
        }
    },20);                                     
}
//Burger Sale
function burgersale(){//gives you money for every commercial building
    criteria[9] = 1;
    document.getElementById('randomeventinfo').innerHTML = 'Big Sales led to a flood of costomers in your commercial buildings!<br><br>You immediately get 200 Units for each of your '+criteria[7]+ ` commercial buildings.<br><br><button class = 'greatbtn' onclick="closeevent()";>Great</button>`;
    document.getElementById('randomeventinfo').style.display = 'block';
    budget[0] += criteria[7] * 200;
    document.getElementById('budget').innerHTML = 'Budget: ' +budget[0];                   
}
function taxevasion(){// you lose a quarter of your budget
    criteria[9] = 1;
    document.getElementById('randomeventinfo').innerHTML = `You secretly evaded taxes but now it has come to light!<br><br>You lose 20% of your Budget.<br><br><button class = 'greatbtn' onclick="closeevent()";>Oh Noo</button>`;
    document.getElementById('randomeventinfo').style.display = 'block';
    budget[0] = Math.round((budget[0] / 1.25));                   
    document.getElementById('budget').innerHTML = 'Budget: ' + budget[0];
}
function lotterywin(){// you win 3000 Units 
    criteria[9] = 1;
    var lottery = randomgenerator(5,50)
    budget[0] += lottery * 100;
    document.getElementById('randomeventinfo').innerHTML = 'You won the lottery after years of playing <br><br>You get ' + lottery * 100 +` Units.<br><br><button class = 'greatbtn' onclick="closeevent()";>Finally</button>`;
    document.getElementById('randomeventinfo').style.display = 'block';                 
    document.getElementById('budget').innerHTML = 'Budget: ' +budget[0];
}
function flood(){// you lose buildings or pay to maintain them
    criteria[9] = 1;
    document.getElementById('randomeventinfo').innerHTML = 'Your Coast Area was flooded!<br><br>Pay '+Math.round((budget[0]/3)) + ` Units to maintain those or risk losing up to three of them!<br><br><button class = 'greatbtn' onclick="removebuildings()";>Destroy</button><button class = 'greatbtn' onclick="maintain()";>Pay</button>`;
    document.getElementById('randomeventinfo').style.display = 'block';                 
}                
function removebuildings(){
    for(var o = 1; o <= 3; o++){
        document.getElementById("field-"+floodbuilding[randomgenerator(0,5)]).style.backgroundImage='url("misc/fields/roads.png"';                                              
    }
    countfields();
    closeevent() 
}
function maintain(){
    budget[0] -= (Math.round(budget[0]/3));
    document.getElementById('budget').innerHTML = 'Budget: ' +budget[0];
    closeevent() 
}

function closeevent(){
    document.getElementById('randomeventinfo').style.display = 'none';
    criteria[9] = 0;
    clock();
}
//End of Random Events------------------------------------
//driving cars--------------------------------------------
function carmovement(){
    criteriagenerator();
    randomtypegenerator();
    carmovement1();
    carmovement2();
    carmovement3();
    carmovement4();
    carmovement5();
    carmovement6();
    carmovement7();
    carmovement8();
    carmovement9();
    carmovement10();
    carmovement11();
    carmovement12();
    carmovement13();
    carmovement14();
    carmovement15();
    carmovement16();
    carmovement17();
}
//end of driving cars-------------------------------------
//info window---------------------------------------------
function infostart(){
    document.getElementById('gamemanual').style.display='block';
    criteria[8] = 1;
    gamespeed[0] = 2000; //sets the gameespeed to slow 
    document.getElementById('speed').value = "1x";
    document.getElementById('page1').style.backgroundColor='#508ebb';
}

function infoclose(){
    document.getElementById('gamemanual').style.display='none';
    criteria[8] = 0;
}
//end of info window--------------------------------------