//Q-1(Write a js function that returns array element larger than a number)
function getLargerElements(arr,num){
    return arr.filter(value => {
    return value>num;
    })
}
const numbers = [45,34,23,78,56,76,54,89,90];
const result = getLargerElements(numbers,34);
console.log(result);

//Q-2(Write a js function to extract unique characters from a string)
function getUniqueCharacters(str){
    let result = "";
    for(let char of str){
        if(!result.includes(char)){
            result +=char;
        }
    }
    return result;
}
console.log(getUniqueCharacters("abcshfkgfksbrg"));

//Q-3(Get Longest Country Name)
function getLongestCountryLength(countries){
    let longestStr = "";
    for(let country of countries){
        if(country.length>longestStr.length){
            longestStr = country;
        }
    }
    return longestStr;
}
const countryList = ["Australia", "Germany", "UnitedStatesofAmerica"];
console.log(getLongestCountryLength(countryList));

//Q-4(a js function to count the number of vowels in a string argument)
function countNoOfVowels(str){
    let count =0;
    const vowels="aeiouAEIOU"
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}
console.log(countNoOfVowels("Ayush Kumar Srivastava"));

//Q-5(Random number between start to end)
function randomNum(num1,num2){
    let num=Math.floor(Math.random()*num2)+1;
    return num;
}
console.log(randomNum(1,5));