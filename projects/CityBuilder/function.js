//creates a Fancy Random Number
function randomgenerator(min, max){
    randomnumber = Math.floor(Math.random()*(max-min+1)) + min;   
 return randomnumber;
}

//Fancy Building Objects---------------------------------------------
function Building(name, cost, citizens, income, power, entertainment){
    this.name = name;
    this.cost = cost;
    this.citizens = citizens;
    this.income = income;
    this.power = power;
    this.entertainment = entertainment;
}

var empty = new Building('Empty', 0, 0, 0, 0, 0);
var residential = new Building('Houses', 1000, 12, 100, 9, 0);
var industry = new Building('Factories', 1500, 14, 500, 18, -0.1);
var commercial = new Building('Shops', 2000, 6, 200, 12, 0.1);
var powerplant = new Building('Nuclear', 8000, 0, -1000, 120, -0.2);
var publicpark = new Building('Park', 2000, 0, -500, 2, 0.4);
//End of Building Objects--------------------------------------
//Fancy Arrays-------------------------------------------------------
var gamespeed = new Array(2000, 0);
var cityname = new Array;
var income = new Array(0, 0);
var budget = new Array(25000, 0);
var roads = new Array;
var workers = new Array;
var population = new Array;
var electricity = new Array;
var happiness = new Array;
var background = new Array; //selected texture for the building type
var playaudio = new Array;
var disable = false;
var fieldvalue = new Array; //fieldvalue[id]= value given from the building
var criteria = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var chosennumbers = new Array;
var blocked = new Array;
var resiblocked = new Array;
var carloc = new Array;
var cartype = new Array('white1', 'white2', 'red', 'blue', 'grey', 'green');
var floodbuilding = new Array(28, 38, 48, 58, 68, 78);
var randomtype = new Array;
var car = new Array;

function criteriagenerator(){
    for(var zz = 201; zz <=216; zz++){
        criteria[zz] = randomgenerator(0,1);
    }
    if(criteria[216 == 0]){
        criteria[217] = 1;
    }else{
        criteria[217] = 0;
    }
}

