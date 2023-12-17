function Label(content, x, y, size){
	this.content	= content;
	this.x			= x;
	this.y 			= y;
	this.size		= size;
	
}

Label.prototype.draw = function(){
	textSize(this.size);
	fill(Theme[theme].color2);
	stroke(Theme[theme].color2);
	text(this.content, this.x, this.y);
}