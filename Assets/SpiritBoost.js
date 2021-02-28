#pragma strict
var chatBox : UILabel;
var spiritBoost : boolean;
var timer : float = 0.2;

function FixedUpdate() {
/*
if (spiritBoost){


	if (timer<=0){
 		addSpirit.spirit = addSpirit.spirit + (addSpirit.bonusActive*(addSpirit.spiritPerTick/2));
		chatBox.text="Currently earning " + (addSpirit.bonusActive*(addSpirit.spiritPerTick+(addSpirit.spiritPerTick/2*8))).ToString("n1") + " spirit per parsec!";
		timer=0.2;
	}
	else
	{
	timer-=Time.deltaTime;
	}

}
*/
}
function OnHover(isOver) {
 if (isOver) {
	spiritBoost=true;
	addSpirit.spiritBoost=2.0f;

}
else
	{
	spiritBoost=false;
		addSpirit.spiritBoost=1.0f;

	}
}

