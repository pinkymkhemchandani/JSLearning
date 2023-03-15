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

const setOfBanks = new Set();
setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(punjabBank);

for (const bank of setOfBanks) {
    console.log(`Bank Names : ${bank.bank_name} , loaction : ${bank.location}`);
}