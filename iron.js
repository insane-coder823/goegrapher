class Iron{
	constructor(x,y,width,height)
	{
	var options = {
		'density':14,
		'friction': 1.0,
		'restitution':0.5

	}

	    this.x=x,
		this.y=y,
        this.width = 70
        this.height = 70
		this.body = Bodies.rectangle(x, y,70,70, options)
		World.add(world, this.body);

	}
	display()
	{
           push();
			var stonepose=this.body.position;		
			push()
			translate(stonepose.x, stonepose.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("white");
			rect(0,0,this.width,this.height);

            

			pop()
	}

}