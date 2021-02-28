#pragma strict

static var spiritTimer : double = 0.0f;
static var spiritPerTick : double = 1.0f;
static var spirit : double = 5.0f;
static var spiritLabel : UILabel;
static var bonusActive : float = 1.0f;
static var spiritBoost : float = 1.0f;
var spiritBooster : GameObject;

function Start () {
spiritLabel = GameObject.Find("currentSpirit").GetComponent("UILabel");
    
}

function FixedUpdate () {
bonusActive=Mathf.Lerp(bonusActive,1.0f,.5*Time.deltaTime);
var rand: float;
rand = Random.Range(0,9002);
if(rand>9000 && spiritBooster.activeInHierarchy==false)
{
	spiritBooster.SetActive(true);
}



if (
spiritPerTick<1){spiritPerTick=1;
}
	
	spiritTimer += Time.deltaTime;
	if (spiritTimer >= .1)
	{
	Debug.Log(bonusActive);
		// do stuff
		spirit = spirit + ((spiritPerTick/3)*bonusActive*spiritBoost);
		spiritLabel.text = Mathf.Round(spirit).ToString("n0") + "\n" + (spiritBoost*bonusActive*(spiritPerTick*3)).ToString("n1") + "/sec";
		spiritTimer = 0;
		
	}
}
