let portpolio = [
    {
        image: 'assets/images/porto-1.png',
        title: 'EIS (EXECUTIVE INFORMATION SYSTEM)',
        desc: 'Merupakan sebuah sistem untuk menarik data sales dan me-resume hasil sales, EIS ini bersifat private tidak untuk dipublish',
        link: 'https://github.com/WahyuHidayattz?tab=repositories'
    },
    {
        image: 'assets/images/porto-2.png',
        title: 'CRYPTOGRAPHY TOOLS (SUBSTITUSI)',
        desc: 'Merupakan sebuah tools yang dibuat dengan PHP untuk enkripsi dan dekripsi text dengan metode substitusi.',
        link: 'https://github.com/WahyuHidayattz/cryptography-generator'
    },
    {
        image: 'assets/images/porto-3.png',
        title: 'WAHYU BOOKS',
        desc: 'Merupakan website untuk menyelesaikan tugas di dicoding, fitur dari wahyu book adalah membuat buku, menandai sudah dibaca dan menghapus buku.',
        link: 'https://github.com/WahyuHidayattz/wahyu-book'
    },
    {
        image: 'assets/images/porto-4.png',
        title: 'CSV / FORM KONVERTER',
        desc: 'Merupakan tools untuk mengkonversi response dari Google Form agar dapat menampilkan gambar di dalam table.',
        link: 'https://github.com/WahyuHidayattz/csv-konverter'
    },
    {
        image: 'assets/images/porto-5.png',
        title: 'NGIMEL (ANDROID APP)',
        desc: 'Merupakan aplikasi android untuk email-templating pencari kerja. dibuat dengan android studio dan bahasa pemerograman java.',
        link: 'https://github.com/WahyuHidayattz/ngimel'
    },
    {
        image: 'assets/images/porto-6.png',
        title: 'BENUX (ANDROID APP)',
        desc: 'Merupakan aplikaksi guidebook belajar linux. Materi benux adalah materi SMK di jurusan Teknik komputer jaringan.',
        link: 'https://play.google.com/store/apps/details?id=com.wahyuapps.benux&hl=en_GB&gl=US'
    },
]


// up button hide show
let upButton = document.getElementById('button-up');
let navbar = document.getElementById('navbar');
let scrollDown = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        upButton.style.display = "flex";
      } else {
        upButton.style.display = "none";
      }
}
document.onscroll = scrollDown;

// content portpolio
let portoContainer = document.getElementById('porto-container');
portpolio.map(porto => {
    portoContainer.innerHTML += `
            <div class="flex flex-col gap-4 col-span-1">
                <a href="${porto.link}" target="_blank" class="flex hover:-translate-y-2 transition duration-200">
                    <img src="${porto.image}" alt="Portpolio" class="aspect-video w-full bg-white dark:shadow-none overflow-hidden rounded-lg shadow-xl shadow-violet-500/10 object-cover object-center">
                </a>
                <div class="flex flex-col gap-2">
                    <a href="${porto.link}" target="_blank" class="font-semibold text-slate-800 text-xl hover:text-violet-600 dark:text-white">${porto.title}</a>
                    <span>${porto.desc}</span>
                </div>
            </div>
    `;
})

// hamburger
let buttonNav = document.getElementById('button-navigation');
let navList = document.getElementById('nav-list');
let ham = document.querySelectorAll('.ham');
buttonNav.addEventListener('click', () => {
    navList.classList.toggle('hidden');
})

window.addEventListener('click', (e) => {
    if(e.target != navList && e.target != buttonNav && e.target != ham[0] && e.target != ham[1]){
        navList.classList.add('hidden');
    }
})

// switching theme
localStorage.getItem('theme') == 'dark' ? document.documentElement.classList.add('dark') :  document.documentElement.classList.remove('dark');
let buttonTheme1 = document.getElementById('button-theme1');
let buttonTheme2 = document.getElementById('button-theme2');
buttonTheme1.addEventListener('click', () => {
    localStorage.getItem('theme') == 'dark' ? localStorage.setItem('theme', 'light') :  localStorage.setItem('theme', 'dark');
    switchTheme();
})
buttonTheme2.addEventListener('click', () => {
    localStorage.getItem('theme') == 'dark' ? localStorage.setItem('theme', 'light') :  localStorage.setItem('theme', 'dark');
    switchTheme();
})
let switchTheme = () => {
    localStorage.getItem('theme') == 'dark' ? document.documentElement.classList.add('dark') :  document.documentElement.classList.remove('dark');
}