//iseng tambahin animasi ketik
const words = ["Segitiga", "Lingkaran", "Persegi"]; //stok kata2 yang akan dianimasikan
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type(){
    const currentWord = words[currentWordIndex];
    if(isDeleting){
        typedText.textContent = currentWord.substring(0, currentCharIndex --); //kalau deleting, kurangi huruf
    } else {
        typedText.textContent = currentWord.substring(0, currentCharIndex ++); //kalau tidak deleting, tambahkan huruf
    }

    if (!isDeleting && currentCharIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 2000); // delay sebelum mulai menghapus
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length; //pindah ke kata berikutnya
        setTimeout(type, 100); // delay sebelum mulai mengetik kata berikutnya
    } else {
        setTimeout(type, 100);
    }
}
type();

// Kalkulator luas segitiga
document.getElementById('hitungLuasSegitiga').addEventListener('click', function() {
    const alas = Number(document.getElementById('alas').value);
    const tinggi = Number(document.getElementById('tinggi').value);
    const hasilLuasSegitiga = document.getElementById('hasilLuasSegitiga');
    if (alas > 0 && tinggi > 0) {
        const luasSegitiga = (alas * tinggi) / 2;
        hasilLuasSegitiga.textContent = "Hasil : " + luasSegitiga.toFixed(2) + " satuan.";
        pembahasanLuasSegitiga.textContent = 
        "Pembahasan:\n" +
        "L = 1/2 * a * t\n" +
        "L = 1/2 * " + alas + " * " + tinggi + "\n" +
        "L = " + luasSegitiga.toFixed(2) + " satuan.";
    } else {
        hasilLuasSegitiga.textContent = "Masukkan nilai alas dan tinggi yang valid!";
    }
})
// hapus pembahasan jika input kosong
const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const pembahasanLuasSegitiga = document.getElementById('pembahasanLuasSegitiga');

function clearPembahasanLuasSegitigaIfEmpty() {
    if (!alasInput.value || !tinggiInput.value) {
        pembahasanLuasSegitiga.textContent = "";
        document.getElementById('hasilLuasSegitiga').textContent = "";
    }
}
alasInput.addEventListener('input', clearPembahasanLuasSegitigaIfEmpty);
tinggiInput.addEventListener('input', clearPembahasanLuasSegitigaIfEmpty);

// Kalkulator keliling segitiga
document.getElementById('hitungKelilingSegitiga').addEventListener('click', function() {
    const sisi1 = Number(document.getElementById('sisi1').value);
    const sisi2 = Number(document.getElementById('sisi2').value);
    const sisi3 = Number(document.getElementById('sisi3').value);
    const hasilKelilingSegitiga = document.getElementById('hasilKelilingSegitiga');
    if (sisi1 > 0 && sisi2 > 0 && sisi3 > 0) {
        const kelilingSegitiga = sisi1 + sisi2 + sisi3;
        hasilKelilingSegitiga.textContent = "Hasil : " + kelilingSegitiga.toFixed(2) + " satuan.";
        pembahasanKelilingSegitiga.textContent = 
        "Pembahasan:\n" +
        "K = s1 + s2 + s3\n" +
        "K = " + sisi1 + " + " + sisi2 + " + " + sisi3 + "\n" +
        "K = " + kelilingSegitiga.toFixed(2) + " satuan.";
    } else {
        hasilKelilingSegitiga.textContent = "Masukkan nilai setiap sisi yang valid!";
    }
})
const sisi1Input = document.getElementById('sisi1');
const sisi2Input = document.getElementById('sisi2');
const sisi3Input = document.getElementById('sisi3');
const pembahasanKelilingSegitiga = document.getElementById('pembahasanKelilingSegitiga');

function clearPembahasanKelilingSegitigaIfEmpty() {
    if (!sisi1Input.value || !sisi2Input.value || !sisi3Input.value) {
        pembahasanKelilingSegitiga.textContent = "";
        document.getElementById('hasilKelilingSegitiga').textContent = "";
    }
}
sisi1Input.addEventListener('input', clearPembahasanKelilingSegitigaIfEmpty);
sisi2Input.addEventListener('input', clearPembahasanKelilingSegitigaIfEmpty);
sisi3Input.addEventListener('input', clearPembahasanKelilingSegitigaIfEmpty);

// Kalkulator luas lingkaran
document.getElementById('hitungLuasLingkaran').addEventListener('click', function() {
    const jarijari = Number(document.getElementById('jarijari').value);
    const hasilLuasLingkaran = document.getElementById('hasilLuasLingkaran');
    if (jarijari > 0) {
        const luasLingkaran = 3.14 * jarijari * jarijari;
        hasilLuasLingkaran.textContent = "Hasil : " + luasLingkaran.toFixed(2) + " satuan.";
        pembahasanLuasLingkaran.textContent = 
        "Pembahasan:\n" +
        "L = π * r²\n" +
        "L = 3.14 * " + jarijari + "²\n" +
        "L = " + luasLingkaran.toFixed(2) + " satuan.";
    } else {
        hasilLuasLingkaran.textContent = "Masukkan nilai jari-jari yang valid!";
    }
})
const jarijariInput = document.getElementById('jarijari');
const pembahasanLuasLingkaran = document.getElementById('pembahasanLuasLingkaran');

