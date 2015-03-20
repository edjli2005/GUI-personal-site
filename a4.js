document.body.style.background = "#EDEDED";

alert(document.title);

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    var x = re.test(email);
    document.write(x);
}

validateEmail("eli@smu.edu");

console.log("http://private-40e0f-smugui2015.apiary-mock.com/assignments/4");