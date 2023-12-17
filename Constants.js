//Theme Value
var theme = 'Coding Train'; // Theme List  -> Coding Train, Dark Purple, Parrot

//Stud Grid
var cols = 20;
var rows = 10;

//Cup Value Type
//
// false 	= Number values
// true		= Yes Or No Values
//
var yesOrNo = false;

//////////////////////////////////////////////////////////////////////////////

////// CONFIGURABLE Options Above Here

///// Do Not Edit Below --> Except The Theme Definitions can be added to

/////////////////////////////////////////////////////////////////////////////

//JS Helper Vars
var w  = window,
    d  = w.document,
    de = d.documentElement,
    db = d.body || d.getElementsByTagName('body')[0],
    x  = w.innerWidth || de.clientWidth || db.clientWidth,
    y  = w.innerHeight|| de.clientHeight|| db.clientHeight;


//Matter Collision Filters
var collider_wall = 10;
var collider_stud = 5;
var collider_ball = 1;
    
// World Deminsions
var worldX = x;
var worldY = y;//900;

// Object % Sizes
var cupH = worldY / 10;
var cupLabelSize = worldX / 70;
var scoreLabelSize = worldX / 60;
var ballRad = worldX / 80;
var studRad = worldX / 150;

// Theme Definitions
var Theme = {
	
	'Coding Train' : {
		'color1' : [61], // Background
			
		'color2' : [255] // Evverything Else
	},
	'Dark Purple' : {
		'color1' : [39, 0, 61],
			
		'color2' : [221, 164, 254]
	},
	'Parrot' : {
		'color1' : [0, 81, 92],
			
		'color2' : [250, 255, 97]
	},
			
};
			
//RGB Generator -> http://www.perbang.dk/rgb/