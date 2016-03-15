// TODO: add your solutions here

combineWords('dog', 'house');

  function combineWords(dog,house){
    console.log (dog+house);
  }


repeatWord(meow, 5);

  function repeatWord(meow, n) {
    for(var i = 0; i < n; i++) {
      console.log(meow);
    }
  }


toTheNthPower(number, power);

  function toTheNthPower(number, power) {
  	var result = 1;
  	for(var i = 0; i < power; i++) {
  		result *= number;
  	}
  	console.log(result);
  	return result;
  }


ariaOfACircle(radius);

  function areaOfACircle(radius) {
  var r = radius * radius;
  console.log("aria equals"+ math.PI * r);
  }


pythagoreanTheorem(a,b);

  function pythagoreanTheorem(a,b){
      var x= a*a;
      var y= b*b;
      var z= x+y;
      console.log(Math.sqrt (z));
  }

isXEvenlyDevidedByY(x,y);

function evenlyDevided(x,y){
    var z = (x % y);
    if (z === 0){
        console.log("Yay!");
    }
    else{
        console.log("Nein! es ist "+ z +"!");
    }
}
