//Author: Andrew Beaudrie
//Date: August 4, 2021
//I certify that this work is entirely my own

//Function that prints a "99 lines of code" song to the console
function ninetyNineLinesSong(){
    for(let i = 99; i > 0; i--){
        if(i > 10){
            console.log(`${i} Lines of code in the file, ${i} lines of code!
    Comment one out, debug the result, ${i - 1} lines left in the file!`);
        }
        else if(i > 1){
            //Numbers less than ten should be written out. Thefore, a key-value object that maps numerals to their string equivalent is nessecary.
        let numerals = {
            10: "Ten",
            9: "Nine",
            8: "Eight",
            7: "Seven",
            6: "Six",
            5: "Five",
            4: "Four",
            3: "Three",
            2: "Two",
            1: "One",
        };
            if(i == 2){
                console.log(`${numerals[i]} lines of code in the file, ${numerals[i]} lines of code!
    Comment one out, debug the result, ${numerals[i - 1]} line left in the file!`);
            }
            else{
                console.log(`${numerals[i]} lines of code in the file, ${numerals[i]} lines of code!
    Comment one out, debug the result, ${numerals[i - 1]} lines left in the file!`);
            }
        }
        //Counter should be down to one by this point
        else{
            console.log("One more line of code in the file, one more line of code!");
            console.log("Comment it out, debug the result, no more lines of code left in the file!");
        }
    }
    console.log("No more lines of code left in the file, no more lines of code!");
    console.log("Go to Bootcamp, learn to write some more, then who knows how many lines to debug?");
}

ninetyNineLinesSong();