function randomtypegenerator(){
    for(var ti = 1; ti <=17; ti++ ){
        randomtype[ti] = randomgenerator(0,5);
        car[ti] = document.getElementById("car"+ti);
    }
    for(var pi = 0; pi<=7; pi++){
        carloc[pi] = randomgenerator(400,3350);
    }
    for(var po = 8; po<=17; po++){
        carloc[po] = randomgenerator(400,2600);
    }
}
//End of Arrays------------------------------------------------
function pageswitch(id){
    for(var g = 1; g<9; g++){
        document.getElementById('page'+g).style.backgroundColor='#28567A';
    }
    document.getElementById(id).style.backgroundColor='#508ebb';
    var itex = document.getElementById('texmanual');
    var ipic = document.getElementById('picmanual');
    itex.style.right='385px';
    itex.style.right='385px';
    itex.style.fontSize='24px';
    ipic.style.display='block';
    if(id == 'page1'){
        itex.innerHTML= "Thats your budget and income. You start with 25000 units. Everything in the game costs money and changes the income. If the budget is lower than 1000 and the income negative you lose the game. Always keep an eye on the description of every building so you know how much it costs you. Random events in game can also change your Budget and income but more to this on the page for random events.";
        ipic.style.backgroundImage='url(misc/ui/backgrounds/page1.png)';
    }
    if(id == 'page2'){
        itex.innerHTML="Thats the overall happiness of your citizens. Orange means that your happiness is sufficient and you don't have to worry about it. Red means that you have to raise it with commercials or parks because if it is too low you may lose the game. Light green means you’re on a good way to earn more taxes from your citizens. But always be careful about Industry, Power Plants and too much workers because they will decrease it.";
        ipic.style.backgroundImage='url(misc/ui/backgrounds/page2.png)';
    }
    if(id == 'page3'){
        itex.innerHTML="Thats the amount of workers and electricity you have available. Every building has an impact on these two values. You won't be able to build something if you don't have enough of it. But don't think that you can have unlimited workers because if there are more than 24 workers your citizens will become sad because of not enough workplaces.";
        ipic.style.backgroundImage='url(misc/ui/backgrounds/page3.png)';
    }
    if(id == 'page4'){
        itex.innerHTML="The clock is your indicator so that your know when you get or lose money. After every day you get your income credited. If you haven't enough workers, electricity or if your happiness is not so good you'll get a notification. If you can't fix your problems within the next 24 hours you'll lose the game. You can adjust the gamespeed with the button on the right. Random events are slowing down the speed.";
        ipic.style.backgroundImage='url(misc/ui/backgrounds/page4.png)';
    }
    if(id == 'page5'){
        itex.innerHTML="Buildings can be placed on every gamefield by selecting and placing it. Residential buildings can't be placed next to the industry or a power plant. Residential buildigs will give more income when your happiness is outstanding. They cost more on the coast. By hovering about the building icon in the gamebar you can the every relevant information. Power plants are spared any disaster that can occur.";
        ipic.style.backgroundImage='url(misc/ui/backgrounds/page5.png)';
    }
    if(id == 'page6'){
        itex.innerHTML="Random events are always triggerd at 2 am but they will occur after day 3 at the earliest. They can led to disasters or will give you advanteges.<br>Powerplants won't be effected by random events. Everytime something happens you will find out.";
    }
    if(id == 'page7'){
        itex.innerHTML="There are some special fields on the map. 4 bombs are spreaded over the whole map. If you build a building on a field with one it will explode after some time after that the filed is cleared from it. The fields on the cost will double the cost of residentila buildings but the look different.";
    }
    if(id == 'page8'){
        itex.innerHTML="The game ends when you've builded a building on every available field with a positive income. Game over is when you didn't have enough money left to continue, your citizens weren't happy, you didn't had enough workers or electricity.";
    }
    if(id == 'page6' || id == 'page7' || id == 'page8'){
        ipic.style.display='none';
        itex.style.right='10px';
        itex.style.fontSize='40px';
    }
}
//Epic moving cars---------------------------------------------
function carmovement1(){                  
    if(criteria[201] == 0){                 
        setTimeout(function(){
            carloc[1] = carloc[1]+2;
            car1.style.left= carloc[1]+'px';
            if(carloc[1] < 3390){
                carmovement1();
            }else{
                criteria[201] = 1;
                car1.style.top= '360px';
                carmovement1();
                car1.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[1]]+"left.png')";
            }
        },25);
    }
    if(criteria[201] == 1){                 
        setTimeout(function(){
            carloc[1] = carloc[1]-2;
            car1.style.left= carloc[1]+'px';
            if(carloc[1] > 380){
                carmovement1();
            }else{
                criteria[201] = 0;
                car1.style.top= '379px';
                carmovement1();
                car1.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[1]]+"right.png')";
            }
        },25);
    }
}

function carmovement2(){                   
    if(criteria[202] == 0){                 
        setTimeout(function(){
            carloc[2] = carloc[2]+2;
            car2.style.left= carloc[2]+'px';
            if(carloc[2] < 3390){
                carmovement2();
            }else{
                criteria[202] = 1;
                car2.style.top= '740px';
                carmovement2();
                car2.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[2]]+"left.png')";
            }
        },25);
    }
    if(criteria[202] == 1){                 
        setTimeout(function(){
            carloc[2] = carloc[2]-2;
            car2.style.left= carloc[2]+'px';
            if(carloc[2] > 380){
                carmovement2();
            }else{
                criteria[202] = 0;
                car2.style.top= '759px';
                carmovement2();
                car2.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[2]]+"right.png')";
            }
        },25);
    }
}

