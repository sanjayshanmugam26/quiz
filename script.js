//function for changing the pages

function changepage(current, next) {
    document.getElementById(current).style.display = 'none';
    document.getElementById(next).style.display = 'block';
}
//get name
var name = '';
function getname() {
    name = document.getElementById('name').value;
    //console.log(name);
}
//chack the answer
function checkans() {
    var val = document.getElementById('stars').value;
    val = parseInt(val);
    if (val == 52) {
        scorecount();
    }
}

//score
var score = 0;

function scorecount() {
    score ++;
    //console.log(score);
}

//final score

function finalscore() {
    document.getElementById('scorevalue').innerHTML = score;
    document.getElementById('ch_name').innerHTML = name;
}