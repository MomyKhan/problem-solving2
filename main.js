//nicher sentence a "Bangladesh" shobdoti kotobar babohar hoyechhe? prothombar "Bangladesh" koto number position a pawa giyechhe?

let sentence = "I live in Bangladesh, Bangladesh is a small country, we love Bangladesh.";
const match = sentence.match(/Bangladesh/ig);
const match_length = match ? match.length : "not found";
document.getElementById("countMatch").innerHTML = match_length;
let position = sentence.search("Bangladeshs");
    position = position >= 0 ? position : "not found";
document.getElementById("mh").innerHTML = position;

//input:linearSearch(["a","b","c","d","c",], "c")
//output: 2 or "not found!"
//problem: linearSearch()funtion ti implement kore dekhan.

function linearSearch(arr,val){
    let length = arr.length;
    for(let i = 0; i<length; i++){
      if(arr[i]===val){
        return i; 
      }    
    } 
    return "not found";
}
document.getElementById("fm").innerHTML = linearSearch(["a","b","c","d","c"], "c");

//kono Array theke kivabe sob theke boro string khuje ber korben ebong tar index number dekhaben?

function bigString(arr){
    let bigWord = "";
    for(val of arr){
      if(val.length>bigWord.length){
        bigWord = val;  
      }
    } 
    return [bigWord, arr.indexOf(bigWord)];
}
document.getElementById("bg").innerHTML = bigString(["Japan", "France", "India", "Bangladesh","Vutan", "Viyetnum"]);

























































