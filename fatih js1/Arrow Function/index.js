let mahasiswa = ['fatih sagara', 'moch ramadhani f', 'mohamad romli haryono'];
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlhHuruf: nama.length}))
console.table(jumlahHuruf);