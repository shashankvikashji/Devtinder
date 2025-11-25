const adminAuth = (req , res , next) =>{
    console.log("Admin Auth is getting check !! ")
    const token = "xyz";
    const isAdminAuthorized = token === 'xyz';

    if(!isAdminAuthorized){
        res.status(401).send("Authorized request")
    }else{
        next();
    }

}
const userAuth = (req , res , next) =>{
    console.log("User Auth is getting check !! ")
    const token = "xyz";
    const isUserAuthorized = token === 'xyz';

    if(!isUserAuthorized){
        res.status(401).send("Authorized request")
    }else{
        next();
    }

}

module.exports = {
    adminAuth,
    userAuth,
};

