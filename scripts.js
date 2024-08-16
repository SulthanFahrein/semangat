const quotes = [
    "“Kamu tidak pernah terlalu tua untuk menetapkan tujuan baru atau untuk memimpikan mimpi baru.”",
    "“Kesuksesan bukanlah akhir, kegagalan bukanlah akhir. Yang penting adalah keberanian untuk melanjutkan.”",
    "“Kamu lebih kuat dari yang kamu pikirkan.”",
    "“Jika kamu ingin meraih sesuatu yang belum pernah kamu capai, kamu harus bersedia melakukan sesuatu yang belum pernah kamu lakukan.”"
];

const pantun = [
    "“Burung terbang tinggi di langit,<br>Hati senang, jiwa cerah, sungguh menyenangkan.”",
    "“Bunga mawar berwarna merah,<br>Senyummu bikin hari cerah.”"
];

const puisi = [
    "“Dalam gelap malam, bintang bersinar,<br>Begitu juga dalam hidup, semangat takkan pudar.”",
    "“Saat badai datang menghadang,<br>Jangan pernah berhenti berjuang.”"
];

function changeQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

function changePoetry() {
    const pantunElement = document.getElementById('pantun');
    const puisiElement = document.getElementById('puisi');
    pantunElement.innerHTML = pantun[Math.floor(Math.random() * pantun.length)];
    puisiElement.innerHTML = puisi[Math.floor(Math.random() * puisi.length)];
}

function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
}
