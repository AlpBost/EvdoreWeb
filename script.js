// Ürün verileri
const products = [
    {
        id: 'jam-1',
        name: 'Doğal Vişne Reçeli (660gr.)',
        price: '350.00',
        image: 'images/visnereceli.png',
        detailedDescription: "Vişne reçelimiz, mevsiminde temin edilen taze vişnelerle yapılmaktadır. Sizlerin damak zevkine uygun olarak, nesilden nesile aktarılan geleneksel bir tarif ile üretilmektedir. Her kavanoz %65-70 oranında meyve içermektedir. Doğal lezzetlerinin ortaya çıkması için ekstra meyve oranının yanında, minimum miktarda pancar şekeri kullanılmaktadır. Ürünlerimizde, katkı maddesi, koruyucu madde, glikoz şurubu KULLANILMAMAKTADIR.Reçelimiz, tamamen hijyenik ortamda, %100 doğal içeriklerle üretilmiş EV YAPIMI bir lezzettir.",
        kullanımÖnerileri: "Kahvaltıda ve ara öğünlerde ekmek, pankek ve kreplerinizin üzerine sürülerek tüketilebilir. " +
                            "Yoğurt veya süt ile karıştırılarak ara öğün olarak tüketilebilir." +
                            "Pasta ve tatlı tariflerinizde lezzet verici olarak kullanılabilir. " +
                            "Özetle; günün her anında keyifle tüketebilirsiniz. ",
        saklamaKoşulları: "Cam kavanoz ile uzun süre tazeliğini korur. Açılmamış kavanoz: Serin ve kuru ortamda, oda sıcaklığında saklanmalıdır.Açıldıktan sonra: Buzdolabında muhafaza edilmelidir. ",
        ingredients: "Vişne (%65-70), şeker, limon suyu",
        size: "660gr",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Vişne Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. "
    },
    {
        id: 'jam-2',
        name: 'Doğal Çilek Reçeli (660gr.)',
        price: '300.00',
        image: 'images/cilekreceli.png',
        detailedDescription: "Rengi, kokusu ve tadıyla kahvaltılarımızın yıldızı olan çilek reçelimiz, mevsiminde temin edilen taze çileklerle yapılmaktadır. Sizlerin damak zevkine uygun olarak, nesilden nesile aktarılan geleneksel bir tarif ile üretilmektedir. Her kavanoz %65-70 oranında meyve içermektedir. Doğal lezzetlerinin ortaya çıkması için ekstra meyve oranının yanında, minimum miktarda pancar şekeri kullanılmaktadır. Ürünlerimizde, katkı maddesi, koruyucu madde, glikoz şurubu KULLANILMAMAKTADIR. Reçelimiz, tamamen hijyenik ortamda, %100 doğal içeriklerle üretilmiş EV YAPIMI bir lezzettir. ",
        kullanımÖnerileri: "Kahvaltıda ve ara öğünlerde ekmek, pankek ve kreplerinizin üzerine sürülerek tüketilebilir. Yoğurt veya süt ile karıştırılarak ara öğün olarak tüketilebilir. Pasta ve tatlı tariflerinizde lezzet verici olarak kullanılabilir. Özetle; günün her anında keyifle tüketebilirsiniz. HATIRLATMA: Bazı bireylerde turunç veya turunç reçeline karşı alerjik reaksiyonlar gelişebilir. Bu nedenle, yeni deneyenlerin dikkatli olması önemlidir. ",
         saklamaKoşulları: "Cam kavanoz ile uzun süre tazeliğini korur. Açılmamış kavanoz: Serin ve kuru ortamda, oda sıcaklığında saklanmalıdır. Açıldıktan sonra: Buzdolabında muhafaza edilmelidir. ",
        ingredients: "Çilek (%65-70), şeker, limon suyu",
        size: "660gr",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-3',
        name: 'Doğal Karpuz Reçeli (660gr.)',
        price: '300.00',
        image: 'images/karpuzreceli.png',
        detailedDescription: "Türk mutfağında önemli bir yeri olan, yaz aylarının ferahlatıcı ve tatlı lezzeti karpuz reçelimiz, mevsiminde temin edilen uygun özellikteki karpuzların kabuklarıyla yapılmaktadır. Sizlerin damak zevkine uygun olarak, nesilden nesile aktarılan geleneksel bir tarif ile üretilmektedir. Her kavanoz %65-70 oranında meyve içermektedir. Doğal lezzetlerinin ortaya çıkması için ekstra meyve oranının yanında, minimum miktarda pancar şekeri kullanılmaktadır. Ürünlerimizde, katkı maddesi, koruyucu madde, glikoz şurubu KULLANILMAMAKTADIR. Reçelimiz, tamamen hijyenik ortamda, %100 doğal içeriklerle üretilmiş EV YAPIMI bir lezzettir. ",
        kullanımÖnerileri: "Kahvaltıda ve ara öğünlerde ekmek, pankek ve kreplerinizin üzerine sürülerek tüketilebilir. Yoğurt veya süt ile karıştırılarak ara öğün olarak tüketilebilir. Pasta ve tatlı tariflerinizde lezzet verici olarak kullanılabilir. Özetle; günün her anında keyifle tüketebilirsiniz ve misafirlerinize ikramlık olarak sunabilirsiniz. ",
         saklamaKoşulları: "Cam kavanoz ile uzun süre tazeliğini korur. Açılmamış kavanoz: Serin ve kuru ortamda, oda sıcaklığında saklanmalıdır. Açıldıktan sonra: Buzdolabında muhafaza edilmelidir. ",
        ingredients: "Karpuz (%65-70), şeker, sönmüş kireç, su, limon ",
        size: "660gr",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-4',
        name: 'Doğal İncir Reçeli (660gr.)',
        price: '350.00',
        image: 'images/incirreceli.png',
        detailedDescription: "İncir reçelimiz, Aydın ilinde, mevsiminde temin edilen kaliteli ham incirlerle yapılmaktadır. Sizlerin damak zevkine uygun olarak, nesilden nesile aktarılan geleneksel bir tarif ile üretilmektedir. Her kavanoz %65-70 oranında meyve içermektedir. Doğal lezzetlerinin ortaya çıkması için ekstra meyve oranının yanında, minimum miktarda pancar şekeri kullanılmaktadır. Ürünlerimizde, katkı maddesi, koruyucu madde, glikoz şurubu KULLANILMAMAKTADIR. Meyvelerin fiziksel yapıları, lezzetleri, renkleri, kokuları ve besin değerleri korunarak hazırlanan reçelimiz, tamamen hijyenik ortamda, %100 doğal içeriklerle üretilmiş EV YAPIMI bir lezzettir. ",
        kullanımÖnerileri: "Kahvaltıda ve ara öğünlerde ekmek, pankek ve kreplerinizin üzerine sürülerek tüketilebilir. Yoğurt veya süt ile karıştırılarak ara öğün olarak tüketilebilir.Pasta ve tatlı tariflerinizde lezzet verici olarak kullanılabilir. ",
         saklamaKoşulları: "Cam kavanoz ile uzun süre tazeliğini korur. Açılmamış kavanoz: Serin ve kuru ortamda, oda sıcaklığında saklanmalıdır. Açıldıktan sonra: Buzdolabında muhafaza edilmelidir. ",
        ingredients: "İncir (%65-70), şeker, limon",
        size: "660gr",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-5',
        name: 'Doğal Şeftali Reçeli (660gr.)',
        price: '300.00',
        image: 'images/seftalireceli.png',
        detailedDescription: "Şeftali reçelimiz, mevsiminde temin edilen şeftalilerle yapılmaktadır. Sizlerin damak zevkine uygun olarak, nesilden nesile aktarılan geleneksel bir tarif ile üretilmektedir. Her kavanoz %65-70 oranında meyve içermektedir. Doğal lezzetlerinin ortaya çıkması için ekstra meyve oranının yanında, minimum miktarda pancar şekeri kullanılmaktadır. Ürünlerimizde, katkı maddesi, koruyucu madde, glikoz şurubu KULLANILMAMAKTADIR. Meyvelerin fiziksel yapıları, lezzetleri, renkleri, kokuları ve besin değerleri korunarak hazırlanan reçelimiz, tamamen hijyenik ortamda, %100 doğal içeriklerle üretilmiş EV YAPIMI bir lezzettir. ",
        kullanımÖnerileri: "Kahvaltıda ve ara öğünlerde ekmek, pankek ve kreplerinizin üzerine sürülerek tüketilebilir. Yoğurt veya süt ile karıştırılarak ara öğün olarak tüketilebilir. Pasta ve tatlı tariflerinizde lezzet verici olarak kullanılabilir. Özetle; günün her anında keyifle tüketebilirsiniz ve misafirlerinize ikramlık olarak sunabilirsiniz. ",
         saklamaKoşulları: "Cam kavanoz ile uzun süre tazeliğini korur. Açılmamış kavanoz: Serin ve kuru ortamda, oda sıcaklığında saklanmalıdır.Açıldıktan sonra: Buzdolabında muhafaza edilmelidir. ",
        ingredients: "Şeftali (%65-70), şeker, limon",
        size: "660gr",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-6',
        name: 'Doğal Turunç Reçeli (660gr.)',
        price: '300.00',
        image: 'images/turuncreceli.png',
        detailedDescription: "Turunç reçelimiz, mevsiminde temin edilen taze turunçlarla yapılmaktadır. Sizlerin damak zevkine uygun olarak, nesilden nesile aktarılan geleneksel bir tarif ile üretilmektedir. Her kavanoz %65-70 oranında meyve içermektedir. Doğal lezzetlerinin ortaya çıkması için ekstra meyve oranının yanında, minimum miktarda pancar şekeri kullanılmaktadır. Ürünlerimizde, katkı maddesi, koruyucu madde, glikoz şurubu KULLANILMAMAKTADIR. Reçelimiz, tamamen hijyenik ortamda, %100 doğal içeriklerle üretilmiş EV YAPIMI bir lezzettir. ",
        kullanımÖnerileri: "Kahvaltıda ve ara öğünlerde ekmek, pankek ve kreplerinizin üzerine sürülerek tüketilebilir. Yoğurt veya süt ile karıştırılarak ara öğün olarak tüketilebilir. Pasta ve tatlı tariflerinizde lezzet verici olarak kullanılabilir. Özetle; günün her anında keyifle tüketebilirsiniz. ",
         saklamaKoşulları: "Cam kavanoz ile uzun süre tazeliğini korur. Açılmamış kavanoz: Serin ve kuru ortamda, oda sıcaklığında saklanmalıdır.Açıldıktan sonra: Buzdolabında muhafaza edilmelidir. ",
        ingredients: "Turunç (%65-70), şeker, limon suyu",
        size: "660gr",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-7',
        name: 'Doğal Erik Reçeli (660gr.)',
        price: '300.00',
        image: 'images/erikreceli.png',
        detailedDescription: "İçerisinde bulunan A, K, B ve C vitaminleri ile birçok hastalığa karşı koruyucu etkisi olan erik reçelimiz, mevsiminde temin edilen iri kırmızı eriklerle yapılmaktadır. Sizlerin damak zevkine uygun olarak, nesilden nesile aktarılan geleneksel bir tarif ile üretilmektedir. Her kavanoz %65-70 oranında meyve içermektedir. Doğal lezzetlerinin ortaya çıkması için ekstra meyve oranının yanında, minimum miktarda pancar şekeri kullanılmaktadır. Ürünlerimizde, katkı maddesi, koruyucu madde, glikoz şurubu KULLANILMAMAKTADIR. Reçelimiz, tamamen hijyenik ortamda, %100 doğal içeriklerle üretilmiş EV YAPIMI bir lezzettir. ",
        kullanımÖnerileri: "Kahvaltıda ve ara öğünlerde ekmek, pankek ve kreplerinizin üzerine sürülerek tüketilebilir. Yoğurt veya süt ile karıştırılarak ara öğün olarak tüketilebilir. Pasta ve tatlı tariflerinizde lezzet verici olarak kullanılabilir. ",
         saklamaKoşulları: "Cam kavanoz ile uzun süre tazeliğini korur. Açılmamış kavanoz: Serin ve kuru ortamda, oda sıcaklığında saklanmalıdır. Açıldıktan sonra: Buzdolabında muhafaza edilmelidir. ",
        ingredients: "Kırmızı erik (%65-70), şeker, su, limon",
        size: "660gr",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-8',
        name: 'Doğal Ayva Reçeli (660gr.)',
        price: 'Tükendi',
        image: 'images/ayvareceli.png',
        detailedDescription: "Erik reçelimiz, olgunluğun zirvesindeki eriklerle hazırlanır. Tatlı ve ekşi arasındaki mükemmel dengesiyle kahvaltılarınıza lezzet katacak bu reçel, geleneksel yöntemlerle hazırlanır ve doğal kıvam artırıcılar kullanılır. Ekmek üzerinde veya yoğurtla birlikte tüketebilirsiniz.",
        kullanımÖnerileri: "Bu reçel, doğal ve sağlıklı bir şekilde tüketilebilir. Önerilen kullanım süresi: 1-2 saat.",
         saklamaKoşulları: "Köy ve sıcak bölgelerde saklanması önerilir. " +
                            "Dışarı çıkartılmamalıdır. " +
                            "Dışarı çıkartıldığında, ısıtılmış 20 dereceye kadar bekletilmelidir.",
        ingredients: "Ayva (%65-70), şeker, su, limon",
        size: "660gr",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-9',
        name: 'Doğal Acı Biber Reçeli (660gr.)',
        price: 'Tükendi',
        image: 'images/acıbiberreceli2.png',
        detailedDescription: "Erik reçelimiz, olgunluğun zirvesindeki eriklerle hazırlanır. Tatlı ve ekşi arasındaki mükemmel dengesiyle kahvaltılarınıza lezzet katacak bu reçel, geleneksel yöntemlerle hazırlanır ve doğal kıvam artırıcılar kullanılır. Ekmek üzerinde veya yoğurtla birlikte tüketebilirsiniz.",
        kullanımÖnerileri: "Bu reçel, doğal ve sağlıklı bir şekilde tüketilebilir. Önerilen kullanım süresi: 1-2 saat.",
         saklamaKoşulları: "Köy ve sıcak bölgelerde saklanması önerilir. " +
                            "Dışarı çıkartılmamalıdır. " +
                            "Dışarı çıkartıldığında, ısıtılmış 20 dereceye kadar bekletilmelidir.",
        ingredients: "Erik, şeker, limon suyu, pektin.",
        size: "250g",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-10',
        name: 'Doğal Mandalina Reçeli (660gr.)',
        price: 'Tükendi',
        image: 'images/mandalinareceli.png',
        detailedDescription: "Erik reçelimiz, olgunluğun zirvesindeki eriklerle hazırlanır. Tatlı ve ekşi arasındaki mükemmel dengesiyle kahvaltılarınıza lezzet katacak bu reçel, geleneksel yöntemlerle hazırlanır ve doğal kıvam artırıcılar kullanılır. Ekmek üzerinde veya yoğurtla birlikte tüketebilirsiniz.",
        kullanımÖnerileri: "Bu reçel, doğal ve sağlıklı bir şekilde tüketilebilir. Önerilen kullanım süresi: 1-2 saat.",
         saklamaKoşulları: "Köy ve sıcak bölgelerde saklanması önerilir. " +
                            "Dışarı çıkartılmamalıdır. " +
                            "Dışarı çıkartıldığında, ısıtılmış 20 dereceye kadar bekletilmelidir.",
        ingredients: "Erik, şeker, limon suyu, pektin.",
        size: "250g",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-11',
        name: 'Doğal Ayva Marmelati (660gr.)',
        price: 'Tükendi',
        image: 'images/ayvareceli.png',
        detailedDescription: "Erik reçelimiz, olgunluğun zirvesindeki eriklerle hazırlanır. Tatlı ve ekşi arasındaki mükemmel dengesiyle kahvaltılarınıza lezzet katacak bu reçel, geleneksel yöntemlerle hazırlanır ve doğal kıvam artırıcılar kullanılır. Ekmek üzerinde veya yoğurtla birlikte tüketebilirsiniz.",
        kullanımÖnerileri: "Bu reçel, doğal ve sağlıklı bir şekilde tüketilebilir. Önerilen kullanım süresi: 1-2 saat.",
         saklamaKoşulları: "Köy ve sıcak bölgelerde saklanması önerilir. " +
                            "Dışarı çıkartılmamalıdır. " +
                            "Dışarı çıkartıldığında, ısıtılmış 20 dereceye kadar bekletilmelidir.",
        ingredients: "Erik, şeker, limon suyu, pektin.",
        size: "250g",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    },
    {
        id: 'jam-12',
        name: 'Doğal Erik Marmelatı (660gr.)',
        price: '300.00',
        image: 'images/erikreceli.png',
        detailedDescription: "Erik reçelimiz, olgunluğun zirvesindeki eriklerle hazırlanır. Tatlı ve ekşi arasındaki mükemmel dengesiyle kahvaltılarınıza lezzet katacak bu reçel, geleneksel yöntemlerle hazırlanır ve doğal kıvam artırıcılar kullanılır. Ekmek üzerinde veya yoğurtla birlikte tüketebilirsiniz.",
        kullanımÖnerileri: "Bu reçel, doğal ve sağlıklı bir şekilde tüketilebilir. Önerilen kullanım süresi: 1-2 saat.",
         saklamaKoşulları: "Köy ve sıcak bölgelerde saklanması önerilir. " +
                            "Dışarı çıkartılmamalıdır. " +
                            "Dışarı çıkartıldığında, ısıtılmış 20 dereceye kadar bekletilmelidir.",
        ingredients: "Erik, şeker, limon suyu, pektin.",
        size: "250g",
        nutritionalInfo: "www.bidenemarket.com online mağazamızda bulunan Bol Meyveli Turunç Reçeli (660 gr) ürününü, en uygun kalite/fiyat dengesi ile sipariş edebilirsiniz. Sipariş etmeniz halinde ürün özenle paketlenerek güvenli bir şekilde en kısa sürede adresinize teslim edilecektir. Sipariş için bize ulaşın."
    }
];

