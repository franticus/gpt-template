function Cup(content, x, y, size){
	this.content	= content;
	this.x			= x;
	this.y 			= y;
	this.size		= size;
	
	var options = {
		isStatic: true,
		isSensor: true,
		type: 'cup',
		pointValue: content,
		collisionFilter: {
			group: collider_wall
		}
	};
	this.body = Bodies.rectangle(x, y, 10, 10, options);
	World.add(world, this.body);
	
}

Cup.prototype.draw = function(){
	textSize(this.size);
	fill(Theme[theme].color2);
	var label_width = textWidth(this.content);
	text(this.content, this.x - (label_width / 2), this.y);
}