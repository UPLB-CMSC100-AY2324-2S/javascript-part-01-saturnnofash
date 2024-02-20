function validatePassword(string1,string2)
{   
    //checks if both strings has at least 8 characters
    if(string1.length < 8 && string2.length < 8)
    {
        return("Password should have at least 8 characters");
    }

    //checks if string has a number
    var hasNumber = /\d/;

    //if both string has no numbers (false)
    if(hasNumber.test(string1)===false || hasNumber.test(string2)===false)
    {
        return("Password should have a number.");
    }
    var upper1 = 0;
    var upper2 = 0;
    var lower1 = 0;
    var lower2 = 0;
    
    //checks if a string has a lower or upper
    for (let a = 0; a < string1.length; a++)
    {
        character = string1.charAt(a);
        if (!isNaN(character * 1)){
            continue;
        }
        if (string1[a].toUpperCase() == string1[a])
        {
            
            //adds upper1
            upper1++;
        } else {
            //adds lower1
            lower1++;
        }
    }

    for (let a = 0; a < string2.length; a++)
    {
        character = string1.charAt(a);
        if (!isNaN(character * 1)){
            continue;
        }
        if (string2[a].toUpperCase() == string2[a])
        {
            //adds upper1
            upper2++;
        } else {
            //adds lower1
            lower2++;
        }
    }

    //if one of the holders is 0
    if (upper1 === 0 || upper2 === 0 || lower1 === 0 || lower1 === 0)
    {
        return("Password should have both uppercase and lowercase letter.");
    }

    //checks if two passwords match; true if yes, false if not
    if (string1.valueOf() === string2.valueOf())
    {
        return(true);
    } else
    {
        return(false);
    }
}   

function reversePassword (string)
{
    //storer for the reversed string
    var reversedString = "";

    //starts from the last character to the first character in the string
    for (var a = string.length -1; a>=0; a--)
    {
        reversedString += string[a];
    }
    return reversedString;
}


function storePassword(name, string1, string2)
{
    var valid = validatePassword(string1,string2);
    var newPassword;
    //if true, reverse
    //else, get first string
    if (valid === true)
    {
        newPassword =reversePassword(string1);
    }else
    {
        newPassword = string1;
    }
    const person = {Name: String(name), newpassword:String(newPassword)};

    return person;
}

const loginForm = document.getElementById("login-form")
const loginButton = document.getElementById("login-form-submit")

loginButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const name= loginForm.uname.value;
    const string1= loginForm.pw1.value;
    const string2= loginForm.pw2.value;

    var toPrint=storePassword(name, string1, string2);
    alert(toPrint);
})
