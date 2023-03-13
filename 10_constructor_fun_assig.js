function Bank(bankName , location , ifscCode ,branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function () {
        console.log(`Bank Details: ${bankName} ${location} ${ifscCode} ${branchCode}`);
        
    }

    
}

console.log(`************************`);

const yesbank = new Bank("yesbank", "ranchi", "YES00076", 874 )
yesbank.show();

const sbiBank = new Bank("sbibank", "mumbai", "SBIN00034", 1374)
sbiBank.show();

const mahBank = new Bank("maharashtrabank", "vadodara", "MAH05392", 662 )
mahBank.show();

const axisbank = new Bank("axisbank", "goa", "UTIB000453", 453 )
axisbank.show();

console.log(`************************`);


Bank.prototype.opentime = "9 AM IST"
Bank.prototype.closetime = "6 PM IST"

console.log(`The Open time of SBI Bank is: ${sbiBank.opentime} and Closetime is:${sbiBank.closetime}`);
console.log(`The Name of Bank is:${axisbank.bankName} and Close time is:${axisbank.closetime}`);
console.log(`The Bank Name is:${yesbank.bankName} , BranchCode is:${yesbank.branchCode} And Open time is:${yesbank.opentime}`);