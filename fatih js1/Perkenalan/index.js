function perkenalan (firstname,lastname,kelas,jurusan,age){
    function salam(){
        console.log("Hai Nama Aku" +" "+ firstname+" "+ lastname);
        console.log("Aku Kelas" + " " + kelas);
        console.log("Jurusan Ku" + " " + jurusan);
        console.log("Umurku" + " " + age);
    }

    return salam();
}

perkenalan("M Fatih","sagara","XI RPL 2","Rekayasa Perangkat Lunak","17");