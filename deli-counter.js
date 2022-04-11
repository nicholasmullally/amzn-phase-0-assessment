// Function 1:

const katzDeli = ["Ada", "Grace", "Kent", "Matz"];
function line(array) {
 for (i = 0; i < array.length; i++) {
  result = "The line is currently: 1. " + katzDeli[0] + " 2. " + katzDeli[1] + " 3. " + katzDeli[2] + " 4. " + katzDeli[3]
  return result;}
}
console.log(line(katzDeli)) 

// Function 2:

const katzDeli = ["Ada", "Grace", "Kent", "Matz"]
function nowServing(array) {
   if (katzDeli.shift = []); {
     return ("There is nobody waiting to be served!")
  } 
  result = katzDeli.shift;
  return result;
   }
console.log("Currently serving " + katzDeli.shift()) 
console.log(nowServing(katzDeli))

// Function 3:

const katzDeli = ["Ada", "Grace", "Kent", "Matz"];
function takeANumber(array, str) {
  result = array.pop(str);
  return result;
}
takeANumber(katzDeli, "Matz")
console.log("Welcome, " + result + ". You are number " + (katzDeli.length + 1) + " in line.")

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.