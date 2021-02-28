#pragma strict


function Update () {
	if (Input.GetAxis("Mouse ScrollWheel") > 0) // back
	{
	Camera.main.orthographicSize--;
	}
	if (Input.GetAxis("Mouse ScrollWheel") < 0) //forward
	{
	Camera.main.orthographicSize++;
	}
	
	
	if (Input.GetKeyDown(KeyCode.UpArrow)) // back
	{
	Camera.main.orthographicSize--;
	}
	if (Input.GetKeyDown(KeyCode.DownArrow)) //forward
	{
	Camera.main.orthographicSize++;
	}
	
	
	
	Camera.main.orthographicSize = Mathf.Clamp(Camera.main.orthographicSize, 5,10);
}