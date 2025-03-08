const request = (req,res,next) => {
    const randome = Math.floor(Math.random() * 10);
    if(randome % 2 == 0){
        res.status(401).send("Unauthorized access");
    }
    next();
}

module.exports = request;