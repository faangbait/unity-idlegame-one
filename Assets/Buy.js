#pragma strict
var numOwned : float;
var cost : double;
var lblCost : UILabel;
var lblOwned : UILabel;
var chatBox : UILabel;
var spiritAdded : float;
var costIncrease: float;
var baseCost: float;

var numAtmospheres : UILabel;
var numLand : UILabel;
var numPlants : UILabel;
var numHumans : UILabel;
var numTemples: UILabel;

var spotlight : GameObject;
var LandMass : GameObject;
var HumanMass : GameObject;
var TempleMass : GameObject;

var numBact : UILabel;
var numOrga : UILabel;
var numAnim : UILabel;
var numProp : UILabel;
var spirit : UILabel;
var rand : int;

function Start () {
if(Application.loadedLevelName=="One"){
	addSpirit.spirit = PlayerPrefs.GetFloat("Spirit");
	addSpirit.spiritPerTick = PlayerPrefs.GetFloat("SpiritPerTick");
	numAtmospheres.text = PlayerPrefs.GetFloat("Atmo").ToString();
	numLand.text = PlayerPrefs.GetFloat("Land").ToString();
	numBact.text = PlayerPrefs.GetFloat("Bact").ToString();
	numOrga.text = PlayerPrefs.GetFloat("Orga").ToString();
	numPlants.text = PlayerPrefs.GetFloat("Plants").ToString();
	numAnim.text = PlayerPrefs.GetFloat("Anim").ToString();
	numHumans.text = PlayerPrefs.GetFloat("Humans").ToString();
	numProp.text = PlayerPrefs.GetFloat("Prop").ToString();
	numTemples.text = PlayerPrefs.GetFloat("Temples").ToString();
}
else if(Application.loadedLevelName=="Two"){

	addSpirit.spirit = PlayerPrefs.GetFloat("Spirit");
	addSpirit.spiritPerTick = PlayerPrefs.GetFloat("SpiritPerTick");
	numAtmospheres.text = PlayerPrefs.GetFloat("Atmo2").ToString();
	numLand.text = PlayerPrefs.GetFloat("Land2").ToString();
	numBact.text = PlayerPrefs.GetFloat("Bact2").ToString();
	numOrga.text = PlayerPrefs.GetFloat("Orga2").ToString();
	numPlants.text = PlayerPrefs.GetFloat("Plants2").ToString();
	numAnim.text = PlayerPrefs.GetFloat("Anim2").ToString();
	numHumans.text = PlayerPrefs.GetFloat("Humans2").ToString();
	numProp.text = PlayerPrefs.GetFloat("Prop2").ToString();
	numTemples.text = PlayerPrefs.GetFloat("Temples2").ToString();

}
	numOwned = parseFloat(lblOwned.text);
	if (numOwned>0)
		{
			cost = Mathf.Abs(baseCost*costIncrease*numOwned);
		}
		else
		{
			cost =baseCost;
		}
		
	lblCost.text = cost.ToString("n0");
}

