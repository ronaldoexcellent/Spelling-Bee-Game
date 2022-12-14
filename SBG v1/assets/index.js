alert("Javascript Support Confirmed!");
alert("Your screen size is " + screen.width + " x " + screen.height + ". Therefore, this app will be optimized to your device resolution.");
alert("Please make sure to use small letters or lowercase letters when answering all letters, GOOD LUCK!");

            function intro() {
                document.getElementById("intro_pic").style.transform = "scale(1)";
            setTimeout(function () {document.getElementById("intro_pic").style.opacity = "0"}, 5000);
            setTimeout(function () {document.getElementById("intro_pic").style.display = "none";}, 5500);
            setTimeout(function () {load()}, 6000)
            }

            

            function load() {
                    $lo = document.getElementById("loader");
                    $ma = document.getElementById("mainmenu");
                    $lo.style.display = "flex";
                    setTimeout(function () { $lo.style.display = "none" }, 5000);
                    setTimeout(function () { $ma.style.width = "100%" }, 5500);
                }

                $pop_view = document.getElementById("preview");
                    $md = document.getElementById("mode");
                    $crdt = document.getElementById("credit");
                    $hlp = document.getElementById("help");
                    $abt = document.getElementById("about");

                function goto_mode() {
                    document.getElementById("mainmenu").style.width = "0";
                    $pop_view.innerHTML = $md.innerHTML;
                }

                function goto_help() {
                    document.getElementById("mainmenu").style.width = "0";
                    $pop_view.innerHTML = $hlp.innerHTML;
                }

                function goto_credit() {
                    document.getElementById("mainmenu").style.width = "0";
                    $pop_view.innerHTML = $crdt.innerHTML;
                }

                function goto_about() {
                    document.getElementById("mainmenu").style.width = "0";
                    $pop_view.innerHTML = $abt.innerHTML;
                }

                function back_on() {
                    document.getElementById("mainmenu").style.width = "100%";
                    document.getElementById("question-board").style.background = document.getElementById("bgColor").value;
                    document.getElementById("question-board").style.color = document.getElementById("fontColor").value;
                    $pop_view.innerHTML = null
                }


$cell = 0;

$A = ["discipline", "embarrass", "equipment", "existence", "fiery", "gauge", "immediate", "height", "grateful", "foreign", "column", "change", "collectible", "liberty", "exceed", "independent", "library", "license", "maintenance", "neighbor", "noticeable", "occasionally", "pastime", "personnel", "playwright", "possession", "principal", "principle", "privilege", "pronunciation", "pronounce", "publicly", "receipt", "recommend", "relevant"];

$B = ["category", "cemetery", "changeable", "committed", "conscience", "conscious", "definitely", "drunkenness", "dumbbell", "exhilarate", "hierarchy", "humorous", "indispensable", "inoculate", "ignorance", "guarantee", "leisure", "occurrence", "millennium", "mischievous", "misspell", "perseverance", "precede", "questionnaire", "sergeant", "supersede", "threshold", "twelfth", "tyranny", "weird", "abhor", "acquit", "bellwether", "consensus", "fiery"];

$C = ["daiquiri", "minuscule", "anomalous", "quiescence", "prevaricate", "precipitate", "prevaricate", "brusque", "flabbergasted", "malleable", "anachronistic", "archetypal", "camaraderie", "circumlocution", "equanimity", "idiosyncratic", "multifarious", "sanctimonious", "solipsism", "vicissitude", "deleterious", "onomatopoeia", "sesquipedalian", "synecdoche", "pterodactyl", "chthonic", "brusque", "ubiquitous", "vociferous", "quotidian", "recalcitrant", "logorrhea", "autochthonous", "chiaroscurist", "appoggiatura"];

$word_group = [""];
$phrase_target = document.getElementById("phrase");
$word_input = document.getElementById('wordinput');
$check_btn = document.getElementById('dbtn');
$reset_btn = document.getElementById('rbtn');
$n = 1;
$time = document.getElementById("timing");
$std_time = 0;
$mode = "";
$ratings = null;
$q = document.getElementById("questions");
$qb = document.getElementById("question-board");

document.getElementById("phrase_number").innerHTML = null;

