//Zadatak 1.
var screen = document.getElementById("screen");
        
        screen.addEventListener("keypress", function(event){
            if(event.keyCode == 13){
                calculate(event);   
            }
        });

        function display(num){
            screen.value += num;
        }

        function calculate(event){
            try{
                screen.value = eval(screen.value);
            }
            catch(err){
                alert("Invalid");
            }  
        }

        function Clear(){
            screen.value = "";
        }

        function del(){
            screen.value = screen.value.slice(0,-1);
        }



//Zadatak 3.

var uId = 0;

    angular.module('myApp',[])
           .controller('UserController', ['$scope',UserController]);

    function UserController($scope)
    {
        $scope.newUser = null;
        $scope.users = [];

        $scope.saveUser = function(){
            if($scope.newUser.id ==null){
                uId = uId+1;
                $scope.newUser.id = uId;
                $scope.users.push($scope.newUser);
            }
            else{
                for(var i in $scope.users){
                    if($scope.users[i].id ==$scope.newUser.id){
                        $scope.users[i] =$scope.newUser;
                    }
                }
            }
            $scope.newUser = null;
        }
        

        $scope.edit = function(id){
            for(var i in $scope.users){
                if($scope.users[i].id == id){
                    $scope.newUser = angular.copy($scope.users[i]);
                    modal.style.display = "block";
                }
            }
        }
        $scope.delete = function(id){
            for(var i in $scope.users){
                if($scope.users[i].id == id){
                    $scope.users.splice(i,1);
                    $scope.newUser = {};
                }
            }
        }
    
    }

var modal = document.getElementById("myModal");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

btn1.onclick = function() {
  modal.style.display = "none";
}

btn3.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}