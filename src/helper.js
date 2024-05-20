

const getNums=(n)=>{
   let arr = new Array(n);
   for(let i=0; i<n; i++){
      arr[i] = Math.floor(Math.random() * 10);

   } return arr;
}

const sum=(arr)=>{
   return arr.reduce((number, nums) => number + nums);
}
export {getNums , sum};