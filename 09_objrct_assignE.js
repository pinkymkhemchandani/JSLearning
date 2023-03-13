let sbiBank = {
    bankName : "SBI" ,
    locatioin:"junagah",
    accountNo:3210**910,
    IFSC:'SBIN0000541',
    interestRate:8.00,
    show:function (){
        console.log(`Bank Name: ${this.bankName} ,locatioin :${this.locatioin},AccountNo :${this.accountNo},IFSC:${this.IFSC},interestRate ${this.interestRate}`);
        
    }

}

let axisBank ={
    bankName:'AXIS',
    locatioin:'veraval',
    accountNo:5410**910,
    IFSC:'UTIB0000541',
    interestRate:9.50,
    show:function (){
        console.log(`Bank Name: ${this.bankName} ,locatioin :${this.locatioin},AccountNo :${this.accountNo},IFSC:${this.IFSC},interestRate ${this.interestRate}`);
        
    }
}

let hdfcBank ={
    bankName:'HDFC',
    locatioin:'ahmedabad',
    accountNo:9190**955,
    IFSC:'HDFC00004196',
    interestRate:10.00,
    show:function () {
        console.log(`Bank Name: ${this.bankName} ,locatioin :${this.locatioin},AccountNo :${this.accountNo},IFSC:${this.IFSC},interestRate ${this.interestRate}`);
        
    }
        
     }
        
        
    


let yesBank ={
    bankName:'YES',
    locatioin:'surat',
    accountNo:90799**910,
    IFSC:'YES0000541',
    interestRate:11.00,
    show:function () {
        console.log(`Bank Name: ${this.bankName} ,locatioin :${this.locatioin},AccountNo :${this.accountNo},IFSC:${this.IFSC},interestRate ${this.interestRate}`);
        
    }
}

sbiBank.show();
axisBank.show();
hdfcBank.show();
yesBank.show();

// showDetails(){
//     console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
// }