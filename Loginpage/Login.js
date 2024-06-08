
       
       
      
        var form = document.getElementById('form')
        var signup = document.getElementById('signup')

        function validation(){
            var username = document.getElementById("signup").value
            var password = document.getElementById("pass").value
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)
            if(username == "chinna"){
                alert("should fill")
                if(password == "123456"){
                    alert("sucess")
                }
            }
            else{
                prompt("fill")
            }
        }
        



