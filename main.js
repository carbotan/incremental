var iron = 0;
var robot = 0;
var credits = 0;

function ironClick(number){
	iron = iron + number;
	document.getElementById("iron").innerHTML = iron
};

function sellIron(){
	if(iron > 0){
		credits = credits + (iron * 2);
		iron = 0;
		document.getElementById('iron').innerHTML = iron;
		document.getElementById('credits').innerHTML = credits;
	};
};

function buyRobot(){
	var robotCost = Math.floor(10 * Math.pow(1.1,robot));
	if(credits >= robotCost){
		robot = robot + 1;
		credits = credits - robotCost;
		document.getElementById('robot').innerHTML = robot;
		document.getElementById('credits').innerHTML = credits;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,robot));
	document.getElementById('robotCost').innerHTML = nextCost;
};

window.setInterval(function(){
ironClick(robot);
}, 1000);