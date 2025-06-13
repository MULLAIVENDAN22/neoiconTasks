// NEOICON CLASS PRACTICE 01
/*
let pname = "iphone",pprice = 50000,tax = 2000;
console.log("product name ",pname);
console.log("price incl tax ",pprice+tax);

let fname = "Apple", fprice = 200;
const total = (count)=>{
 let total = fprice*count;
  return [total,count]
}
let mtotal = total(5)
console.log("fruit name ",fname);
console.log(`for ${mtotal[1]} of apple the price is ${mtotal[0]}`);
*/

//-------------------------------------------------------

// NEOICON CLASS PRACTICE 02

/*
// A bike consumes 1 liter fuel for every 10 km.Each trip reduces fuel, and refueling increases it.

function bikeTrip(liter,distance,refill) {
  liter+=refill
  let finalltr = ((liter*10)%distance)/10
  console.log(`before travelling bike has ${liter}ltr`);
  console.log(`after travelling ${distance}km bike has ${finalltr}ltr `);
  console.log("before travelling bike has ",liter,"liters");
  
}
bikeTrip(5,55,2);
*/

/*
// You are creating a simple game where players gain or lose points. You want to: Increase the player's
// score before showing it when they collect a bonus (pre-increment).Show the current score when a player
// loses a point but decrement after showing it (post-decrement).Keep track of total bonuses collected
// and penalties applied using increments.

let point = 50
const addpoint = () =>{
  return ++point;
}
const removepoint = () =>{
  return --point;
}
const addBonuspoint = (value) =>{
  return point+=value;
}

console.log(addpoint());
console.log(addBonuspoint(5));
console.log(removepoint());
*/

//-------------------------------------------------------