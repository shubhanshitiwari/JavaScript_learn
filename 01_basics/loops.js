//for 

for (let index= 0; index<= 10; index++){
    const element = index;
    console.log(element)
}
// 0 1 2 3 4 5 6 7 8 9
//no access for index outside

// ReferenceError: array is not defined

for (let i=0;i<=10 ; i++){
    const element = i
    if(element == 5){
        console.log("5 is the best")
    }
    console.log(element);
}

for (let i=1;i<=11;i++){
    for(let j=0;j<i;j++){
        console.log(j,i)
    }
}
//outer 1 inner termination

let arr=["we","are","human","are","we","?"]
for (let i=1;i<arr.length;i++){
    const element = arr[i]
    console.log(element)
}

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`)
        break
    }    
    console.log(`elements are ${i}`)
}

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`)
        continue
    }    
    console.log(`elements are ${i}`) // not gonna print in 5 
}
