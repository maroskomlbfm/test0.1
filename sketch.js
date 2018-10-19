var a =0;
var b = 0;
var c = 0;
var i = 1;
function setup() {
  createCanvas(400,400);
}

function draw() {
	
	background(a,b,c)
	a = a  + i;
	
	if(a>255)  {
		i = -1;
	}
	
	
	if(a< 0){
		i = 1;
	}

}