function carmovement3(){                   
    if(criteria[203] == 0){                 
        setTimeout(function(){
            carloc[3] = carloc[3]+2;
            car3.style.left= carloc[3]+'px';
            if(carloc[3] < 3390){
                carmovement3();
            }else{
                criteria[203] = 1;
                car3.style.top= '1120px';
                carmovement3();
                car3.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[3]]+"left.png')";
            }
        },25);
    }
    if(criteria[203] == 1){                 
        setTimeout(function(){
            carloc[3] = carloc[3]-2;
            car3.style.left= carloc[3]+'px';
            if(carloc[3] > 380){
                carmovement3();
            }else{
                criteria[203] = 0;
                car3.style.top= '1139px';
                carmovement3();
                car3.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[3]]+"right.png')";
            }
        },25);
    }
}

function carmovement4(){                   
    if(criteria[204] == 0){                 
        setTimeout(function(){
            carloc[4] = carloc[4]+2;
            car4.style.left= carloc[4]+'px';
            if(carloc[4] < 3390){
                carmovement4();
            }else{
                criteria[204] = 1;
                car4.style.top= '1500px';
                carmovement4();
                car4.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[4]]+"left.png')";
            }
        },25);
    }
    if(criteria[204] == 1){                 
        setTimeout(function(){
            carloc[4] = carloc[4]-2;
            car4.style.left= carloc[4]+'px';
            if(carloc[4] > 380){
                carmovement4();
            }else{
                criteria[204] = 0;
                car4.style.top= '1519px';
                carmovement4();
                car4.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[4]]+"right.png')";
            }
        },25);
    }
}

function carmovement5(){                   
    if(criteria[205] == 0){                 
        setTimeout(function(){
            carloc[5] = carloc[5]+2;
            car5.style.left= carloc[5]+'px';
            if(carloc[5] < 3390){
                carmovement5();
            }else{
                criteria[205] = 1;
                car5.style.top= '1880px';
                carmovement5();
                car5.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[5]]+"left.png')";
            }
        },25);
    }
    if(criteria[205] == 1){                 
        setTimeout(function(){
            carloc[5] = carloc[5]-2;
            car5.style.left= carloc[5]+'px';
            if(carloc[5] > 380){
                carmovement5();
            }else{
                criteria[205] = 0;
                car5.style.top= '1899px';
                carmovement5();
                car5.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[5]]+"right.png')";
            }
        },25);
    }
}

function carmovement6(){                   
    if(criteria[206] == 0){                 
        setTimeout(function(){
            carloc[6] = carloc[6]+2;
            car6.style.left= carloc[6]+'px';
            if(carloc[6] < 3390){
                carmovement6();
            }else{
                criteria[206] = 1;
                car6.style.top= '2260px';
                carmovement6();
                car6.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[6]]+"left.png')";
            }
        },25);
    }
    if(criteria[206] == 1){                 
        setTimeout(function(){
            carloc[6] = carloc[6]-2;
            car6.style.left= carloc[6]+'px';
            if(carloc[6] > 380){
                carmovement6();
            }else{
                criteria[206] = 0;
                car6.style.top= '2279px';
                carmovement6();
                car6.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[6]]+"right.png')";
            }
        },25);
    }
}

function carmovement7(){                   
    if(criteria[207] == 0){                 
        setTimeout(function(){
            carloc[7] = carloc[7]+2;
            car7.style.left= carloc[7]+'px';
            if(carloc[7] < 3390){
                carmovement7();
            }else{
                criteria[207] = 1;
                car7.style.top= '2640px';
                carmovement7();
                car7.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[7]]+"left.png')";
            }
        },25);
    }
    if(criteria[207] == 1){                 
        setTimeout(function(){
            carloc[7] = carloc[7]-2;
            car7.style.left= carloc[7]+'px';
            if(carloc[7] > 380){
                carmovement7();
            }else{
                criteria[207] = 0;
                car7.style.top= '2659px';
                carmovement7();
                car7.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[7]]+"right.png')";
            }
        },25);
    }
}
//----------------------------------------------------------
function carmovement8(){                   
    if(criteria[208] == 0){                 
        setTimeout(function(){
            carloc[8] = carloc[8]+2;
            car8.style.top= carloc[8]+'px';
            if(carloc[8] < 2640){
                carmovement8();
            }else{
                criteria[208] = 1;
                car8.style.left= '379px';
                carmovement8();
                car8.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[8]]+"up.png')";
            }
        },25);
    }
    if(criteria[208] == 1){                 
        setTimeout(function(){
            carloc[8] = carloc[8]-2;
            car8.style.top= carloc[8]+'px';
            if(carloc[8] > 380){
                carmovement8();
            }else{
                criteria[208] = 0;
                car8.style.left= '360px';
                carmovement8();
                car8.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[8]]+"down.png')";
            }
        },25);
    }
}

