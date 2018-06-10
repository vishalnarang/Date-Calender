 

app.service('computeLeapYear', function () {
    this.myFunc = function (year) {
        if (year % 4 == 0) {
            return 1
        }
        else {
            return 0;
        }
    }
})

app.service('calculateslot', function(){
    this.myFunc = function (number) {
    if (number > 1000) {
        return 8;
    }
    else if (number < 500) {
        return 2;
    }
    else {
        return 4;
    }
}

})