function eMode() {
    setTimeout(function () {$q.style.width = "100%";}, 6000);
    setTimeout(function () {$qb.style.transform = "scale(1.5)";}, 7000);
    setTimeout(function () {$qb.style.transform = "scale(1)";}, 7500);
    $word_group = $A;
    $display_phrase = Math.floor($A.length * Math.random()); $phrase_target.innerHTML = $word_group[$display_phrase]; 
    $digit = 8;
    $time.innerHTML = "0" + $digit;
    $std_time = 8;
    $mode = "Easy";
    $time.style.transform = "scale(1)"; 
    $phrase_target.style.opacity = "1"; 
    $time.style.opacity = "1"; 
    document.getElementById("mainmenu").style.width = "0";
    $pop_view.innerHTML = null;
    
    setTimeout(function () {document.getElementById("phrase_number").innerHTML = $n + " / 35"; $loop_time = setInterval(start, 1000);}, 8500)
    }

    function nMode() {
        setTimeout(function () {$q.style.width = "100%";}, 6000);
    setTimeout(function () {$qb.style.transform = "scale(1.5)";}, 7000);
    setTimeout(function () {$qb.style.transform = "scale(1)";}, 7500);
        $word_group = $B;
    $display_phrase = Math.floor($B.length * Math.random()); $phrase_target.innerHTML = $word_group[$display_phrase];
    $digit = 6; 
    $time.innerHTML = "0" + $digit;
    $std_time = 6;
    $mode = "Normal";
    $time.style.transform = "scale(1)";
    $phrase_target.style.opacity = "1"; 
    $time.style.opacity = "1"; 
    document.getElementById("mainmenu").style.width = "0";
    $pop_view.innerHTML = null;

    setTimeout(function () {document.getElementById("phrase_number").innerHTML = $n + " / 35"; $loop_time = setInterval(start, 1000);}, 8500)
    }

    function hMode() {
        setTimeout(function () {$q.style.width = "100%";}, 6000);
    setTimeout(function () {$qb.style.transform = "scale(1.5)";}, 7000);
    setTimeout(function () {$qb.style.transform = "scale(1)";}, 7500);
        $word_group = $C;
    $display_phrase = Math.floor($C.length * Math.random()); $phrase_target.innerHTML = $word_group[$display_phrase]; 
    $digit = 3;
    $time.innerHTML = "0" + $digit;
    $std_time = 3;
    $mode = "Hard";
    $time.style.transform = "scale(1)";
    $phrase_target.style.opacity = "1"; 
    $time.style.opacity = "1"; 
    document.getElementById("mainmenu").style.width = "0";
    $pop_view.innerHTML = null;

    setTimeout(function () {document.getElementById("phrase_number").innerHTML = $n + " / 35"; $loop_time = setInterval(start, 1000);}, 8500)
    }

function start() {$time.innerHTML = $digit; $digit--; document.getElementById("instruction").innerHTML = "Memorize . . .";
if ($digit < 10) {$time.innerHTML = "0" + $digit;}
if ($digit < 1) {$digit = 0; clearInterval($loop_time); $word_input.style.display = "block"; $check_btn.style.transform = "scale(1)"; $reset_btn.style.opacity = "1"; $reset_btn.style.transform = "scale(1)"; $reset_btn.disabled = false; $check_btn.disabled = false; document.getElementById("instruction").innerHTML = "Now Spell!"; $time.style.transform = "scale(0)"; $time.style.opacity = "0"; $phrase_target.style.opacity = "0"; document.getElementById("pause").style.display = "none"; document.getElementById("paused").style.display = "none";}
} 

function pause() {
    clearInterval($loop_time);
    document.getElementById("paused").style.transform = "scale(1)";
    $phrase_target.style.opacity = "0";
}

function resume() {
    $loop_time = setInterval(start, 1000);
    document.getElementById("paused").style.transform = "scale(0)";
    $phrase_target.style.opacity = "1";
}

function main_menu() {
    load();
    window.open("index.html", "_self");
}

function nxtphrase() {
    $check_btn.style.transform = "scale(0)";
    $reset_btn.style.transform = "scale(0)";
    $word_input.style.display = "none";
    $word_input.style.color = "black";
    $word_input.style.background = "white";
    document.getElementById("pause").style.display = "block";
    document.getElementById("paused").style.display = "grid";
    $digit = $std_time;
    if ($digit < 10) {
        $time.innerHTML = "0" + $digit;
    }
    else {
        $time.innerHTML = $digit;
    }
    $time.style.transform = "scale(1)"; $time.style.opacity = "1"; $time.style.transition = "0.5s"; $phrase_target.style.opacity = "1";
    $loop_time = setInterval(start, 1000);

    $word_input.value = null;
    $n++;
    document.getElementById("phrase_number").innerHTML = $n + " / 35"; 

    if ($n > 35) {
        $n = 35;
        document.getElementById("phrase_number").innerHTML = $n + " / 35"; 
    }
  
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("correction").innerHTML = null;
    document.getElementById("dbtn").disabled = false;
    document.getElementById("nbtn").style.transform = "scale(0)";
    $word_input.disabled = false;

    function e() {$display_phrase = Math.floor($word_group.length * Math.random()); $phrase_target.innerHTML = $word_group[$display_phrase];}

    $lp = setInterval(e, 300);

    setTimeout(function () {clearInterval($lp);}, 400);

    $nxxt = $word_group.indexOf($phrase_target.innerHTML);
    $word_group.splice($nxxt, 1);
    
    if ($word_group.length == 0) {
        clearInterval($loop_time);
        document.getElementById("show_result").style.transform = "scale(1)";
        alert('Congratulations!');
        $word_group.push('Congratulations!');
        document.getElementById("phrase_number").innerHTML = "You've completed the test. <br> You scored " + $cell + " out of 35.";
	   $time.style.transform = "scale(0)"; 
	   $time.style.opacity = "0"; 
       document.getElementById("instruction").innerHTML = null;
    }
}

