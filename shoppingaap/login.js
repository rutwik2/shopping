const users=[
    {
        name:'jhon',
        password:'1234'
    },
    {
        name:'jane',
        password:'12345'
    },
    {
        name:'james',
        password:'123456'
    },
    {
        name:'rutwik',
        password:'1234567'
    }
]
function login(){
    const un=document.forms["myform"]["Uname"].value;
    const pw=document.forms['myform']["password"].value;
    for(let i=0;i<users.length;i++){
        if(users[i].name === un && users[i].password === pw){
            window.location.href='index.html'
            return
            
        }
    }
    alert("Invalid username and passwaord")
    
   
}