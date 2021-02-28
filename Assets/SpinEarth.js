#pragma strict

function Start () {
}

function Update () {
	this.transform.Rotate (-1.5*Time.deltaTime,3.5*Time.deltaTime,1.5*Time.deltaTime);
}