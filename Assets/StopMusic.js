#pragma strict
var BackgroundAudio : GameObject;
var MusicPlaying : boolean = true;

function OnClick() {

switch(MusicPlaying){

	case false:
	BackgroundAudio.GetComponent.<AudioSource>().mute=false;
	MusicPlaying = true;
	break;

	case true:
	BackgroundAudio.GetComponent.<AudioSource>().mute=true;
	MusicPlaying=false;
	break;
}
}