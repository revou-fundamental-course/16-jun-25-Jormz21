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
        hasilLuasSegitiga.textContent = "Hasil : " + luasSegitiga.toFixed(2) + " satuan luas.";
    } else {
        hasilLuasSegitiga.textContent = "Masukkan nilai alas dan tinggi yang valid.";
    }
})

// Kalkulator keliling segitiga
document.getElementById('hitungKelilingSegitiga').addEventListener('click', function() {
    const sisi1 = Number(document.getElementById('sisi1').value);
    const sisi2 = Number(document.getElementById('sisi2').value);
    const sisi3 = Number(document.getElementById('sisi3').value);
    const hasilKelilingSegitiga = document.getElementById('hasilKelilingSegitiga');
    if (sisi1 > 0 && sisi2 > 0 && sisi3 > 0) {
        const kelilingSegitiga = sisi1 + sisi2 + sisi3;
        hasilKelilingSegitiga.textContent = "Hasil : " + kelilingSegitiga.toFixed(2) + " satuan.";
    } else {
        hasilKelilingSegitiga.textContent = "Masukkan nilai setiap sisi yang valid.";
    }
})

// Kalkulator luas lingkaran
document.getElementById('hitungLuasLingkaran').addEventListener('click', function() {
    const jarijari = Number(document.getElementById('jarijari').value);
    const hasilLuasLingkaran = document.getElementById('hasilLuasLingkaran');
    if (jarijari > 0) {
        const luasLingkaran = 3.14 * jarijari * jarijari;
        hasilLuasLingkaran.textContent = "Hasil : " + luasLingkaran.toFixed(2) + " satuan.";
    } else {
        hasilLuasLingkaran.textContent = "Masukkan nilai jari-jari yang valid.";
    }
})

// Kalkulator keliling lingkaran
document.getElementById('hitungKelilingLingkaran').addEventListener('click', function() {
    const diameter = Number(document.getElementById('diameter').value);
    const hasilKelilingLingkaran = document.getElementById('hasilKelilingLingkaran');
    if (diameter > 0) {
        const kelilingLingkaran = 3.14 * diameter;
        hasilKelilingLingkaran.textContent = "Hasil : " + kelilingLingkaran.toFixed(2) + " satuan.";
    } else {
        hasilKelilingLingkaran.textContent = "Masukkan nilai diameter yang valid.";
    }
})

// Kalkulator luas persegi
document.getElementById('hitungLuasPersegi').addEventListener('click', function() {
    const sisiluas = Number(document.getElementById('sisiLuasPersegi').value);
    const hasilLuasPersegi = document.getElementById('hasilLuasPersegi');
    if (sisiluas > 0) {
        const luasPersegi = sisiluas * sisiluas;
        hasilLuasPersegi.textContent = "Hasil : " + luasPersegi.toFixed(2) + " satuan.";
    } else {
        hasilLuasPersegi.textContent = "Masukkan nilai sisi persegi yang valid.";
    }
})

// Kalkulator keliling persegi
document.getElementById('hitungKelilingPersegi').addEventListener('click', function() {
    const sisikeliling = Number(document.getElementById('sisiKelilingPersegi').value);
    const hasilKelilingPersegi = document.getElementById('hasilKelilingPersegi');
    if (sisikeliling > 0) {
        const kelilingPersegi = 4 * sisikeliling;
        hasilKelilingPersegi.textContent = "Hasil : " + kelilingPersegi.toFixed(2) + " satuan.";
    } else {
        hasilKelilingPersegi.textContent = "Masukkan nilai sisi persegi yang valid.";
    }
})