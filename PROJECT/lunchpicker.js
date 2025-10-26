//Build a Lunch Picker Program

const lunches=[];

function addLunchToEnd(arr,item){
arr.push(item);
console.log(`${item} added to the end of the luch menu`);
return arr;
}

function addLunchToStart(arr,item){
  arr.ushift(item);
  console.log(`${item} added to the start of the lunch menu`);
  return arr;
}

function removeLastLunch(){
  if(arr.length===0){
console.log("No lunches to remove.")
  }
  else{
    removedItem=arr.pop();
    console.log(`${item} removed from the end of the lunch menu.`)
  }
}

function removeFirstLunch(){
  if(arr.length===0){
    console.log("No lunches to remove")
  }
  else{
    let removeditem=arr.shift();
    console.log(`${removeditem} removed from the start of the lunch menu.`)
  }
}
function getRandomLunch(){
  if(arr.length===0){
    console.log("No lunches available");
  }
  else{
    const randomIndex=Math.floor(Math.random()*arr.length);
    const randomElement=arr[randomIndex];
    console.log(`Randomly selected lunch:${randomElement}`);
  }
}

function showLunchMenu(){
  if(arr.length===0){
    console.log("The Menu is empty.")
  }
  else{
    console.log(`Menu items: ${arr.join(",")}`)
  }
}
//conslusion is for the method that removes like shift() and pop() you have to make something like this
//to create the variable where those removed item should be.
//but when there is push or unshift becouse you are already adding them in the array then there is no reason to create another