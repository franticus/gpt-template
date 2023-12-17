function Boundary(x, y, w, h){
	var options = {
		isStatic: true,
		collisionFilter: {
			group: collider_wall
		}
	};
	this.body = Bodies.rectangle(x, y, w, h, options);
	this.w = w;
	this.h = h;
	World.add(world, this.body);

}

Boundary.prototype.show = function() {
	
	fill(Theme[theme].color2);
	stroke(Theme[theme].color2);
	var pos = this.body.position;
	push();
	translate(pos.x, pos.y);
	rectMode(CENTER);
	rect(0, 0, this.w, this.h);	
	pop();
	
};