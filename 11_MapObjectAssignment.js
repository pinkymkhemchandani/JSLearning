class Bank {
    constructor(bank_name ,location ,account_no , ifsc ,interest_rate){
    this.bank_name = bank_name;
    this.location=location;
    this.account_no=account_no;
    this.ifsc= ifsc;
    this.interest_rate=interest_rate;
    }
    }
    
    const axisBank= new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
    const sbiBank= new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75);
    const iciciBank = new Bank("ICICI bANK","Tower Chok , veraval","28930202","ICIC000763",11.00);
    const kotakBank = new Bank("Kotak BAnk", "Sadguru Arcade",'0957389202',`KOATK00927`,12.00);
    const hdfcBank = new Bank("HDFC Bank", "Surat", "62514897564", "HDFC0004598", 9.75);
    const punjabBank = new Bank("Punjab Bank","Somnath colony",'099000245',"PUNJAB994",8.00);

    const mapOfBank =new Map
    mapOfBank.set(`account_no-4597863258" : ${axisBank.bank_name} , ${axisBank.account_no} ,${axisBank.account_no}`);
    mapOfBank.set(`account_no-62514897564":${sbiBank.bank_name} , ${sbiBank.account_no} ,${sbiBank.account_no}`);
    mapOfBank.set(`account_no-28930202":${iciciBank.bank_name} , ${iciciBank.account_no} ,${iciciBank.account_no}`);
    mapOfBank.set(`account_no-0957389202":${kotakBank.bank_name} , ${kotakBank.account_no} ,${kotakBank.account_no}`);
    mapOfBank.set(`account_no-62514897564":${hdfcBank.bank_name} , ${hdfcBank.account_no} ,${hdfcBank.account_no}`);
    mapOfBank.set(`account_no-099000245":${punjabBank.bank_name} , ${punjabBank.account_no} ,${punjabBank.account_no}`);
  
    const keyOfMap=mapOfBank.keys();
    for (const key of keyOfMap) {
        const element  = mapOfBank.get(key);
        console.log(key , element);
        
    }