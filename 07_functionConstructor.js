console.log(`------------------Assignment 1------------------`);
 class bank{
    BankName
    Branch
    IFSC
    BranchCode
    constructor(BankName,Branch,IFSC,BranchCode){
        this.BankName = BankName;
        this.Branch = Branch;
        this.IFSC = IFSC;
        this.BranchCode = BranchCode;
    }

 }
 let yesBank = new bank("Yes Bank","Pune","YES87667897","1232");
 let SBIBank = new bank("SBI Bank","Mumbai","SBI764563","5414");
 let AXISBank = new bank("AXIS Bank","Sangli","AXIS7421267","5621");
 let Maharashtra = new bank("Maharashtra Bank","Jath","MH32356543543","8762");
 console.log(yesBank);
 console.log(SBIBank);
 console.log(AXISBank);
 console.log(Maharashtra); 
 console.log(`===========opening and closing time of banks===========`);
 bank.prototype.openTime = "9 AM IST";
 bank.prototype.closeTime = "6 PM IST";
 console.log(`The open time if Yes Bank is"${yesBank.openTime}" and close time is "${yesBank.closeTime}"`);
 console.log(`The open time if SBI Bank is"${SBIBank.openTime}" and close time is "${SBIBank.closeTime}"`);
 console.log(`The open time if AXIS Bank is"${AXISBank.openTime}" and close time is "${AXISBank.closeTime}"`);
 console.log(`The open time if Maharahtra Bank is"${Maharashtra.openTime}" and close time is "${Maharashtra.closeTime}"`);