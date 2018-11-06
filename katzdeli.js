/*1.	Build a function that a new customer will use when entering the deli.
The function, takeANumber, should accept two paramaters: the current line of
people, along with the new person's name. The function should return a welcome
 message including the new person's position in line, such as "Welcome, Ada.
 You are number 1 in line.". And don't go being too programmer-y and give them
 their index. These are normal people. If they are 7th in line, tell them that.
  Don't get their hopes up by telling them they are number 6 in line.*/


function takeANumber(line,name) {
  line.push(name)
  return `Welcome ${name} you are the ${line.length+1} person in line`
}

/* 2.	Build a function nowServing. This function should accept the current line
 of people (katzDeliLine) and return the first person in line and then remove
 that individual from the line. If there is nobody in line, it should return
 "There is nobody waiting to be served!"*/

 function nowServing(line) {
   if(line.length === 0) {
     return "There is nobody waiting to be served"
   }
   if(line.length > 0) {
     var first = line.splice(0,1)
     return `Currently serving ${first} in line`
   }
 }
 /*3.	Build a function currentLine that accepts the current line of
 people and returns the current line as a string; for example, if 'katzDeliLine'
 is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line
 is currently: 1. Ada, 2. Grace". You don't have to use katzDeliLine as a variable
 or parameter name in your function though, it's just an example of a variable
 that might be passed to it. If there is nobody in line, it should return
 "The line is currently empty."*/

 function currentLine(line){
   if(line.length === 0) {
     return "The line is currently empty.";
   }
   var lineNumbers = [];

   for(var i=0; i<line.length; i++) {
     lineNumbers.push(`${i+1}.${line[i]}`);
   }
   return "The line is currently: " + lineNumbers.join(', ');
 }


 takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
 takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
 takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
 currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 nowServing(katzDeliLine); // "Currently serving Ada."
 currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
 takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."
 currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 nowServing(katzDeliLine); // "Currently serving Grace."
 currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
