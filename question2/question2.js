// This is for the resolves primise
function resolvedPromise(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("resolved : resolved after 500ms");
        }, 500);

    });

}


// This is for the rejected promise

function rejectedPromise(){
    return new Promise((_, reject)=>{
        setTimeout(()=>{
            reject("rejected : Rejected After 500ms");
        },500);

    });
}

resolvedPromise ()
    .then(result => console.log(result))
    .catch(error => console.log(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
