class Bank{
   constructor(bankName, location, accNumber, ifsc, intrestRate){
        this.bankName = bankName;
        this.location = location;
        this.accNumber = accNumber;
        this.ifsc = ifsc;
        this.intrestRate = intrestRate;
    }
 }
 const axis_bank = new Bank("Axis Bank", "Pune", 5700112233, "AXIS00012", "10%");
 const sbi_bank = new Bank("SBI Bank", "Sangli", 5700111124, "SBIN0005052", "9%");
 const icici_bank = new Bank("ICICI Bank", "Satara", 5700114455, "ICIC000208", "8%");
 const kotak_bank = new Bank("Kotak Bank", "Kolhapur", 5700115566, "KOTA00013", "12%");
 const hdfc_bank = new Bank("HDFC Bank", "Jath", 5700118730, "HDFC00054", "11%");
 const panjab_bank = new Bank("Panjab Bank", "Panjab", 5700117754, "PANB00078", "13%");

 const myArray = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank]
 const obj = myArray[0];
 console.log(obj);
 /*const obj = myArray[1];
 console.log(obj);
 const obj = myArray[2];
 console.log(obj);
 const obj = myArray[3];
 console.log(obj);
 const obj = myArray[4];
 console.log(obj);
 const obj = myArray[5];
 console.log(obj);
*/