// DOM Elementleri
const jamsContainer = document.getElementById('jams-container');
const modal = document.getElementById('product-modal');
const modalDetails = document.getElementById('modal-product-details');
const closeButton = document.querySelector('.close-button');

// Sayfa yüklendiğinde ürün kartlarını oluştur
document.addEventListener('DOMContentLoaded', function() {
    createProductCards();
});

// Ürün kartlarını oluştur
function createProductCards() {
    jamsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button class="view-details-btn" data-id="${product.id}"><i class="fas fa-search-plus"></i></button>
        `;
        
        // Ürün detaylarını göstermek için tıklama olayı ekle
        const button = productCard.querySelector('.view-details-btn');
        button.addEventListener('click', () => {
            showProductDetails(product.id);
        });
        
        jamsContainer.appendChild(productCard);
    });
}

// Ürün detaylarını modalda göster
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    modalDetails.innerHTML = `
        <div class="modal-product-details">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}" >
            </div>
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <div class="product-details-price">${product.price}</div>
                <p>${product.detailedDescription}</p>
                <h3>Kullanım Önerileri</h3>
                <p>${product.kullanımÖnerileri}</p>
                <h3>Saklama Koşulları</h3>
                <p>${product.saklamaKoşulları}</p>
                <h3>Boyut</h3>
                <p>${product.size}</p>
                <h3></h3>
                <p>${product.nutritionalInfo}</p>
                <a href="#contact" class="btn contact-button">Bize Ulaşın</a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Modalı kapat