function clearPembahasanLuasLingkaranIfEmpty() {
    if (!jarijariInput.value) {
        pembahasanLuasLingkaran.textContent = "";
        document.getElementById('hasilLuasLingkaran').textContent = "";
    }
}
jarijariInput.addEventListener('input', clearPembahasanLuasLingkaranIfEmpty);

// Kalkulator keliling lingkaran
document.getElementById('hitungKelilingLingkaran').addEventListener('click', function() {
    const diameter = Number(document.getElementById('diameter').value);
    const hasilKelilingLingkaran = document.getElementById('hasilKelilingLingkaran');
    if (diameter > 0) {
        const kelilingLingkaran = 3.14 * diameter;
        hasilKelilingLingkaran.textContent = "Hasil : " + kelilingLingkaran.toFixed(2) + " satuan.";
        pembahasanKelilingLingkaran.textContent = 
        "Pembahasan:\n" +
        "K = π * d\n" +
        "K = 3.14 * " + diameter + "\n" +
        "K = " + kelilingLingkaran.toFixed(2) + " satuan.";
    } else {
        hasilKelilingLingkaran.textContent = "Masukkan nilai diameter yang valid!";
    }
})
const diameterInput = document.getElementById('diameter');
const pembahasanKelilingLingkaran = document.getElementById('pembahasanKelilingLingkaran');

function clearPembahasanKelilingLingkaranIfEmpty() {
    if (!diameterInput.value) {
        pembahasanKelilingLingkaran.textContent = "";
        document.getElementById('hasilKelilingLingkaran').textContent = "";
    }
}
diameterInput.addEventListener('input', clearPembahasanKelilingLingkaranIfEmpty);

// Kalkulator luas persegi
document.getElementById('hitungLuasPersegi').addEventListener('click', function() {
    const sisiluas = Number(document.getElementById('sisiLuasPersegi').value);
    const hasilLuasPersegi = document.getElementById('hasilLuasPersegi');
    if (sisiluas > 0) {
        const luasPersegi = sisiluas * sisiluas;
        hasilLuasPersegi.textContent = "Hasil : " + luasPersegi.toFixed(2) + " satuan.";
        pembahasanLuasPersegi.textContent = 
        "Pembahasan:\n" +
        "L = s²\n" +
        "L = " + sisiluas + "²\n" +
        "L = " + luasPersegi.toFixed(2) + " satuan.";
    } else {
        hasilLuasPersegi.textContent = "Masukkan nilai sisi persegi yang valid!";
    }
})
const sisiluasInput = document.getElementById('sisiLuasPersegi');
const pembahasanLuasPersegi = document.getElementById('pembahasanLuasPersegi');

function clearPembahasanLuasPersegiIfEmpty() {
    if (!sisiluasInput.value) {
        pembahasanLuasPersegi.textContent = "";
        document.getElementById('hasilLuasPersegi').textContent = "";
    }
}
sisiluasInput.addEventListener('input', clearPembahasanLuasPersegiIfEmpty);

// Kalkulator keliling persegi
document.getElementById('hitungKelilingPersegi').addEventListener('click', function() {
    const sisikeliling = Number(document.getElementById('sisiKelilingPersegi').value);
    const hasilKelilingPersegi = document.getElementById('hasilKelilingPersegi');
    if (sisikeliling > 0) {
        const kelilingPersegi = 4 * sisikeliling;
        hasilKelilingPersegi.textContent = "Hasil : " + kelilingPersegi.toFixed(2) + " satuan.";
        pembahasanKelilingPersegi.textContent =
        "Pembahasan:\n" +
        "K = 4 * s\n" +
        "K = 4 * " + sisikeliling + "\n" +
        "K = " + kelilingPersegi.toFixed(2) + " satuan.";
    } else {
        hasilKelilingPersegi.textContent = "Masukkan nilai sisi persegi yang valid!";
    }
})
const sisiKelilingInput = document.getElementById('sisiKelilingPersegi');
const pembahasanKelilingPersegi = document.getElementById('pembahasanKelilingPersegi');

function clearPembahasanKelilingPersegiIfEmpty() {
    if (!sisiKelilingInput.value) {
        pembahasanKelilingPersegi.textContent = "";
        document.getElementById('hasilKelilingPersegi').textContent = "";
    }
}
sisiKelilingInput.addEventListener('input', clearPembahasanKelilingPersegiIfEmpty);