

var myApp = angular.module("myModule",[])
.controller("myController", function($scope){
    $scope.message = "Learning Angular JS!";
    var employees = [
        {eid:"1", firstName:"Jack", lastName:"Joba", gender:"Male", salary:"50000"},
        {eid:"2", firstName:"Jim", lastName:"Henry", gender:"Female", salary:"40000"},
        {eid:"3", firstName:"Jacky", lastName:"Mash", gender:"Female", salary:"60000"},
        {eid:"4", firstName:"Rahul", lastName:"Pat", gender:"Female", salary:"70000"}
    ];
    $scope.employees = employees;
    $scope.image = "snoopy1.jpg";


    $scope.updateSalary = function(selectedEmployee, newSalary)    
    {
        for(var i=0;i<employees.length;i++)
        {
            if(employees[i].eid==selectedEmployee)
            {
                employees[i].salary=newSalary;
            }
        }
    }

}); 
