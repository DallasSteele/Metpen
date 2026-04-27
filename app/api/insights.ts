import type { Insight } from '~/components/shared/types'

export default defineEventHandler((): Insight[] => {
  return [
    {
      id: 1,
      slug: 'choose-the-right-service',
      title: 'Cara memilih layanan yang tepat untuk ruang Anda',
      category: 'Panduan',
      readTime: '5 menit baca',
      description: 'Artikel onboarding yang lebih bersih untuk pengguna pertama yang membutuhkan kejelasan sebelum memesan.',
      image: '/images/hero/tidy-hero-1.jpg',
      body: [
        'Tidak semua layanan harus terasa sama. Perawatan rutin, pembersihan mendalam, dan layanan khusus memiliki ekspektasi yang berbeda.',
        'Produk yang baik menjelaskan di mana setiap layanan cocok, alih-alih memaksa pengguna untuk menebak.',
        'Inilah alasan mengapa kejelasan kategori penting dalam antarmuka.'
      ]
    },
    {
      id: 2,
      slug: 'what-makes-booking-trustworthy',
      title: 'Apa yang membuat pengalaman pemesanan premium terasa dapat dipercaya',
      category: 'Insight',
      readTime: '4 menit baca',
      description: 'Konten bergaya editorial yang membuat produk terasa lebih matang dan penuh pertimbangan.',
      image: '/images/hero/tidy-hero-2.jpg',
      body: [
        'Kepercayaan sering dibangun melalui kejelasan, bukan jumlah.',
        'Pengguna merasa lebih aman ketika harga, durasi, dan proses terlihat sejak awal.',
        'Antarmuka premium seharusnya mengurangi keraguan, bukan sekadar menambah tampilan visual.'
      ]
    },
    {
      id: 3,
      slug: 'why-detail-pages-matter',
      title: 'Mengapa halaman detail layanan lebih penting daripada daftar fitur',
      category: 'Desain',
      readTime: '6 menit baca',
      description: 'Konten yang membantu aplikasi terasa lebih seperti sebuah brand dan bukan sekadar mockup.',
      image: '/images/hero/tidy-hero-3.jpg',
      body: [
        'Daftar layanan yang datar jarang cukup untuk mendukung keputusan yang percaya diri.',
        'Halaman detail memberi ruang untuk storytelling, penjelasan proses, dan sinyal kepercayaan.',
        'Kedalaman inilah yang membuat tampilan produk terasa lebih meyakinkan.'
      ]
    },
    {
      id: 4,
      slug: 'designing-for-repeat-bookings',
      title: 'Merancang untuk pemesanan berulang tanpa membuat UI terasa berat',
      category: 'Produk',
      readTime: '5 menit baca',
      description: 'Tinjauan praktis tentang bagaimana pengalaman layanan berulang seharusnya terasa lebih cepat dari waktu ke waktu.',
      image: '/images/hero/tidy-hero-1.jpg',
      body: [
        'Pengguna yang kembali seharusnya tidak merasa seperti memulai dari nol setiap kali.',
        'Alamat tersimpan, catatan berulang, dan konfirmasi yang lebih cepat semuanya mengurangi hambatan.',
        'Alur berulang terbaik terasa seperti tidak terlihat.'
      ]
    }
  ]
})