function OnClick() {


  if ( addSpirit.spirit >= cost) 
 {
	 numOwned = numOwned + 1;
	 lblOwned.text = numOwned.ToString();
	 addSpirit.spirit = addSpirit.spirit - cost;
	 addSpirit.spiritPerTick = addSpirit.spiritPerTick + spiritAdded;
	 cost = Mathf.Abs(baseCost*costIncrease*numOwned);
	 lblCost.text = cost.ToString("n0");
	 var Messages : GameObject = GameObject.Find("MessageBox");
	 rand = Mathf.RoundToInt(Random.Range(1,10));
	 Debug.Log(rand);
	 
	 
	 if (this.name=="Atmosphere") {
	 switch(rand)
	 {
	 case 1:
	 Messages.GetComponent(UILabel).text="You've added oxygen to your atmosphere that, one day, idiots will waste talking about Justin Bieber and the Kardashians.";
	 break;
	 
	 case 2:
	 Messages.GetComponent(UILabel).text="All my life I thought air was free... until I bought a bag of potato chips.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="Oxygen was discovered in 1773. Thank God you were born after 1773. You would have died without it!";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="People say you can't live without love, but oxygen seems more important.";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="Love is in the air? Wrong. Nitrogen, oxygen, and carbon dioxide are in the air. Love is in your head.";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="You separate outer space from not-outer-space.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="Confucious say, 'When you breathe, you inspire, and when you do not breathe, you expire!'";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="Living on Earth may be expensive, but it includes a free trip around the Sun every year.";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="In the beginning, the Universe was created. This has made a lot of people very angry and has been widely regarded as a bad move.";
	 break;
	 
	 }
	 }
	 if (this.name=="Land") {
	 	 switch(rand)
	 {
     case 1:
	 Messages.GetComponent(UILabel).text="You separate the oceans from the lands.";
	 break;
	 
	 case 2:
	 Messages.GetComponent(UILabel).text="Pretty soon you'll have to create landlords.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="What do you do with dead geologists? Barium.";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="It's a hard rock life.";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="Rock on!";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="The land you created has some faults, but it also has some nice features.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="On Earth Day, you can usually find Wind and Fire down at the bar being bitter and jaded.";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="What do you call a very, very old joke? Pre-hysterical!";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="You've done groundbreaking work here.";
	 break;
	 }
	 }
	 
	 if (this.name=="Plants") {
	 switch(rand)
	 {
	 case 1:
	 Messages.GetComponent(UILabel).text="Plantae are multicellular organisms that taste good with Ranch dressing.";
	 break;
	 
	 case 2:
	 Messages.GetComponent(UILabel).text="If idiots grew on trees, this place would be a forest.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="Why did the leaf go to the doctor? It was feeling green.";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="To help with pollination, we've included some insects with your purchase. Enjoy your free bees.";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="You can't cedar forests fir the trees.";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="What did the carrot say to the wheat? Lettuce rest, I'm feeling beet.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="This game really grows on you, doesn't it?";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="It is the dawning of the Age of Asparagus, the Age of Asparagus...";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="Surviving on photosynthesis... like a moss.";
	 break;
	 }
	 }
	 
	 if (this.name=="Bacteria") {
	 switch(rand)
	 {
	 case 1:
	 Messages.GetComponent(UILabel).text="What's the fastest way to determine the sex of a chromosome? Pull down its genes.";
	 break;
	 
	 case 2:
	 Messages.GetComponent(UILabel).text="What does DNA stand for? National Dyslexics Association.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="Support bacteria. It's the only culture some people have.";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="Two bacteria walk into a bar. The bartender says, 'Get out! We don't serve bacteria in this bar.' The bacteria reply, 'But we work here! We're staph.'";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="In other news, DNA helicase was arrested this morning for unzipping its genes in public.";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="Why did the bacteria cross the microscope? To get to the other slide.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="Jim, this is lemonade on the slide. What happened to the plague culture?";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="Microbiology is the only science in which multiplication is the same as division.";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="Lonely ATGCATG seeks congenial TACGTAC for gene zipping. Been single-stranded too long.";
	 break;
	 }
	 }
	 
	 if (this.name=="Organisms") {
	 switch(rand)
	 {
	 case 1:
	 Messages.GetComponent(UILabel).text="This game is just a germ of an idea.";
	 break;
	 
	 case 2:
	 Messages.GetComponent(UILabel).text="For a moment, nothing happens. Then, after a second or so, nothing continues to happen.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="Two blood cells met and fell in love. Alas, it was all in vein.";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="When life gives you salmon, make salmonella.";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="If I was an endoplasmic reticulum, how would you want me: smooth or rough?";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="My chemokines bring all the boys to the yard.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="The first unicellular organism in the primordial soup was probably very bored.";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="Organisms are DNA's method of producing more DNA.";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="You can never lose at this game.";
	 break;
	 }
	 }
	 
	 if (this.name=="Animals") {
	 switch(rand)
	 {
	 case 1:
	 Messages.GetComponent(UILabel).text="Such animals. So bird and beast. Many predators and prey. Wow.";
	 break;
	 
	  case 2:
	 Messages.GetComponent(UILabel).text="Thanks for all the fish.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="There are an infinite number of monkeys outside who want to speak with you about this script for Hamlet they've worked out.";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="Anyone who fails to see the evolutionary link between man and ape has never used the restroom at a Walmart.";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="In a thousand years, archaelogists will dig up tanning beds and think we fried people as punishment.";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="What do you call a fish with no eyes? FSH.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="How do you identify a bald eagle? All his feathers are combed over to one side.";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="What's invisible and smells like carrots? Bunny farts.";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="Cats have 9 lives. That makes them ideal for experimentation...";
	 break;
	 }
	 }
	 
	 if (this.name=="Humans") {
	 switch(rand) {
	 case 1:
	 Messages.GetComponent(UILabel).text="The marks humans leave are too often scars.";
	 break;
	 
	  case 2:
	 Messages.GetComponent(UILabel).text="Most of the people you've created are unhappy pretty much all of the time. Many solutions are suggested for this problem, but most of these are largely concerned with the movement of small green pieces of paper, which is odd because it's not the pieces of paper that are unhappy.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="Oh no, not again.";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="You've given them life. Now they have to go find purpose in it.";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="When someone shows you who they are, believe them.";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="Man is the only creature who refuses to be what he is.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="The world is indeed comic, but the joke is on mankind.";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="Indifference will be the downfall of mankind, but who cares?";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="I love mankind. And by mankind I mean women.";
	 break;
	 }
	 }
	 
	 if (this.name=="Prophets") {
	 switch(rand)
	 {
	 case 1:
	 Messages.GetComponent(UILabel).text="Men begin to preach of you to other men.";
	 break;
	 
	  case 2:
	 Messages.GetComponent(UILabel).text="Strange men offer to take you to mystical places. You happily accept.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="Prophets are labor saving devices, like dishwashers. Prophets believe things for you, thus saving you what eventually becomes an increasingly onerous task, that of believing all the things the world expects you to believe.";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="God is silent. Now if only man would shut up.";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="All men are prophets or else God does not exist.";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="Like the groundhog, most prophets deliver their predictions and then disappear.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="Even the very wise cannot see all ends.";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="Prophets deal with men of straw, as they are men of straw themselves.";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="The only proof I need for the existence of God is music.";
	 break;
	 }
	 }
	 
	 if (this.name=="Temples") {
	 switch(rand)
	 {
	 case 1:
	 Messages.GetComponent(UILabel).text="O Holy One, give us your blessings!.";
	 break;
	 
	 case 2:
	 Messages.GetComponent(UILabel).text="I find the whole business of religion profoundly interesting. But it does mystify me that otherwise intelligent people take it seriously.";
	 break;
	 
	 case 3:
	 Messages.GetComponent(UILabel).text="The temple confirms: the answer to the ultimate question of life, the universe and everything is 42.";
	 break;
	 
	 case 4:
	 Messages.GetComponent(UILabel).text="Absolute autonomy inevitably leads to tyranny.";
	 break;
	 
	 case 5:
	 Messages.GetComponent(UILabel).text="He who doesn't go to temple in bad weather will go to hell when it is fair.";
	 break;
	 
	 case 6:
	 Messages.GetComponent(UILabel).text="Don't give your money to the temple. They should be giving their money to you.";
	 break;
	 
	 case 7:
	 Messages.GetComponent(UILabel).text="All God does is watch us and kill us when we get boring. We must never, ever be boring.";
	 break;
	 
	 case 8:
	 Messages.GetComponent(UILabel).text="I think God, in creating man, somewhat overestimated his ability.";
	 break;
	 
	 case 9:
	 Messages.GetComponent(UILabel).text="God will not look you over for medals, degrees or diplomas, but for scars.";
	 break;
	 }
	 }
	 
 }

}

