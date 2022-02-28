const reverseSeq = n => {
    let temp = []
   for (let i = 5; i >= 0; i--) {
    //    console.log(n);
       console.log(i);

       temp.push(i)
       
   }
    return temp 
};

console.log(reverseSeq(5));