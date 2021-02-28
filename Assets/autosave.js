#pragma strict
var numAtmo : UILabel;
var numLand : UILabel;
var numBact : UILabel;
var numOrga : UILabel;
var numPlants : UILabel;
var numAnim : UILabel;
var numHumans : UILabel;
var numProp : UILabel;
var numTemples : UILabel;
var spirit : UILabel;

var timer : float = 5;

function Start()
{

}


function OnClick () {

SaveSettings();

}

function Update() {


if (timer<Time.deltaTime) {
	SaveSettings();
	timer=5;
}
else
	timer = timer-Time.deltaTime;
	
}

function SaveSettings() {
	if(Application.loadedLevelName=="One")
	{
		PlayerPrefs.SetFloat("SpiritPerTick",addSpirit.spiritPerTick);
		PlayerPrefs.SetFloat("Spirit",addSpirit.spirit);
		PlayerPrefs.SetFloat("Atmo",parseFloat(numAtmo.text));
		PlayerPrefs.SetFloat("Land",parseFloat(numLand.text));
		PlayerPrefs.SetFloat("Bact",parseFloat(numBact.text));
		PlayerPrefs.SetFloat("Orga",parseFloat(numOrga.text));
		PlayerPrefs.SetFloat("Plants",parseFloat(numPlants.text));
		PlayerPrefs.SetFloat("Anim",parseFloat(numAnim.text));
		PlayerPrefs.SetFloat("Humans",parseFloat(numHumans.text));
		PlayerPrefs.SetFloat("Prop",parseFloat(numProp.text));
		PlayerPrefs.SetFloat("Temples",parseFloat(numTemples.text));
		PlayerPrefs.Save();
	}
	else if(Application.loadedLevelName=="Two")
	{
		PlayerPrefs.SetFloat("SpiritPerTick",addSpirit.spiritPerTick);
		PlayerPrefs.SetFloat("Spirit",addSpirit.spirit);
		PlayerPrefs.SetFloat("Atmo2",parseFloat(numAtmo.text));
		PlayerPrefs.SetFloat("Land2",parseFloat(numLand.text));
		PlayerPrefs.SetFloat("Bact2",parseFloat(numBact.text));
		PlayerPrefs.SetFloat("Orga2",parseFloat(numOrga.text));
		PlayerPrefs.SetFloat("Plants2",parseFloat(numPlants.text));
		PlayerPrefs.SetFloat("Anim2",parseFloat(numAnim.text));
		PlayerPrefs.SetFloat("Humans2",parseFloat(numHumans.text));
		PlayerPrefs.SetFloat("Prop2",parseFloat(numProp.text));
		PlayerPrefs.SetFloat("Temples2",parseFloat(numTemples.text));
		PlayerPrefs.Save();
	}
	Debug.Log(Application.loadedLevelName);
	Debug.Log("Progress saved.");
	
	if(parseInt(numTemples.text)>0)
	{
		Application.ExternalCall("kongregate.stats.submit","Number of Temples",(PlayerPrefs.GetFloat("Temples")+PlayerPrefs.GetFloat("Temples2")));
	}
	}