function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  var hitung = 0;
  var objek = {};
  var ar = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    objek = {};
    hitung = rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]);
    hitung = hitung * 2000;
    objek.penumpang = arrPenumpang[i][0];
    objek.naikDari = arrPenumpang[i][1];
    objek.Tujuan = arrPenumpang[i][2];

    objek.bayar = hitung;

    ar.push(objek);

  }

  return ar;

}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]