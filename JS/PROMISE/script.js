

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("NO RANDOM NUMBER WAS SUPPORTING YOU")
    }
    

    else{
        setTimeout(() => {
            console.log("YES I AM DONE");
            resolve("VAIBHAV");
            
        }, 3000);
    }
})

let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you 2");
    }
        else{
            setTimeout(() => {
                console.log("Yes i am done 2");
                resolve("Vaibhav 2")
                
            }, 1000);
        }
    
})

let p3 = Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a);
    
}).catch(err=>{
    console.log(err);
    
})