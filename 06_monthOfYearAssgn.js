function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`The ${monthNumber}st month is January`);
             break;

        case 2:
            console.log(`The ${monthNumber}nd month is february`);
            break;

        case 3:
            console.log(`The ${monthNumber}rd month is March`);
            break;

            case 4:
                console.log(`The ${monthNumber}th month is April`);
                 break;

                 case 5:
                    console.log(`The ${monthNumber}th month is May`);
                     break;

                     case 6:
                        console.log(`The ${monthNumber}th month is June`);
                         break;

                         case 7:
                            console.log(`The ${monthNumber}th month is July`);
                             break;

                             case 8:
                                console.log(`The ${monthNumber}th month is August`);
                                 break;


                                 case 9:
                                    console.log(`The ${monthNumber}th month is september`);
                                     break;

                                     case 10:
                                        console.log(`The ${monthNumber}th month is October`);
                                         break;
    
                                         case 11:
                                            console.log(`The ${monthNumber}th month is November`);
                                             break;

                                             case 12:
                                                console.log(`The ${monthNumber}th month is December`);
                                                 break;
        default:
            console.log(`Invalid Month ${monthNumber}`);
            break;
    }
    
    
}

monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

