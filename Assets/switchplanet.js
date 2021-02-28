#pragma strict
var planet : int;
var save : GameObject;
var fader : GameObject;
var sceneEnding = "Zero";
var timer : float = 3;

function OnClick(){
 var autosave = save.GetComponent(autosave);
 

 switch(planet)
 {
 case 1:
 this.GetComponent.<Collider>().enabled=false;
  autosave.SaveSettings();
  sceneEnding="One";
  
  //Application.LoadLevel("One");
 break;
 
 case 2:
 this.GetComponent.<Collider>().enabled=false;
   autosave.SaveSettings();
   sceneEnding="Two";
     
  // Application.LoadLevel("Two");
 
 break;
 
 }

}

function Update(){
	timer -= Time.deltaTime;
	if(timer<0)
		this.GetComponent.<Collider>().enabled=true;

	if(sceneEnding=="Zero")
		return;
	
	 var fade = fader.GetComponent(SceneFadeInOut);

    	fade.EndScene(sceneEnding);

  
  }
