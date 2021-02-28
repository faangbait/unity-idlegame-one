#pragma strict
var timer : float = 30f;

function OnEnable () {

		timer=30;
}

function Update () {
	timer -=Time.deltaTime;
	
	if(timer<0)
		
		gameObject.SetActive(false);
}

function OnMouseDown() {
	Debug.Log("clicked");
	gameObject.SetActive(false);
	addSpirit.bonusActive=3;
}