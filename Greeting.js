class Greeting {

constructor(){

    this.greeting = createElement("h2");

    this.link = createA("Test1.html" , "Click here to view the image");

    

}

display(){
    

    this.greeting.html("Hello " + name + " . <p>Welcome to Go Corona Go App. </p><p> I wish that you stay safe , fit and healthy... Have a nice experience... </p><p> Enjoy your journey </p>");
    this.greeting.position(315,245); 

    this.link.position(350,680);

    

}







}