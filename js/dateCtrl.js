var app = angular.module('MyApp',['720kb.datepicker'])          

app.controller('MyCtrl',['$scope','$timeout',function($scope,$timeout)
{
    $scope.names = [
     {"month": "Jan","days": "31"},
     {"month": "Feb","days": "28"},
     {"month": "Mar","days": "31"},
     {"month": "Apr","days": "30"},
     {"month": "May","days": "31"},
     {"month": "Jun","days": "30"},
     {"month": "Jul","days": "31"},
     {"month": "Aug","days": "31"},
     {"month": "Sep","days": "30"},
     {"month": "Oct","days": "31"},
     {"month": "Nov","days": "30"},
     {"month": "Dec","days": "31"}];

     

    $scope.changeDate = function(data)
    {

        $scope.arrayDays=[];

        $scope.selectedDate = data;              

        var Day_name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var fulldate = new Date($scope.selectedDate)
        var month = fulldate.toDateString().substring(4,7);
        var date = fulldate.getDate()-1;
        console.log(date)
        var day= fulldate.getDay();
        var year = fulldate.getFullYear();

        for(var i=0;i<$scope.names.length;i++)
        {
            if($scope.names[i].month == month)
            {
                $scope.Days_in_Month = $scope.names[i].days;
                $scope.selected_month = $scope.names[i].month;
            }
        }



        for(var i=date;i<$scope.Days_in_Month;i++)
        {
        
            if(day>6)
            {
                day = 0;
            }
            var obj={};
            obj.date =i+1;
            obj.active = 0;
            obj.month = $scope.selected_month;
            obj.day=Day_name[day]
            day++;
            $scope.arrayDays.push(obj);
        }
        console.log($scope.arrayDays)
        
    }

    $scope.open = function(index)
    {
        if(typeof $scope.emptyIndex != 'undefined')
            $scope.arrayDays[$scope.emptyIndex].active = 0;
        $scope.arrayDays[index].active = 1;
        $scope.emptyIndex = index;
    }

}])