for (i = 0; i < $word_group.length; i++) {
function checkbtn() {
    $unNeeded = / /g;
    $word_input.value = $word_input.value.replace($unNeeded, "");
    $check_btn.disabled = true;
    $reset_btn.disabled = true;
    $reset_btn.style.display = "scale(0)";

    function cthis() {
    document.getElementById("dbtn").disabled = true;
    document.getElementById("nbtn").style.transform = "scale(1)";
    $word_input.disabled = true;

if ($word_input.value == $phrase_target.innerHTML) {
    $word_input.style.background = "green";
    $word_input.style.color = "white";
document.getElementById("right").style.display = "block";
document.getElementById("wrong").style.display = "none";
$cell++;
}
else {
    $word_input.style.background = "red";
    $word_input.style.color = "white";
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "block";
    document.getElementById("correction").innerHTML = "The answer is " + document.getElementById("phrase").innerHTML;
}
}

setTimeout(cthis, 1000)
}
}

function result() {
    if ($cell <= 7) {
        $ratings = "Poor"
    } 
    else if ($cell <= 14) {
        $ratings = "Fair"
    }
    else if ($cell <= 21) {
        $ratings = "Average"
    }
    else if ($cell <= 29) {
        $ratings = "Good"
    }
    else if ($cell <= 34) {
        $ratings = "Very Good"
    }
    else if ($cell == 35) {
        $ratings = "Excellent"
    }

if ($cell < 0) {
$cell = $cell * 0;
}

document.getElementById("registry").style.width = "100%";
}

function rg() {
    $user = document.getElementById("registrar").value;

$final_data = "<td><center><wbr>" + $user + "</center></td><td><center>" + $cell + " / 35</center></td><td><center>" + $mode + "</center></td><td><center>" + $ratings + "</center></td>";

    if ($user == "") {
        alert("This box must not be empty!");
    }

    else {
    sessionStorage.setItem($user, $final_data);
    alert("Thanks! Proceed now.");

    $shw_r = window.open('', '_blank', 'resizable=no, copyhistory=0, menubar=no, status=no, scrollbars=no, location=no, directories=no, toolbar=yes, width=400, height=600, left=162');

$shw_r.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="description" content="Spelling bee game written by Ronaldo Excellent. Development began on Wednesday 3oth March, 2022, and finished on " /><meta name="copyright" content="Copyright 2020" /> <title>Spelling Bee By Ronaldo Excellent</title> <link rel="stylesheet" href="../assets/Font awesome/fontawesome-6.0.0/css/all.css" /> <style> tr {background:white;} button:hover, button:focus {animation: btn-effect .7s linear infinite} @keyframes btn-effect {0% {color:rgb(252, 252, 252); background: #ffff00;} 100% {color:rgb(252, 252, 252); background: hsl(120, 99%, 50%);}} </style> </head><body><article style="background-color:; height: 100%; width: 100%; position: fixed; display: grid; overflow-x: none; overflow-y: scroll; top: 0; left: 0; bottom: 0; right: 0; align-items: center; justify-content: center;"> <figure><img src="../media/images/bg_startup.jpg" width="300" height="300" /> <figcaption> <h2 align="center" style="color:darkblue; text-shadow:1px 1px 2px white">By Ronaldo Excellent</h2> </figcaption> </figure> <table bgcolor="grey" border="0" style="padding:2%"> <h3>Your Result:</h3> <thead> <tr> <th>Name:</th> <th>Score:</th> <th>Mode:</th> <th>Rating:</th> </tr> </thead> <tbody> <tr id="new_Data"></tr> </tbody> </table> <br><br><br><br><br><br><br><br><br><br><br><br><br> <button onclick="window.print();" style="background: rgb(41, 40, 40); color: #fcf805; padding: 2%; cursor: progress; box-shadow:3px 3px 7px grey; position: absolute; left: 0; bottom: 0"><i class="fa fa-print"></i> Print</button><button onclick="window.close();" style="width: ; background: rgb(41, 40, 40); color: #fcf805; padding: 2%; cursor: progress; box-shadow:3px 3px 7px grey; position: absolute; right: 0; bottom: 0"><i class="fa fa-times" style="color:blue"></i> Close</button></article><scr' + 'ipt>' + 'document.getElementById("new_Data").innerHTML = sessionStorage.getItem("' + $user + '");' + '</scri' + 'pt></body></html>');
}
    }

