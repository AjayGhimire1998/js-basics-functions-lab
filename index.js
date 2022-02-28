
// function distanceFromHqInBlocks(distance,blocks){
 
//   for ( i = 0; i < blocks; i++){
//     distance++;
//   };
//   return blocks;
// }
// console.log(distanceFromHqInBlocks(43)


//   let distance = (function distanceFromHqInBlocks(blocks){
//     return function(){
//       blocks += 1;
//       return blocks;
//     }
//   }(0));

// console.log(distance(10));

// let street = 0;
// function distanceFromHqInBlocks(street){
//   street++;
//   return street;
// }
// console.log(distanceFromHqInBlocks(1));
function distanceFromHqInBlocks(street){
  let hq = 42;
  // if(street > hq){
  //   return(street - hq);
  // } else if (street < hq){
  //   return(hq - street);
  // }
  return ( Math.abs(hq - street));

//   if (street = 42){
//     return 0;

//   } else if (street = 43) {
//     return 1;
//   } else if (street = 50){
//     return 8;
//   } else if (street = 32) {
//     return 8;
//   }
// }

}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(32));





function distanceFromHqInFeet(street){
  let hq = 42;
  // if(street > hq){
  //   return((street - hq) * 264) ;
  // } else if (street < hq){
  //   return((hq - street) * 264);
  // }
  return (Math.abs(street - hq) * 264);
  
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50)); 
console.log(distanceFromHqInFeet(32));


function distanceTravelledInFeet(start, destination){
  // if (destination > start){
  //   return((destination - start) * 264);
  // } else if (start > destination){
  //   return((start - destination) * 264);
  // }
  return (Math.abs(destination - start) * 264);
}
console.log(distanceTravelledInFeet(42, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));




function calculatesFarePrice(start, destination){

let d = (Math.abs(destination-start)*264);  

if (d <= 400){
  return(0);
}else if (d>= 400 && d <= 2000){
  return((d - 400) * 0.02);
} else if(d>2000 && d<2500){
      return(25);
  } else if(d>2500){
      return("cannot travel that far");
  
  }
  }
  console.log(calculatesFarePrice(50,58));
  console.log(calculatesFarePrice(34,24));

  
 
  
  

  