function OnHover(isOver) {
if(isOver)
	chatBox.text="Adds " + (3*this.spiritAdded).ToString("n1") + "/sec";
else
	chatBox.text="";
}




function Update(){

	var smooth : float = 0.25;
	var atmospheres = float.Parse(numAtmospheres.text);
	var lands = float.Parse(numLand.text);
	
		
	if (spotlight.GetComponent.<Light>().intensity<.8) {
	spotlight.GetComponent.<Light>().intensity = Mathf.Lerp(spotlight.GetComponent.<Light>().intensity,(atmospheres/30),smooth * Time.deltaTime);
	}
	
	

	if (LandMass.transform.localScale.x<9.56) {
	LandMass.transform.localScale.x = Mathf.Lerp(LandMass.transform.localScale.x, 8.15+(lands/10), smooth * Time.deltaTime);
	LandMass.transform.localScale.y = Mathf.Lerp(LandMass.transform.localScale.y, 8.15+(lands/10), smooth * Time.deltaTime);
	LandMass.transform.localScale.z = Mathf.Lerp(LandMass.transform.localScale.z, 8.15+(lands/10), smooth * Time.deltaTime);

//LandMass.transform.localScale.y = 85+(lands/4);
//	LandMass.transform.localScale.z = 85+(lands/4);
	}

	var plants = float.Parse(numPlants.text);
	
	LandMass.GetComponent.<Renderer>().material.color = Color(0.486-(plants/100),0.486,0.486-(plants/100));
	//GameObject.Find("LandMass").renderer.material.color = Color(0.000,0.486,0.000);
		
	var humans = float.Parse(numHumans.text);
	
	if (HumanMass.transform.localScale.x<9.35) {
	HumanMass.transform.localScale.x = Mathf.Lerp(HumanMass.transform.localScale.x, 7.5+(humans/7), smooth * Time.deltaTime);
	HumanMass.transform.localScale.y = Mathf.Lerp(HumanMass.transform.localScale.y, 7.5+(humans/7), smooth * Time.deltaTime);
	HumanMass.transform.localScale.z = Mathf.Lerp(HumanMass.transform.localScale.z, 7.5+(humans/7), smooth * Time.deltaTime);
	
	}	
		
	var temples = float.Parse(numTemples.text);
	
	if (TempleMass.transform.localScale.x<9.3) {
	TempleMass.transform.localScale.x = Mathf.Lerp(TempleMass.transform.localScale.x, 6.5+(temples/3), smooth * Time.deltaTime);
	TempleMass.transform.localScale.y = Mathf.Lerp(TempleMass.transform.localScale.y, 6.5+(temples/3), smooth * Time.deltaTime);
	TempleMass.transform.localScale.z = Mathf.Lerp(TempleMass.transform.localScale.z, 6.5+(temples/3), smooth * Time.deltaTime);
	
	}	
	
}

