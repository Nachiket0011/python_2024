function howmanyvowels (str){
    let count =0
    for (let char of str){
        if (char == "a"|| char == "o"||char=="e"|| char == "i"|| char == "u"){
            count++
        }

    }
    return count   
  

}


console.log(howmanyvowels("aeiou"))

