//whe we have created any function and you pass the array in it as the parameter that is to mean that that value is going to be used for the function only but the lunches value i s gonna contain every value of the lunch
const lunches=[];

function addLunchToEnd(arr,item){
console.log(arr.push(item));
console.log(`${item} added to the end of the lunch menu.`);
return arr;
}

function addLunchToStart(arr,item){
console.log(arr.unshift(item))
console.log(`${item} added to the start of the unch`)
return arr;
}

function removeLastLunch(arr){
    if (item=[]){
    console.log("No lunches to remove.")
  }
  else{
  console.log(arr.pop());
  console.log(`${item} removed from the end  of the lunch menu.`)}

  return arr;
}

function removeFirstLunch(){
  console.log(lunches.pop());
  console.log(`${item} removed from the start of the lunch menu.`)
}