function closeModal() {
    modal.style.display = 'none';
}

// Olay dinleyicileri
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// İletişim butonuna tıklandığında modalı kapat
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('contact-button')) {
        closeModal();
    }
});

// Domates sosu detayları için olay dinleyicisi
document.addEventListener('DOMContentLoaded', () => {
    const tomatoSauceBtn = document.querySelector('#sauce-container .view-details-btn');
    if (tomatoSauceBtn) {
        tomatoSauceBtn.addEventListener('click', () => {
            showTomatoSauceDetails();
        });
    }
    
    // Reçel ürünlerini oluştur
    createProductCards();
});

// Domates sosu detaylarını göster
function showTomatoSauceDetails() {
    modalDetails.innerHTML = `
        <div class="modal-product-details">
            <div class="modal-product-image">
                <img src="images/domatessalcasi.png" alt="Domates Sosu">
            </div>
            <div class="modal-product-info">
                <h2>Domates Sosu</h2>
                <div class="product-details-price">₺400.00</div>
                <p>Domates sosumuz, taze domateslerden yapılır ve geleneksel bir tarif kullanılarak hazırlanır. Makarna, pizza ve diğer İtalyan yemekleri için mükemmel bir seçimdir.</p>
                <h3>İçindekiler</h3>
                <p>Domates, zeytinyağı, sarımsak, soğan, tuz, karabiber, kekik, fesleğen.</p>
                <h3>Boyut</h3>
                <p>350g</p>
                <h3>Besin Değerleri</h3>
                <p>Enerji: 100g başına 80 kcal, Karbonhidrat: 10g, Protein: 2g, Yağ: 3g</p>
                <h3>Sipariş İçin Bize Ulaşın</h3>
                <p><i class="fas fa-phone"></i> Telefon: +90 555 123 4567</p>
                <p><i class="fas fa-envelope"></i> E-posta: info@bidene.com</p>
                <a href="#contact" class="btn contact-button">Bize Ulaşın</a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}
