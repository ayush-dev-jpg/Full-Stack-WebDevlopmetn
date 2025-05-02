//Question(square and then sum of all the elements insde array)
const arr = [3,4,5,6,2];
let result=0;
let sumSq =((arr)=>{
    for(i=0; i<arr.length;i++){
        result+=arr[i]**2;
    }
    return result;
    
})
console.log(sumSq(arr));

//Question-1
const arrNew = [2,3,4,6,4,3,2,1];
const avgOfSquares=(arrNew)=>{
    const sum = arrNew.reduce((res,el)=>res+el**2,0);
    return sum/arrNew.length;
};
console.log(avgOfSquares(arrNew));
console.log(avgOfSquares([1,2,3]));

//Question-2
let newArr1=arr.map((n)=>{
    return n+5
})
console.log(newArr1);

//Question-3
let lowCase=["radha","laadliju","pyaariJu","laalJu","shriharivansh"];
let upCase = lowCase.map((el)=>el.toUpperCase());
console.log(upCase);

//Question-4
function doubleAndReturnArgs(arr,...args){
    const doubled = args.map(x=>x*2);
    return [...arr,...doubled]
}
console.log(doubleAndReturnArgs([1,2,3,4,5],4,5,6))

//Question-5
