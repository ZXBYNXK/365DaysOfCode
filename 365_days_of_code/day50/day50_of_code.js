window.onload = function() {
   const canvas_object = document.getElementById('canvas'),
    context = canvas_object.getContext("2d"),
    width = canvas_object.width = window.innerWidth,
    height = canvas_object.height = window.innerHeight;
    context.translate((width/2),height/2);


    window.requestAnimationFrame(function loop(){
        context.rotate(Math.PI/50)
    let colors = ['white','green','red']
for(let i = 0; i < 10; i++){

    context.strokeStyle = `${colors[i]}`;
    
    context.beginPath()
    context.fillRect(i+50*4,i,i*66,10)
    context.moveTo((i),77)
   

    
    context.fillRect(i,i,i,1000)
    context.arc(20,30,50,90,360,false)
    context.arc(60,90,150,90,360,false)
    context.lineTo(i, height)
    context.rotate(Math.PI/50)
    context.stroke()
    context
}setTimeout(window.requestAnimationFrame,0, (loop))
    })
}

/*
window.onload = function() {
	const canvas_object = document.getElementById("canvas"),
		context = canvas_object.getContext("2d"),
		width = canvas_object.width = window.innerWidth,
    height = canvas_object.height = window.innerHeight;
       

   context.translate((width / 2), height /2);
    // context.save();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.restore();

var time = 0;
window.requestAnimationFrame(function loop() {
    time++;
  context.rotate(Math.PI / 100 );

for (let i = 0; i < 7; i++) {
  
    context.strokeStyle = 'white';
    context.beginPath();
    ////////////////////////////
    context.moveTo((i),100);

    context.lineTo(0,time);
    /////////////////////////////-
    context.stroke();
  //  context.rotate(Math.PI/21)



  //  context.beginPath();
  //  //////////////////////////////////
  //  context.moveTo(100,1000);
  //  context.lineTo(width,0);
  //  context.stroke();
  // context.rotate(Math.PI/3.5)
   

}setTimeout(window.requestAnimationFrame,0, (loop))})}


*/