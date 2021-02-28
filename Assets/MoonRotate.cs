using UnityEngine;
using System.Collections;

public class MoonRotate : MonoBehaviour {
	public GameObject globe;
	public Vector3 axis;
	public float speed;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

		transform.RotateAround (globe.transform.position, axis, speed);
	}
}
