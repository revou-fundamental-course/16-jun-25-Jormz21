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
        const luas = (alas * tinggi) / 2;
        hasilLuasSegitiga.textContent = "Luas segitiga dengan alas " + alas + " dan tinggi " + tinggi + " adalah " + luas + " satuan luas.";
    } else {
        hasilLuasSegitiga.textContent = "Masukkan nilai alas dan tinggi yang valid.";
    }
})