const promiseTwo=new Promise(function(reseolve,reject){
    let data=null;
    // let data={
    //     username:"deepti",
    //     pass:"1234"
    // }
    setTimeout(()=>{
        if(data){
            console.log("data is fetched successfully");
            reseolve(data);
        }
        else{
            console.log("Promise is rejected");
            reject("Error: something went wrong");
        }

    },2000)
})


// promiseTwo
//     .then(function(data){
//     console.log(data);
//     })
//     .catch(function(err){
//     console.log(err);
//     })



async function consumePromiseTwo(){
    
    try{
        const response=await promiseTwo;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
    
}

consumePromiseTwo();

const fetchUser=async()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await response.json();
        console.log("Response from API is fetched",response);
        console.log("User data is fetched",data);
    }
    catch(error){
        console.log("Error fetching user data:", error);
    }
}
fetchUser();