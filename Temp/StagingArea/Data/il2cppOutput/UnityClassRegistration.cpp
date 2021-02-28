struct ClassRegistrationContext;
void InvokeRegisterStaticallyLinkedModuleClasses(ClassRegistrationContext& context)
{
	// Do nothing (we're in stripping mode)
}

void RegisterStaticallyLinkedModulesGranular()
{
	void RegisterModule_Animation();
	RegisterModule_Animation();

	void RegisterModule_Audio();
	RegisterModule_Audio();

	void RegisterModule_ParticleSystem();
	RegisterModule_ParticleSystem();

	void RegisterModule_Physics();
	RegisterModule_Physics();

	void RegisterModule_Physics2D();
	RegisterModule_Physics2D();

	void RegisterModule_TextRendering();
	RegisterModule_TextRendering();

	void RegisterModule_IMGUI();
	RegisterModule_IMGUI();

}

void RegisterAllClasses()
{
	//Total: 72 classes
	//0. AssetBundle
	void RegisterClass_AssetBundle();
	RegisterClass_AssetBundle();

	//1. NamedObject
	void RegisterClass_NamedObject();
	RegisterClass_NamedObject();

	//2. EditorExtension
	void RegisterClass_EditorExtension();
	RegisterClass_EditorExtension();

	//3. QualitySettings
	void RegisterClass_QualitySettings();
	RegisterClass_QualitySettings();

	//4. GlobalGameManager
	void RegisterClass_GlobalGameManager();
	RegisterClass_GlobalGameManager();

	//5. GameManager
	void RegisterClass_GameManager();
	RegisterClass_GameManager();

	//6. MeshFilter
	void RegisterClass_MeshFilter();
	RegisterClass_MeshFilter();

	//7. Component
	void RegisterClass_Component();
	RegisterClass_Component();

	//8. Mesh
	void RegisterClass_Mesh();
	RegisterClass_Mesh();

	//9. Renderer
	void RegisterClass_Renderer();
	RegisterClass_Renderer();

	//10. GUITexture
	void RegisterClass_GUITexture();
	RegisterClass_GUITexture();

	//11. GUIElement
	void RegisterClass_GUIElement();
	RegisterClass_GUIElement();

	//12. Behaviour
	void RegisterClass_Behaviour();
	RegisterClass_Behaviour();

	//13. GUILayer
	void RegisterClass_GUILayer();
	RegisterClass_GUILayer();

	//14. Texture
	void RegisterClass_Texture();
	RegisterClass_Texture();

	//15. Texture2D
	void RegisterClass_Texture2D();
	RegisterClass_Texture2D();

	//16. RenderTexture
	void RegisterClass_RenderTexture();
	RegisterClass_RenderTexture();

	//17. RectTransform
	void RegisterClass_RectTransform();
	RegisterClass_RectTransform();

	//18. Transform
	void RegisterClass_Transform();
	RegisterClass_Transform();

	//19. TextAsset
	void RegisterClass_TextAsset();
	RegisterClass_TextAsset();

	//20. Shader
	void RegisterClass_Shader();
	RegisterClass_Shader();

	//21. Material
	void RegisterClass_Material();
	RegisterClass_Material();

	//22. Sprite
	void RegisterClass_Sprite();
	RegisterClass_Sprite();

	//23. SpriteRenderer
	void RegisterClass_SpriteRenderer();
	RegisterClass_SpriteRenderer();

	//24. Camera
	void RegisterClass_Camera();
	RegisterClass_Camera();

	//25. MonoBehaviour
	void RegisterClass_MonoBehaviour();
	RegisterClass_MonoBehaviour();

	//26. Light
	void RegisterClass_Light();
	RegisterClass_Light();

	//27. GameObject
	void RegisterClass_GameObject();
	RegisterClass_GameObject();

	//28. Rigidbody
	void RegisterClass_Rigidbody();
	RegisterClass_Rigidbody();

	//29. Joint
	void RegisterClass_Joint();
	RegisterClass_Joint();

	//30. SpringJoint
	void RegisterClass_SpringJoint();
	RegisterClass_SpringJoint();

	//31. Collider
	void RegisterClass_Collider();
	RegisterClass_Collider();

	//32. BoxCollider
	void RegisterClass_BoxCollider();
	RegisterClass_BoxCollider();

	//33. AudioClip
	void RegisterClass_AudioClip();
	RegisterClass_AudioClip();

	//34. SampleClip
	void RegisterClass_SampleClip();
	RegisterClass_SampleClip();

	//35. AudioSource
	void RegisterClass_AudioSource();
	RegisterClass_AudioSource();

	//36. AudioBehaviour
	void RegisterClass_AudioBehaviour();
	RegisterClass_AudioBehaviour();

	//37. AnimationClip
	void RegisterClass_AnimationClip();
	RegisterClass_AnimationClip();

	//38. Motion
	void RegisterClass_Motion();
	RegisterClass_Motion();

	//39. Animation
	void RegisterClass_Animation();
	RegisterClass_Animation();

	//40. Animator
	void RegisterClass_Animator();
	RegisterClass_Animator();

	//41. DirectorPlayer
	void RegisterClass_DirectorPlayer();
	RegisterClass_DirectorPlayer();

	//42. Font
	void RegisterClass_Font();
	RegisterClass_Font();

	//43. AudioListener
	void RegisterClass_AudioListener();
	RegisterClass_AudioListener();

	//44. MeshRenderer
	void RegisterClass_MeshRenderer();
	RegisterClass_MeshRenderer();

	//45. Collider2D
	void RegisterClass_Collider2D();
	RegisterClass_Collider2D();

	//46. PreloadData
	void RegisterClass_PreloadData();
	RegisterClass_PreloadData();

	//47. Cubemap
	void RegisterClass_Cubemap();
	RegisterClass_Cubemap();

	//48. Texture3D
	void RegisterClass_Texture3D();
	RegisterClass_Texture3D();

	//49. LevelGameManager
	void RegisterClass_LevelGameManager();
	RegisterClass_LevelGameManager();

	//50. TimeManager
	void RegisterClass_TimeManager();
	RegisterClass_TimeManager();

	//51. AudioManager
	void RegisterClass_AudioManager();
	RegisterClass_AudioManager();

	//52. InputManager
	void RegisterClass_InputManager();
	RegisterClass_InputManager();

	//53. Physics2DSettings
	void RegisterClass_Physics2DSettings();
	RegisterClass_Physics2DSettings();

	//54. GraphicsSettings
	void RegisterClass_GraphicsSettings();
	RegisterClass_GraphicsSettings();

	//55. PhysicsManager
	void RegisterClass_PhysicsManager();
	RegisterClass_PhysicsManager();

	//56. MeshCollider
	void RegisterClass_MeshCollider();
	RegisterClass_MeshCollider();

	//57. TagManager
	void RegisterClass_TagManager();
	RegisterClass_TagManager();

	//58. ScriptMapper
	void RegisterClass_ScriptMapper();
	RegisterClass_ScriptMapper();

	//59. DelayedCallManager
	void RegisterClass_DelayedCallManager();
	RegisterClass_DelayedCallManager();

	//60. RenderSettings
	void RegisterClass_RenderSettings();
	RegisterClass_RenderSettings();

	//61. MonoScript
	void RegisterClass_MonoScript();
	RegisterClass_MonoScript();

	//62. MonoManager
	void RegisterClass_MonoManager();
	RegisterClass_MonoManager();

	//63. FlareLayer
	void RegisterClass_FlareLayer();
	RegisterClass_FlareLayer();

	//64. PlayerSettings
	void RegisterClass_PlayerSettings();
	RegisterClass_PlayerSettings();

	//65. GUIText
	void RegisterClass_GUIText();
	RegisterClass_GUIText();

	//66. BuildSettings
	void RegisterClass_BuildSettings();
	RegisterClass_BuildSettings();

	//67. ResourceManager
	void RegisterClass_ResourceManager();
	RegisterClass_ResourceManager();

	//68. LightmapSettings
	void RegisterClass_LightmapSettings();
	RegisterClass_LightmapSettings();

	//69. ParticleSystem
	void RegisterClass_ParticleSystem();
	RegisterClass_ParticleSystem();

	//70. ParticleSystemRenderer
	void RegisterClass_ParticleSystemRenderer();
	RegisterClass_ParticleSystemRenderer();

	//71. RuntimeInitializeOnLoadManager
	void RegisterClass_RuntimeInitializeOnLoadManager();
	RegisterClass_RuntimeInitializeOnLoadManager();

}
