#pragma strict
var bird : GameObject; 

function Start () {
	bird.CreatePrimitive(PrimitiveType.Sphere);
	bird.transform.position = Vector3(0,0.5,0);
	bird.transform.localScale = Vector3 (1.25,1.5,1);
}

function Update () {
		bird.transform.RotateAround (Vector3.zero, Vector3.up, 20 * Time.deltaTime);

}