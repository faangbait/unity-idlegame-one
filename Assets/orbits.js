#pragma strict

function Start () {

}

var rotationSpeed = 5;

function Update () {
 transform.Rotate(0,rotationSpeed * Time.deltaTime,0);	
}