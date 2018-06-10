

app.controller('MyCtrl', ['$scope', '$timeout', '$interval', 'computeLeapYear', 'calculateslot', function ($scope, $timeout, $interval, computeLeapYear, calculateslot) {
    $scope.newArray = [];

    $scope.r_index = 1;
    $scope.l_index = 0;
    $scope.showCricle = 1;

    $scope.newWidth = $(window).width();
    $scope.number = calculateslot.myFunc($scope.newWidth);

    window.addEventListener("resize", function (event) {
        $scope.newWidth = document.body.clientWidth;

        $scope.number = calculateslot.myFunc($scope.newWidth);
        $scope.changeDate($scope.date);

    })


    $scope.names = [
        { "month": "January", "days": "31" },
        { "month": "February", "days": "28" },
        { "month": "March", "days": "31" },
        { "month": "April", "days": "30" },
        { "month": "May", "days": "31" },
        { "month": "June", "days": "30" },
        { "month": "July", "days": "31" },
        { "month": "August", "days": "31" },
        { "month": "September", "days": "30" },
        { "month": "October", "days": "31" },
        { "month": "November", "days": "30" },
        { "month": "December", "days": "31" }];



    $scope.changeDate = function (data) {
        $scope.newArray = [];

        $scope.r_index = 1;
        $scope.l_index = 0;
       
        $scope.arrayDays = [];

        $scope.selectedDate = data;

        var Day_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var fulldate = new Date($scope.selectedDate)
        var newMonth = fulldate.getMonth();
        var year = fulldate.getFullYear();

        if (newMonth == 1) {
            $scope.names[1].days = computeLeapYear.myFunc(year) == 1 ? 29 : 28;
        }
        else {
            $scope.names[1].days = computeLeapYear.myFunc(year) == 1 ? 29 : 28;
        }


        var month = newMonth;
        var date = fulldate.getDate();
        var day = fulldate.getDay();

        $scope.Days_in_Month = $scope.names[month].days;
        $scope.selected_month = $scope.names[month].month;


        for (var i = date; i <= $scope.Days_in_Month; i++) {

            if (day > 6) {
                day = 0;
            }
            var obj = {};
            obj.date = i;
            obj.active = 0;
            obj.month = $scope.selected_month;
            obj.day = Day_name[day]
            day++;
            $scope.arrayDays.push(obj);
        }
        $scope.newArray = $scope.arrayDays.slice(($scope.number * $scope.l_index), ($scope.number * $scope.r_index));
        $scope.$digest();
    }


    $scope.rightSelect = function () {
        if ($scope.arrayDays.length >= 1) {
            $scope.l_index = $scope.l_index + 1;
            $scope.r_index = $scope.r_index + 1;
            $scope.newArray = $scope.arrayDays.slice(($scope.number * $scope.l_index), ($scope.number * $scope.r_index));
        }
    }

    $scope.leftSelect = function () {
        $scope.l_index = $scope.l_index - 1;
        $scope.r_index = $scope.r_index - 1;
        $scope.newArray = $scope.arrayDays.slice(($scope.number * $scope.l_index), ($scope.number * $scope.r_index));
    }

    $scope.open = function (index) {
        if (typeof $scope.emptyIndex != 'undefined')
            $scope.arrayDays[$scope.emptyIndex].active = 0;
        $scope.arrayDays[index].active = 1;
        $scope.emptyIndex = index;
    }

    // $scope.screenshot = function () {
    //     $timeout(function () {
    //         $('#myModal').modal({
    //             backdrop: 'static',
    //             keyboard: false
    //         })
    //     }, 500);
    //     html2canvas(document.body).then(function (canvas) {
    //         $timeout(function () {
    //             document.getElementById('screenshot1').appendChild(canvas);
    //         }, 500);
    //     });
    // }


    $scope.export = function(data){
       
        if(data == 1)
        {
            $scope.showCricle = 1;
            html2canvas(document.getElementById('exportthis'), {
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    var docDefinition = {
                        content: [{
                            image: data,
                            width: 500,
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download("test.pdf");
                }
            });
        }
        else
        {
            $scope.showCricle = 0;
        }
        
        
    }

}])