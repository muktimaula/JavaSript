//if,else,nested if
const umur = 18;
if(umur==15){
    console.log('sudah besar')
} else  {
    console.log('masih kecil')
}

const makan = 'nasi';
if(makan == 'nasi') {
    console.log('tidak lapar');
} else if(makan == 'snack') {
    console.log('belum makan');
} else {
    console.log('sudah minum')
}

let tinggi = 165;

if (tinggi >= 164) {
    console.log("Anda tinggi.");

    if (tinggi >= 160) {
        console.log("Anda paling tinggi.");
    } else if (tinggi >= 143) {
        console.log("Anda cukup tinggi.");
    } else {
        console.log("Anda belum tinggi.");
    }
} else {
    console.log("Anda tidak tinggi.");
}


//switch case
const menu = "NasiGoreng"

switch (menu) {
    case "NasiGoreng":
        console.log("harga Rp.6000")
        break
    case "EsTeh":
        console.log("harga Rp.3000")
        break
    case "udang":
        console.log("harga Rp.8000")
        break
    default:
    console.log("tidak jadi beli")
}

//for statement
for (let mulai = 0; mulai < 10; mulai++){
    console.log("mulai dari-" + mulai);
}

//while, d while 
let nomor = 1;

while (nomor <= 55) {
    console.log(nomor);
    nomor++;
}

let nilai = 1;

do {
    console.log("Nomor: " + nilai);
    nilai++;
} while (nilai <= 5);

//function
function TotalUangKas(a, b) {
    var bayarA;
    var bayarB;
    var total;

    bayarA = a * a * a;
    bayarB = b * b * b;

    total = bayarA + bayarB;
    return total;
}

console.log(TotalUangKas(2000, 5000));
