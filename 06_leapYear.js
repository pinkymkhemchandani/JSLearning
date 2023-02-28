var check_leap_year = function (leap_year) {
    if ((typeof leap_year != "number") || isNaN(leap_year) || leap_year == undefined || leap_year == null) {
        var result = `${leap_year} is invalid data`
        
    }

    else if (leap_year%4 == 0) {
        var result = `${leap_year} is Leap year`
        
    }

    else {
        var result = `${leap_year} is not a Leap year`
    }

    console.log(result);

    }

    check_leap_year(2020);
    check_leap_year(1999);
    check_leap_year(1600);
    check_leap_year(2022);
    check_leap_year(1945);
    check_leap_year(null);
    check_leap_year("Twenty Twenty");
    check_leap_year(undefined);
    check_leap_year(NaN);
    check_leap_year(1750);
    