function carmovement9(){                   
    if(criteria[209] == 0){                 
        setTimeout(function(){
            carloc[9] = carloc[9]+2;
            car9.style.top= carloc[9]+'px';
            if(carloc[9] < 2640){
                carmovement9();
            }else{
                criteria[209] = 1;
                car9.style.left= '759px';
                carmovement9();
                car9.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[9]]+"up.png')";
            }
        },25);
    }
    if(criteria[209] == 1){                 
        setTimeout(function(){
            carloc[9] = carloc[9]-2;
            car9.style.top= carloc[9]+'px';
            if(carloc[9] > 380){
                carmovement9();
            }else{
                criteria[209] = 0;
                car9.style.left= '740px';
                carmovement9();
                car9.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[9]]+"down.png')";
            }
        },25);
    }
}

function carmovement10(){                   
    if(criteria[210] == 0){                 
        setTimeout(function(){
            carloc[10] = carloc[10]+2;
            car10.style.top= carloc[10]+'px';
            if(carloc[10] < 2640){
                carmovement10();
            }else{
                criteria[210] = 1;
                car10.style.left= '1139px';
                carmovement10();
                car10.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[10]]+"up.png')";
            }
        },25);
    }
    if(criteria[210] == 1){                 
        setTimeout(function(){
            carloc[10] = carloc[10]-2;
            car10.style.top= carloc[10]+'px';
            if(carloc[10] > 380){
                carmovement10();
            }else{
                criteria[210] = 0;
                car10.style.left= '1120px';
                carmovement10();
                car10.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[10]]+"down.png')";
            }
        },25);
    }
}

function carmovement11(){                   
    if(criteria[211] == 0){                 
        setTimeout(function(){
            carloc[11] = carloc[11]+2;
            car11.style.top= carloc[11]+'px';
            if(carloc[11] < 2640){
                carmovement11();
            }else{
                criteria[211] = 1;
                car11.style.left= '1519px';
                carmovement11();
                car11.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[11]]+"up.png')";
            }
        },25);
    }
    if(criteria[211] == 1){                 
        setTimeout(function(){
            carloc[11] = carloc[11]-2;
            car11.style.top= carloc[11]+'px';
            if(carloc[11] > 380){
                carmovement11();
            }else{
                criteria[211] = 0;
                car11.style.left= '1500px';
                carmovement11();
                car11.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[11]]+"down.png')";
            }
        },25);
    }
}

function carmovement12(){                   
    if(criteria[212] == 0){                 
        setTimeout(function(){
            carloc[12] = carloc[12]+2;
            car12.style.top= carloc[12]+'px';
            if(carloc[12] < 2640){
                carmovement12();
            }else{
                criteria[212] = 1;
                car12.style.left= '1899px';
                carmovement12();
                car12.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[12]]+"up.png')";
            }
        },25);
    }
    if(criteria[212] == 1){                 
        setTimeout(function(){
            carloc[12] = carloc[12]-2;
            car12.style.top= carloc[12]+'px';
            if(carloc[12] > 380){
                carmovement12();
            }else{
                criteria[212] = 0;
                car12.style.left= '1880px';
                carmovement12();
                car12.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[12]]+"down.png')";
            }
        },25);
    }
}

