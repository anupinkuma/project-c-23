class Box{
    constructor(x,y,width,height){
 var option={isStatic:true}

    
this.body=Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
World.add(world,this.body)
    }
    display(){
        var p=this.body.position
        push();
        translate(p.x,p.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("maroon")
        rect(0,0,this.width,this.height)
        pop();
    }
}