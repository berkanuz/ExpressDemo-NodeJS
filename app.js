var app = require('express')();
const hbs = require ('hbs');

app.set('view engine','hbs');

app.get("/", (req,res)=>{
    res.render('index');
});


app.get("/berkan" ,(req,res) =>{
    res.render('employe', {
        employeName: 'Berkan',
        employeSex: 'Male',
        employeAge: new Date().getFullYear() - 1993,
        employePic: 'https://www.google.com/search?q=employe+picture&sxsrf=ALeKk03fNwxOogeMJHNj92Z4IK1akm-kjg:1611246892379&tbm=isch&source=iu&ictx=1&fir=4g9-Gmrwbt-ZOM%252CAyrD16oBwCar2M%252C_&vet=1&usg=AI4_-kTmvJUiZnkPBJx3H55Rd-6iQ3r8dw&sa=X&ved=2ahUKEwjxpqm1uq3uAhUkt3EKHcVzBcsQ9QF6BAgGEAE#imgrc=4g9-Gmrwbt-ZOM'
    });
});
app.get("/employe/:employeName" , (req,res) => {
    res.render('employe', {
        employeName: req.params.employeName,
        employeSex: 'Male',
        employeAge: 35,
        employePic: 'https://www.google.com/search?q=employe+picture&sxsrf=ALeKk03fNwxOogeMJHNj92Z4IK1akm-kjg:1611246892379&tbm=isch&source=iu&ictx=1&fir=4g9-Gmrwbt-ZOM%252CAyrD16oBwCar2M%252C_&vet=1&usg=AI4_-kTmvJUiZnkPBJx3H55Rd-6iQ3r8dw&sa=X&ved=2ahUKEwjxpqm1uq3uAhUkt3EKHcVzBcsQ9QF6BAgGEAE#imgrc=4g9-Gmrwbt-ZOM'
    });
});

app.get("*" , (req,res) => {
    res.render('404');
});


app.listen(3000, () => {
    console.log("port 3000 is listening");
});