function carmovement13(){                   
    if(criteria[213] == 0){                 
        setTimeout(function(){
            carloc[13] = carloc[13]+2;
            car13.style.top= carloc[13]+'px';
            if(carloc[13] < 2640){
                carmovement13();
            }else{
                criteria[213] = 1;
                car13.style.left= '2279px';
                carmovement13();
                car13.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[13]]+"up.png')";
            }
        },25);
    }
    if(criteria[213] == 1){                 
        setTimeout(function(){
            carloc[13] = carloc[13]-2;
            car13.style.top= carloc[13]+'px';
            if(carloc[13] > 380){
                carmovement13();
            }else{
                criteria[213] = 0;
                car13.style.left= '2260px';
                carmovement13();
                car13.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[13]]+"down.png')";
            }
        },25);
    }
}

function carmovement14(){                   
    if(criteria[214] == 0){                 
        setTimeout(function(){
            carloc[14] = carloc[14]+2;
            car14.style.top= carloc[14]+'px';
            if(carloc[14] < 2640){
                carmovement14();
            }else{
                criteria[214] = 1;
                car14.style.left= '2659px';
                carmovement14();
                car14.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[14]]+"up.png')";
            }
        },25);
    }
    if(criteria[214] == 1){                 
        setTimeout(function(){
            carloc[14] = carloc[14]-2;
            car14.style.top= carloc[14]+'px';
            if(carloc[14] > 380){
                carmovement14();
            }else{
                criteria[214] = 0;
                car14.style.left= '2640px';
                carmovement14();
                car14.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[14]]+"down.png')";
            }
        },25);
    }
}

function carmovement15(){                   
    if(criteria[215] == 0){                 
        setTimeout(function(){
            carloc[15] = carloc[15]+2;
            car15.style.top= carloc[15]+'px';
            if(carloc[15] < 2640){
                carmovement15();
            }else{
                criteria[215] = 1;
                car15.style.left= '3039px';
                carmovement15();
                car15.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[15]]+"up.png')";
            }
        },25);
    }
    if(criteria[215] == 1){                 
        setTimeout(function(){
            carloc[15] = carloc[15]-2;
            car15.style.top= carloc[15]+'px';
            if(carloc[15] > 380){
                carmovement15();
            }else{
                criteria[215] = 0;
                car15.style.left= '3020px';
                carmovement15();
                car15.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[15]]+"down.png')";
            }
        },25);
    }
}

function carmovement16(){                   
    if(criteria[216] == 0){                 
        setTimeout(function(){
            carloc[16] = carloc[16]+2;
            car16.style.top= carloc[16]+'px';
            if(carloc[16] < 3000){
                carmovement16();
            }else{
                criteria[216] = 1;
                car16.style.left= '3419px';
                carmovement16();
                car16.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[16]]+"up.png')";
            }
        },25);
    }
    if(criteria[216] == 1){                 
        setTimeout(function(){
            carloc[16] = carloc[16]-2;
            car16.style.top= carloc[16]+'px';
            if(carloc[16] > 0){
                carmovement16();
            }else{
                criteria[216] = 0;
                car16.style.left= '3400px';
                carmovement16();
                car16.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[16]]+"down.png')";
            }
        },25);
    }
}

function carmovement17(){                   
    if(criteria[217] == 0){                 
        setTimeout(function(){
            carloc[17] = carloc[17]+2;
            car17.style.top= carloc[17]+'px';
            if(carloc[17] < 3000){
                carmovement17();
            }else{
                criteria[217] = 1;
                car17.style.left= '3419px';
                carmovement17();
                car17.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[17]]+"up.png')";
            }
        },25);
    }
    if(criteria[217] == 1){                 
        setTimeout(function(){
            carloc[17] = carloc[17]-2;
            car17.style.top= carloc[17]+'px';
            if(carloc[17] > 0){
                carmovement17();
            }else{
                criteria[217] = 0;
                car17.style.left= '3400px';
                carmovement17();
                car17.style.backgroundImage= "url('misc/vehicles/"+cartype[randomtype[17]]+"down.png')";
            }
        },25);
    }
}
//end of moving cars-------------------------------------------