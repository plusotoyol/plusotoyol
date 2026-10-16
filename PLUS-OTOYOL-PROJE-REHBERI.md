# PLUS OTOYOL

## Proje Tanımı, Ürün Kapsamı ve Teknik Mimari

> **Slogan:** Türkiye'nin Yolculuk Asistanı\
> **Proje türü:** Ulaşım teknolojileri ve yolculuk bilgi platformu\
> **Repo adı:** `plus-otoyol`\
> **Belge durumu:** Mimari ve kapsam rehberi --- uygulama ayrıntıları
> geliştirme sırasında kesinleştirilecektir.

------------------------------------------------------------------------

## 1. Projenin Amacı

**Plus Otoyol**, Türkiye'deki otoyollar, yollar, köprüler, tüneller,
geçiş ücretleri, akaryakıt bilgileri ve yol duyurularını tek bir yerde
sunmayı hedefleyen bir ulaşım teknolojileri platformudur.

Projenin amacı yalnızca bilgi listelemek değil; güvenilir kaynaklardan
alınan verileri düzenlemek, doğrulamak, geçmiş sürümlerini gerektiğinde
korumak ve kullanıcıya anlaşılır bir deneyimle sunmaktır.

Plus Otoyol, Google Maps'in yerine geçen bir navigasyon sistemi olarak
konumlandırılmamaktadır. Ürünün ana değeri **yolculuk öncesi planlama,
yol altyapısı bilgisi ve güvenilir ulaşım verisi** sağlamaktır. İleride
rota işleme ve mola planlama gibi özellikler değerlendirilebilir; bunlar
ayrı ürün kararlarıyla kapsamlandırılmalıdır.

### Temel hedefler

-   Türkiye'deki yol ve otoyol bilgilerini düzenli bir yapıda sunmak.
-   Köprü, tünel ve ücretli geçiş bilgilerini anlaşılır hâle getirmek.
-   Akaryakıt fiyatlarını kaynak ve güncelleme bilgileriyle sunabilmek.
-   Son dakika yol haberleri ve duyurularını yayımlamak.
-   Bilgi merkezi üzerinden açıklayıcı içerikler sağlamak.
-   Kaynak veriler ile işlenmiş verileri birbirinden ayırmak.
-   Güvenilirlik, izlenebilirlik, sürdürülebilirlik ve erişilebilirliği
    öncelemek.
-   Kurumsal, profesyonel ve modern bir kullanıcı deneyimi oluşturmak.

------------------------------------------------------------------------

## 2. Ürün İlkeleri

1.  **Doğruluk:** Gerçek dünya verileri tahmin edilerek veya uydurularak
    yayımlanmaz.
2.  **Kaynak gösterimi:** Kritik ücret ve bilgi kayıtlarında kaynak
    URL'si/belgesi ile geçerlilik veya güncelleme tarihi tutulması
    hedeflenir.
3.  **Veri geçmişi:** Ücret değişikliklerinde geçmiş kayıtlar gereksiz
    yere silinmez; geçerlilik tarihleriyle saklanır.
4.  **Katmanlı mimari:** Arayüz, API, iş kuralları, entegrasyonlar ve
    veri depolama birbirinden ayrılır.
5.  **Kapsam disiplini:** Her geliştirme görevi tanımlı dosya veya
    özellik sınırında kalır.
6.  **İnsan onayı:** Mimari değişiklikler, veri modeli, kritik iş
    kuralları ve hukuki metinler insan onayı olmadan değiştirilmez.
7.  **Güvenlik:** Gizli anahtarlar ve parolalar Git deposuna eklenmez.
8.  **Erişilebilirlik:** Sayfalar klavye, mobil ekran ve temel
    erişilebilirlik ihtiyaçları gözetilerek geliştirilir.
9.  **Şeffaflık:** Kullanıcıya gösterilen veri ile bu verinin kaynağı ve
    güncelliği mümkün olduğunca açık olmalıdır.
10. **Gerçekçilik:** Bir entegrasyon, veri kaynağı veya algoritma
    çalışır durumda değilse tamamlanmış gibi gösterilmez.

------------------------------------------------------------------------

## 3. Marka ve Görsel Dil

-   **Marka adı:** PLUS OTOYOL
-   **Slogan:** Türkiye'nin Yolculuk Asistanı
-   **Marka yaklaşımı:** Kurumsal, güvenilir, altyapı ve ulaşım
    teknolojileri odaklı.
-   **Görsel hedef:** Resmî ulaşım kurumu ciddiyeti ile modern teknoloji
    ürünü kullanılabilirliğini birleştirmek.
-   **Kaçınılacak yaklaşım:** Başka bir kurumun logosunu veya kimliğini
    kopyalamak; gereksiz animasyonlar, genel şablon hissi, aşırı
    yuvarlak/pill arayüzler ve yalnızca dekoratif tasarım.
-   **Tipografi için değerlendirilebilecek seçenekler:** Manrope, Inter
    veya IBM Plex Sans; nihai karar tasarım sistemi oluşturulurken
    verilir.

Renk tokenları, logo varyantları, tipografi ölçeği, boşluk sistemi,
durum renkleri ve bileşen standartları daha sonra ayrı bir tasarım
sistemi belgesinde kesinleştirilmelidir.

------------------------------------------------------------------------

## 4. Kullanıcıya Açık Sayfalar ve Rotalar

Aşağıdaki liste mevcut kapsam için temel alınır. Yeni bir kullanıcıya
açık sayfa, açık onay olmadan eklenmemelidir.

  --------------------------------------------------------------------------------
  Sayfa                   Önerilen rota                    Amaç
  ----------------------- -------------------------------- -----------------------
  Ana Sayfa               `/`                              Platformun genel
                                                           görünümü ve ana
                                                           içeriklere erişim

  Yollar                  `/yollar`                        Yol ve otoyol
                                                           bilgilerinin
                                                           listelenmesi

  Yol Detayı              `/yollar/[slug]`                 Seçilen yolun
                                                           ayrıntıları

  Köprüler ve Tüneller    `/kopruler-ve-tuneller`          Köprü ve tünellerin
                                                           listelenmesi

  Köprü/Tünel Detayı      `/kopruler-ve-tuneller/[slug]`   Seçilen yapıya ait
                                                           ayrıntılar

  Akaryakıt               `/akaryakit`                     Akaryakıt bilgileri ve
                                                           fiyat görünümü

  Akaryakıt Detayı        `/akaryakit/[slug]`              Desteklenen veri
                                                           modeline göre ayrıntılı
                                                           kayıt

  Son Dakika              `/son-dakika`                    Yol ve ulaşım
                                                           duyuruları/haberleri

  Haber Detayı            `/son-dakika/[slug]`             Bir haber veya
                                                           duyurunun içeriği

  Bilgi Merkezi           `/bilgi-merkezi`                 Rehber ve açıklayıcı
                                                           içerikler

  Bilgi Detayı            `/bilgi-merkezi/[slug]`          Seçilen rehber içeriği

  İletişim                `/iletisim`                      İletişim kanalları ve
                                                           varsa iletişim formu

  KVKK                    `/kvkk`                          Kişisel verilerin
                                                           işlenmesine ilişkin
                                                           aydınlatma

  Gizlilik Politikası     `/gizlilik-politikasi`           Gizlilik
                                                           uygulamalarının
                                                           açıklanması

  Çerez Politikası        `/cerez-politikasi`              Çerez ve benzeri
                                                           teknolojilerin
                                                           açıklanması

  Kullanım Koşulları      `/kullanim-kosullari`            Platform kullanım
                                                           koşulları

  Açık Rıza Metni         `/acik-riza-metni`               Gerektiğinde alınacak
                                                           açık rızaya ilişkin
                                                           metin
  --------------------------------------------------------------------------------

Dinamik `[slug]` rotaları, her içerik türü için ayrı ayrı yüzlerce sayfa
dosyası açmak yerine aynı sayfa şablonunun farklı kayıtları göstermesi
için planlanmıştır.

### Şimdilik kapsam dışında

Aşağıdakiler bu belgeyle otomatik olarak onaylanmış özellikler değildir:

-   Kullanıcı hesabı ve kimlik doğrulama
-   Yönetim paneli/CMS
-   Ödeme, abonelik veya premium paketler
-   Reklam sistemi
-   Sohbet botu veya yapay zekâ asistanı
-   Canlı GPS takibi
-   Kendi navigasyon motoru
-   Kesinleşmemiş rota/mola planlama ekranları
-   Gerçek zamanlı veri entegrasyonları

Bunlar ileride ayrıca değerlendirilip kapsamlandırılabilir.

**Yönetim paneli notu:** Haber girişi ve veri yönetimi için panel
ihtiyacı gündemdedir; henüz kapsama alınmamıştır. Karar §24'te açık
tutulur. Panel kapsama alınırsa kimlik doğrulama, rol ayrımı, audit log
ve KVKK etkisi birlikte değerlendirilmelidir. Ücret tarifesi kayıtları
panelden "düzenle/sil" ile değil, yeni geçerlilik tarihli sürüm olarak
eklenmelidir.

------------------------------------------------------------------------

## 5. Önerilen Teknik Mimari

> Bu bölüm hedeflenen mimariyi açıklar; her modülün tamamlandığı veya
> çalıştığı anlamına gelmez.

### Frontend

-   Next.js App Router
-   React
-   TypeScript
-   Global tasarım ve stil altyapısı
-   Tekrar kullanılabilir UI bileşenleri
-   Sayfa bazlı ve içerik türü bazlı bileşenler
-   SEO metadata, sitemap ve robots yapılandırması

Frontend'in sorumluluğu kullanıcı arayüzü, sayfa yönlendirme, kullanıcı
etkileşimleri ve API'den gelen verinin gösterimidir. Kritik iş kuralları
frontend'e gömülmemelidir.

### Backend

-   Node.js
-   TypeScript
-   REST API yaklaşımı
-   Controller, service, algorithm, integration ve data-access
    sorumluluklarının ayrılması
-   İleride PostgreSQL tabanlı kalıcı veri katmanı
-   Girdi doğrulama, merkezi hata yönetimi, loglama ve güvenlik ara
    katmanları

Backend, iş kurallarının ve veri doğrulamanın ana yürütme katmanı
olmalıdır. Controller'lar ince kalmalı; hesaplama ve iş mantığı
service/algorithm katmanlarında tutulmalıdır.

### Veri tabanı

PostgreSQL hedeflenen ilişkisel veri tabanı seçeneklerinden biridir.
Kesin şema, migration aracı, ORM ve bağlantı yöntemi uygulama aşamasında
teknik kararla belirlenmelidir.

### Sistem görünümü

``` text
Kullanıcı
   |
   v
Next.js / React / TypeScript
   |
   v
Plus Otoyol REST API
   |
   +--> Controllers
   |       |
   |       v
   +--> Services ve Algorithms
   |       |
   |       +--> Veri doğrulama
   |       +--> Ücret/mesafe hesaplamaları
   |       +--> İş kuralları
   |
   +--> Integrations (KGM, OSM, OSRM vb.)
   |
   v
Veri katmanı / PostgreSQL
```

------------------------------------------------------------------------

## 6. Frontend Yapısı ve Sorumluluklar

Frontend ana klasörü `frontend/` olarak planlanır.

### `frontend/app/`

Next.js App Router sayfaları ve ortak uygulama dosyaları burada yer
alır:

-   `page.tsx`: ana sayfa
-   Her kullanıcıya açık rota için ilgili `page.tsx`
-   `layout.tsx`: ortak uygulama düzeni
-   `loading.tsx`: yükleme durumu
-   `not-found.tsx`: bulunamayan sayfa
-   `error.tsx`: sayfa seviyesinde hata arayüzü
-   `globals.css`: genel stil altyapısı
-   `sitemap.ts`: site haritası
-   `robots.ts`: tarama yönergeleri

### `frontend/components/`

Bileşenler sorumluluklarına göre ayrılır:

-   `layout/`: Header, Navigation, Footer, MobileNavigation
-   `home/`: ana sayfa bölümleri
-   `roads/`: yol kartları, liste ve yol bilgisi
-   `tolls/`: geçiş ücretleri tabloları ve kaynak gösterimi
-   `bridges/`: köprü/tünel kartları ve tabloları
-   `fuel/`: akaryakıt kartları, tabloları ve filtreler
-   `news/`: haber kartları, listeler ve kategoriler
-   `knowledge/`: bilgi merkezi içerik bileşenleri
-   `common/`: Button, Input, Select, Modal, Badge, Card, Table,
    Pagination, Loading, ErrorState ve EmptyState gibi genel bileşenler

Bir bileşen yalnızca gerçekten ortak bir sorumluluğu varsa
ortaklaştırılmalıdır. Sırf dosya sayısını artırmak için gereksiz bileşen
oluşturulmamalıdır.

### `frontend/lib/`

-   `api.ts`: backend API iletişim yardımcıları
-   `metadata.ts`: metadata yardımcıları
-   `utils.ts`: ortak, genel amaçlı yardımcı fonksiyonlar
-   `constants.ts`: merkezi sabitler

### `frontend/types/`

Frontend'in kullandığı veri tipleri: road, toll, bridge, fuel, facility,
news ve article. Backend ile paylaşılacak sözleşmeler ileride açıkça
tanımlanmalı; kopyalanan tiplerin zamanla farklılaşması önlenmelidir.

### `frontend/public/`

-   `images/`: yol, köprü, tünel, akaryakıt, tesis, haber ve genel
    görseller
-   `logos/`: logo varyantları ve varsa iş ortaklarının logoları
-   `icons/`: ikonlar
-   `fonts/`: yerel font dosyaları

Logo dosyaları oluşturulmadıysa boş dosyalar geçerli logo gibi
kullanılmamalıdır. Placeholder dosyalar gerçek marka varlığı olarak
sunulmamalıdır.

------------------------------------------------------------------------

## 7. Backend Yapısı ve Sorumluluklar

Backend ana klasörü `backend/` olarak planlanır.

### `src/server.ts`

Backend uygulamasının giriş noktası olması hedeflenir. Sunucu başlatma,
yapılandırma ve route kayıtları burada koordine edilir; iş mantığı bu
dosyada biriktirilmez.

### `src/config/`

-   `env.ts`: ortam değişkenlerinin doğrulanması
-   `database.ts`: veri tabanı bağlantı yapılandırması
-   `logger.ts`: loglama yapılandırması

### `src/routes/`

API uç noktalarını modül bazında tanımlar:

-   roads
-   tolls
-   bridges
-   fuel
-   news
-   articles
-   contact

Route dosyaları istekleri uygun controller'a yönlendirmelidir.

### `src/controllers/`

HTTP istek/yanıt katmanıdır. Girdi alır, doğrulama ve service akışını
koordine eder, uygun HTTP yanıtını döndürür. Karmaşık hesaplama burada
yapılmamalıdır.

### `src/services/`

İş akışları ve uygulama mantığı:

-   `roads/roads.service.ts`
-   `tolls/toll.service.ts`
-   `tolls/toll-station.service.ts`
-   `bridges/bridge.service.ts`
-   `fuel/fuel.service.ts`
-   `news/news.service.ts`
-   `articles/article.service.ts`

### `src/algorithms/`

İş kurallarını ve hesaplamaları izole etmek için:

-   `toll.algorithm.ts`
-   `fuel.algorithm.ts`
-   `road.algorithm.ts`
-   `route.algorithm.ts`

Algoritmalar, doğrulanabilir girdiler ve açıkça tanımlanmış çıktılarla
çalışmalıdır. Kritik algoritmalar için birim testleri gerekir. Dosya
adının var olması, algoritmanın tasarlandığı veya uygulandığı anlamına
gelmez.

### `src/integrations/`

Dış servis bağlantıları:

-   `osrm/osrm.service.ts`
-   `osm/osm.service.ts`
-   `google/google-maps.service.ts`

Dış servislerin yanıtları güvenilir kabul edilmeden önce doğrulanmalı;
hata, zaman aşımı, limit ve veri güncelliği durumları ele alınmalıdır.

### `src/database/`

-   `schema/`: veri tabanı şemaları
-   `migrations/`: şema değişiklik geçmişi
-   `seed/`: geliştirme/test verisi oluşturma dosyaları

### `src/models/`

Alan modelleri:

-   road
-   toll-road
-   toll-station
-   toll-rate
-   bridge
-   tunnel
-   fuel-station
-   fuel-price
-   news
-   article

### `src/validators/`

Yol, ücret, akaryakıt, haber ve makale verilerinin giriş doğrulama
kuralları.

### `src/middleware/`

-   `error.middleware.ts`: merkezi hata işleme
-   `validation.middleware.ts`: doğrulama akışı
-   `rate-limit.middleware.ts`: istek sınırlandırma
-   `security.middleware.ts`: güvenlik başlıkları ve ilgili kontroller

Bu dosyalar başlangıçta yalnızca iskelet olarak bulunabilir; gerçek
davranış geliştirme sırasında uygulanır.

### `src/types/`

Backend veri tipleri. API sözleşmeleriyle uyumlu tutulmalıdır.

### `src/utils/`

-   `coordinates.ts`: koordinat yardımcıları
-   `distance.ts`: mesafe yardımcıları
-   `dates.ts`: tarih ve geçerlilik aralığı yardımcıları
-   `slug.ts`: slug işlemleri
-   `validation.ts`: ortak doğrulama yardımcıları

------------------------------------------------------------------------

## 8. KGM ve Resmî Ücret Verileri

Otoyol ve geçiş ücretleri için Karayolları Genel Müdürlüğü (KGM) gibi
resmî kaynaklar öncelikli değerlendirilir. Gerçek veri kullanılırken
kaynak, belge tarihi, geçerlilik tarihi ve alınma tarihi mümkün
olduğunca kaydedilmelidir.

### Planlanan veri işleme akışı

``` text
Resmî kaynak / KGM PDF
        |
        v
data/raw/kgm/
        |
        v
PDF importer ve parser
        |
        v
Tablo çıkarımı
        |
        v
Normalizasyon
        |
        v
Validasyon
        |
        v
Değişiklik tespiti
        |
        v
data/processed/kgm/
        |
        v
Veri tabanı aktarımı (ileriki aşama)
```

### Ham ve işlenmiş veriler

-   `data/raw/`: kaynaktan alınan özgün dosyalar; örneğin resmî PDF'ler.
-   `data/processed/`: normalize edilmiş, uygulamanın tüketebileceği
    veriler.
-   `data/imports/`: farklı kaynaklardan alınan içe aktarma girdileri.
-   `data/exports/`: dışa aktarımlar.

Ham dosyalar işlenmiş çıktıyla karıştırılmamalı ve ham kaynak gereksiz
yere üzerine yazılmamalıdır. İçe aktarma aşamasında hatalı satırlar
sessizce atılmamalı; doğrulama hataları raporlanmalıdır.

### Planlanan KGM importer bileşenleri

-   `pdf-importer.ts`
-   `pdf-parser.ts`
-   `table-parser.ts`
-   `normalizer.ts`
-   `validator.ts`
-   `change-detector.ts`

Bunlar ilerideki görev sınırlarını gösterir; başlangıçta çalışan PDF
ayrıştırıcı oldukları anlamına gelmez.

------------------------------------------------------------------------

## 9. Geçiş Ücreti Veri Modeli ve Algoritma İlkeleri

Ücret sistemi yalnızca "otoyol = tek fiyat" şeklinde modellenmemelidir.
Giriş/çıkış istasyonları, araç sınıfı ve geçerlilik tarihi gibi unsurlar
gerekebilir.

### Temel kavramlar

-   **Toll road:** ücretli yol/otoyol
-   **Toll station:** giriş veya çıkış istasyonu
-   **Toll rate:** ücret kaydı
-   **Entry station:** giriş istasyonu
-   **Exit station:** çıkış istasyonu
-   **Vehicle class:** araç sınıfı
-   **Price:** ücret
-   **Valid from / valid until:** geçerlilik başlangıcı ve bitişi
-   **Source:** kaynak belge veya URL
-   **Last updated:** kaydın en son doğrulandığı/güncellendiği tarih

Önerilen ilişkiler ve alanlar, resmî ücret tablolarının gerçek yapısı
incelendikten sonra kesinleştirilmelidir. Tüm otoyollarda aynı ücret
mantığının geçerli olduğu varsayılmamalıdır.

### Algoritma gereksinimleri

-   Giriş ve çıkış istasyonlarının geçerli olduğunu kontrol etmek.
-   Araç sınıfını açıkça ele almak.
-   İstenen tarih için geçerli ücret sürümünü seçmek.
-   Veri bulunamadığında tahmini ücret üretmemek.
-   Kaynak veya geçerlilik bilgisi eksikse bunu görünür kılmak.
-   Ücret değişikliklerinin geçmişini korumak.
-   Sınır durumlarını test etmek: geçersiz istasyon, eksik ücret, tarih
    aralığı çakışması, bilinmeyen araç sınıfı ve tutarsız kaynak verisi.

------------------------------------------------------------------------

## 10. Harita ve Rota Entegrasyonu

Plus Otoyol'un harita yaklaşımı, özel bir navigasyon sistemi yazmak
yerine uygun açık harita/veri altyapılarını kullanmak ve gerektiğinde
kullanıcıyı Google Maps'e yönlendirmek şeklinde değerlendirilmiştir.

### Kavramsal akış

``` text
OpenStreetMap (harita verisi)
        |
        v
OSRM (rota hesaplama servisi)
        |
        v
Plus Otoyol backend
        |
        v
Rota/mesafe verisinin işlenmesi
        |
        v
Google Maps URL yönlendirmesi (gerektiğinde)
```

Bu bir hedef mimari fikridir; tüm entegrasyonların kurulmuş veya
doğrulanmış olduğu anlamına gelmez.

-   **OpenStreetMap (OSM):** harita verisi kaynağı olarak
    değerlendirilebilir; atıf ve lisans koşulları incelenmelidir.
-   **OSRM:** rota hesaplama altyapısı olarak değerlendirilebilir;
    barındırma, kullanım koşulları, veri güncelliği ve hizmet limitleri
    kontrol edilmelidir.
-   **Google Maps URL:** kullanıcıyı navigasyona geçirmek için
    kullanılabilir. Google Maps'e yönlendirme ile Google Routes API
    kullanımı aynı şey değildir.
-   Rota mesafesi, tahmini süre, geçiş ücreti ve yakıt maliyeti
    birbirinden ayrı kavramlardır; birinin verisi diğerinin doğruluğunu
    otomatik olarak garanti etmez.

Rota planlama, mola önerme veya maliyet hesaplama gibi özellikler
uygulamaya eklenmeden önce ayrı gereksinimler ve doğrulama kriterleri
belirlenmelidir.

------------------------------------------------------------------------

## 11. Akaryakıt Verileri

Akaryakıt modülü, desteklenen kaynaklardan elde edilen fiyat veya
istasyon bilgilerinin düzenli biçimde sunulmasını hedefler.

### Planlanan veri kavramları

-   Yakıt türü
-   Marka/sağlayıcı (kaynak veride mevcutsa)
-   İstasyon veya bölge (kaynağın kapsamına göre)
-   Fiyat
-   Para birimi
-   Geçerlilik veya gözlem zamanı
-   Kaynak URL'si/belgesi
-   Son doğrulama zamanı

Fiyatların ülke çapında tek bir değer olduğu varsayılmamalıdır. Kaynak
istasyon, bölge, yakıt türü veya tarih ayrımı yapıyorsa veri modeli de
bunu korumalıdır. Kaynak ve güncelleme zamanı olmadan veri güncelmiş
gibi sunulmamalıdır.

`fuel.algorithm.ts`, ileride fiyat normalizasyonu, karşılaştırma veya
açıkça tanımlanmış maliyet hesaplarını kapsayabilir; kapsamı uygulama
kararıyla belirlenir.

------------------------------------------------------------------------

## 12. Son Dakika ve Bilgi Merkezi

### Son Dakika

Haber/duyuru içerikleri için planlanan alanlar:

-   Başlık
-   Slug
-   İçerik veya özet
-   Kategori
-   Yayın tarihi
-   Kaynak
-   Kaynağın yayın/duyuru URL'si
-   Güncelleme bilgisi
-   Gerekirse önem veya durum bilgisi

Gerçek haberler uydurulmamalıdır. Bir içeriğin resmî duyuru, haber veya
kullanıcı tarafından sağlanmış bilgi olup olmadığı açıkça
ayrıştırılmalıdır.

### Bilgi Merkezi

Bilgi merkezi; yolculuk, otoyol, ücret, köprü/tünel ve ilgili süreçleri
açıklayan rehber içeriklerini barındırabilir. İçeriklerin kaynakları ve
güncellenme tarihleri mümkün olduğunca kaydedilmelidir.

------------------------------------------------------------------------

## 13. Hukuki Sayfalar ve Kişisel Veriler

Planlanan hukuki sayfalar:

-   KVKK aydınlatma metni
-   Gizlilik politikası
-   Çerez politikası
-   Kullanım koşulları
-   Açık rıza metni

Bu belgeler aynı şey değildir ve birbirinin yerine kullanılmamalıdır.
Özellikle aydınlatma yükümlülüğü ile açık rıza ayrı hukuki kavramlardır.

Nihai metinler yazılmadan önce gerçek ürün davranışları belirlenmelidir:
iletişim formu, ad/soyad, e-posta, telefon, IP kayıtları, çerezler,
analitik, konum, başlangıç-varış bilgileri, araç bilgileri, favoriler
veya geçmiş gibi verilerin gerçekten işlenip işlenmediği kontrol
edilmelidir.

-   Kullanılmayan özellikler varmış gibi hukuki metne eklenmemelidir.
-   Kullanılan üçüncü taraf hizmetleri ve veri aktarımı
    değerlendirilmelidir.
-   Gereksiz kişisel veri toplanmamalıdır.
-   Saklama süresi, işleme amacı ve hukuki sebep netleştirilmelidir.
-   Çerez tercihleri gerekiyorsa gerçek davranışla uyumlu
    uygulanmalıdır.
-   Yayına alınmadan önce hukuki metinler uzman incelemesinden
    geçirilmelidir.

Bu belge hukuki danışmanlık veya yayıma hazır hukuki metin değildir;
geliştirme ekibinin gereksinim rehberidir.

------------------------------------------------------------------------

## 14. Veri, Dokümantasyon ve Altyapı Klasörleri

### `data/`

-   `raw/kgm/otoyol-ucretleri/`
-   `raw/kgm/kopru-ucretleri/`
-   `raw/kgm/tunel-ucretleri/`
-   `raw/kgm/arsiv/`
-   `raw/akaryakit/raw/`
-   `raw/yollar/`
-   `raw/other/`
-   `processed/kgm/`
-   `processed/akaryakit/`
-   `processed/roads/`
-   `imports/`
-   `exports/`
-   `README.md`

Kurulum sırasında gerçek KGM PDF'leri veya gerçek fiyat kayıtları
otomatik olarak uydurulmamalı ya da indirildiği varsayılmamalıdır.

### `docs/`

-   `architecture/`: sistem, frontend, backend ve veri mimarisi
-   `api/`: roads, tolls, bridges, fuel, news ve articles API
    dokümanları
-   `algorithms/`: ücret, akaryakıt ve yol algoritması açıklamaları
-   `data/`: veri kaynakları, KGM, OSM ve veri modeli
-   `contracts/`: API/modül sözleşmeleri
-   `legal/`: hukuki sayfalarla ilgili gereksinim notları

Dokümanlar doğrulanmış kararları kaydetmelidir. Karar verilmemiş konular
kesinleşmiş gibi yazılmamalıdır.

### `infrastructure/`

-   `docker/postgres/`
-   `docker/osrm/`
-   `nginx/nginx.conf`
-   `monitoring/README.md`
-   kök `docker-compose.yml`

Docker, Nginx, PostgreSQL ve OSRM yapılandırmaları ancak ilgili çalışma
aşamasında gerçekten ihtiyaç duyulan ayarlarla uygulanmalıdır.

### `scripts/`

-   Veri: `import-kgm.ts`, `process-kgm.ts`, `validate-data.ts`,
    `seed-database.ts`
-   Veri tabanı: `migrate.ts`, `reset.ts`
-   Geliştirme: `setup.ts`, `health-check.ts`

Yıkıcı işlemler içeren scriptler açık uyarı ve koruma mekanizmaları
olmadan çalıştırılmamalıdır. Özellikle `reset` benzeri komutlar
varsayılan olarak gerçek veriyi silmemelidir.

### `tests/`

-   `algorithms/`: algoritma birim testleri
-   `services/`: servis testleri
-   `routes/`: API testleri
-   `integration/`: modüller arası testler
-   `e2e/`: uçtan uca testler
-   `fixtures/`: test amaçlı yol, ücret, akaryakıt ve KGM örnekleri

Test fixture verileri açıkça test verisi olarak etiketlenmeli; gerçek
veriymiş gibi kullanıcıya sunulmamalıdır.

------------------------------------------------------------------------

## 15. GitHub ve İki Kişilik Çalışma Düzeni

Tek bir `plus-otoyol` deposu kullanılacaktır. Burak ve Ömer kendi şahsi
GitHub hesaplarıyla çalışır; ortak bir GitHub hesabı paylaşmaları
gerekmez.

### Görev dağılımı

-   **Burak:** frontend, sayfa arayüzleri, ortak UI bileşenleri ve
    ilgili kullanıcı deneyimi.
-   **Ömer:** backend, algoritmalar, harita/veri entegrasyonları ve veri
    işleme mimarisi.
-   **Ortak:** mimari kararlar, API sözleşmeleri, veri modelleri, marka
    standardı ve kapsam kararları.

Bu dağılım varsayılan görev paylaşımıdır; iki tarafın anlaşmasıyla
değiştirilebilir.

### Klasör sahipliği

Bir klasörün sahibi o klasördeki değişikliklerden sorumludur. Başkasının
klasöründe değişiklik gerekiyorsa doğrudan düzenlenmez; PR yorumu veya
issue ile sahibine bildirilir.

| Alan                                   | Sahip | Not                                           |
|----------------------------------------|-------|-----------------------------------------------|
| `frontend/` (tamamı)                   | Burak | Sayfalar, bileşenler, `lib/`, frontend tipleri |
| `docs/design/`                         | Burak | Tasarım sistemi                               |
| `backend/` (tamamı)                    | Ömer  | API, servisler, algoritmalar, entegrasyonlar  |
| `data/`                                | Ömer  | Ham ve işlenmiş veri                          |
| `scripts/`                             | Ömer  | Veri ve veri tabanı scriptleri                |
| `infrastructure/`, `docker-compose.yml`| Ömer  | Docker, Nginx, izleme                         |
| `docs/api/`, `docs/algorithms/`, `docs/data/` | Ömer | Backend ve veri dokümanları            |
| `docs/contracts/`                      | Ortak | Her iki tarafın onayı gerekir                 |
| `docs/architecture/`, `docs/legal/`    | Ortak | Mimari kararlar ve hukuki gereksinimler       |
| `tests/fixtures/`                      | Ortak | Açıkça "test verisi" etiketli olmalı          |
| `backend/tests/`                       | Ömer  |                                               |
| `frontend/tests/` (oluşturulacak)      | Burak |                                               |
| Kök dosyalar (`AGENTS.md`, `README.md`, bu rehber, kök `package.json`, CI) | Ortak | Değişiklikte iki onay |

### Burak: görev listesi (frontend)

1.  **Tasarım temeli:** renk/tipografi/boşluk tokenları, `globals.css`,
    `layout.tsx`, Header, Navigation, MobileNavigation, Footer.
2.  **Ortak bileşenler (`components/common/`):** Button, Input, Select,
    Table, Card, Badge, Modal, Pagination, Loading, ErrorState,
    EmptyState.
3.  **Sayfalar:** ana sayfa, yollar (+ detay), köprüler ve tüneller
    (+ detay), akaryakıt (+ detay), son dakika (+ detay), bilgi merkezi
    (+ detay), iletişim, hukuki sayfaların şablonları.
4.  **Veri gösterimi:** ücret tabloları; kaynak, geçerlilik ve güncelleme
    tarihinin her ücret/akaryakıt kaydında görünür olması.
5.  **`lib/api.ts`:** backend iletişim katmanı; backend hazır olana kadar
    sözleşmeye uygun, test verisi olarak etiketli fixture'larla çalışmak.
6.  **SEO ve erişilebilirlik:** metadata, `sitemap.ts`, `robots.ts`,
    404/hata sayfaları, klavye ve mobil kontrolleri.
7.  **Frontend testleri ve `frontend/AGENTS.md`.**

Burak'ın yapmadığı işler: iş kuralı, ücret hesabı, veri doğrulama,
backend kodu. Bunlar API'den hazır gelir.

### Ömer: görev listesi (backend ve veri)

1.  **Backend temeli:** `server.ts`, `config/` (env, logger, database),
    middleware (hata, doğrulama, rate limit, güvenlik).
2.  **Veri modeli ve veri tabanı:** modeller, şema, migration (karar
    sonrası), seed.
3.  **KGM veri hattı:** raw → parse → normalize → validate →
    change-detect → processed; hatalı satırların raporlanması.
4.  **Algoritmalar ve testleri:** `toll.algorithm.ts` öncelikli;
    ardından `road`, `fuel`. `route.algorithm.ts` kapsam kararı gelene
    kadar boş kalır.
5.  **Servisler, controller'lar, route'lar, validator'lar:** roads,
    tolls, bridges, fuel, news, articles, contact.
6.  **Entegrasyonlar:** OSM/OSRM (karar sonrası), Google Maps URL
    yönlendirmesi.
7.  **Altyapı:** Docker, Postgres, Nginx; güvenli `reset` scripti.
8.  **Backend testleri ve `backend/AGENTS.md`.**

Ömer'in yapmadığı işler: arayüz, sayfa, bileşen, stil.

### Ortak görevler (iki taraf birlikte karar verir)

-   `docs/contracts/` altındaki API sözleşmeleri; ortak hata biçimi,
    sayfalama ve `SourceInfo` (kaynak/tarih) yapısı.
-   Frontend/backend tip paylaşımı yöntemi.
-   `.gitignore`, kök `package.json`, CI, CODEOWNERS, PR şablonu.
-   Hukuki metinlerin içeriği (uzman incelemesi dahil).
-   Kapsam değişiklikleri (örneğin yönetim paneli).

### Çalışma sırası

Her adım bir dikey dilimdir: önce sözleşme, sonra iki taraf paralel
çalışır.

| Adım | Ortak | Burak | Ömer |
|------|-------|-------|------|
| 0. Temel | §24'teki blokaj kararları, `.gitignore`, `package.json`, tsconfig (strict), CI, CODEOWNERS, `common` sözleşmesi | Tasarım tokenları, layout, `common/` bileşenleri | `server.ts`, config, middleware, loglama |
| 1. Köprü ve tünel | `bridges` sözleşmesi | Köprüler/tüneller sayfaları, tablo ve kart | Modeller, KGM verisi, `bridge.service`, `GET` uçları |
| 2. Yollar ve ücret | `roads` ve `tolls` sözleşmeleri | Yollar sayfası, `TollTable`, `TollSource` | `toll.algorithm` + testler, KGM importer, `roads`/`tolls` uçları |
| 3. İçerik | İçerik kaynağı ve iletişim formu veri politikası | Son dakika, bilgi merkezi, iletişim sayfaları | `news`, `articles`, `contact` modülleri |
| 4. Akaryakıt | Güvenilir kaynak kararı | Akaryakıt sayfaları | `fuel` servisi/algoritması |
| 5. Yayın öncesi | Hukuki inceleme, güvenlik, gerçek veri doğrulaması | SEO, erişilebilirlik, performans | Güvenlik, yedekleme, izleme, dağıtım |

### Branch yaklaşımı

Önerilen yapı:

``` text
main
└── develop
    ├── feature/frontend-contact
    ├── feature/frontend-home
    ├── feature/backend-toll
    └── feature/backend-fuel
```

-   `main`: yayınlanabilir ve kararlı sürüm.
-   `develop`: birleştirilmiş geliştirme çalışmaları.
-   `feature/...`: tek bir iş veya özellik için açılan branch.

Küçük bir ekip başlangıçta doğrudan branch kullanımıyla ilerleyebilir;
ancak `main` için koruma ve PR akışı önerilir.

### Örnek komutlar

Repoyu ilk kez indirmek:

``` bash
git clone https://github.com/GITHUB_KULLANICI_ADI/plus-otoyol.git
cd plus-otoyol
```

Güncel durumu kontrol etmek:

``` bash
git status
git branch
git pull
```

Yeni özellik branch'i açmak:

``` bash
git checkout develop
git pull origin develop
git checkout -b feature/backend-toll
```

Yalnızca belirli bir dosyayı commit'e eklemek:

``` bash
git add backend/src/algorithms/toll.algorithm.ts
git commit -m "feat: add toll algorithm"
git push -u origin feature/backend-toll
```

Bir klasördeki değişiklikleri eklemek:

``` bash
git add frontend/app/
```

Repo içindeki tüm değişiklikleri eklemek:

``` bash
git add .
```

`git add .` tüm çalışma ağacındaki değişiklikleri ekleyebileceği için
öncesinde `git status` ve `git diff` kontrol edilmelidir.

### Yetkiler

Public repo herkes tarafından görüntülenebilir; bu, herkesin push
yapabileceği anlamına gelmez. Push için repo yazma yetkisi ve uygun
kimlik doğrulama gerekir. Repo sahibinin Burak'ı collaborator olarak
eklemesi ve Burak'ın daveti kabul etmesi gerekir. İki kişinin de depo
ayarlarını yönetmesi isteniyorsa repo sahibi/collaborator ayrımı ile
GitHub Organization seçenekleri ayrıca değerlendirilmelidir.

### Güvenli çalışma kuralları

-   `main` üzerine kontrolsüz doğrudan push yapmayın.
-   Bir iş için mümkün olduğunca ayrı branch kullanın.
-   Push öncesi değişiklikleri inceleyin.
-   Başkasının commit'lerini ezmek için force push kullanmayın.
-   Çakışma çıkarsa dosyayı kimin değiştirdiğini inceleyerek çözün.
-   `.env`, API anahtarları, parolalar ve kişisel erişim tokenlarını
    commit etmeyin.
-   Büyük mimari değişiklikleri PR açıklamasında belirtin.

------------------------------------------------------------------------

## 16. Scoped Vibe Coding: Yapay Zekâ ile Çalışma Standardı

Projede yapay zekâ araçları kullanılabilir; ancak yapay zekâya tüm
projeyi kontrolsüz biçimde değiştirme yetkisi verilmemelidir.

**Temel ilke: Bir AI oturumu = bir dosya, bileşen, servis, algoritma
veya açıkça tanımlanmış küçük görev.**

### Önerilen iş akışı

1.  **Scope seç:** Hangi dosya veya sorumluluk üzerinde çalışılacağını
    belirle.
2.  **Mevcut yapıyı incelet:** İlgili dosyaları, importları, ortak
    bileşenleri, tipleri ve sözleşmeleri analiz ettir.
3.  **Önce plan iste:** AI ilk aşamada kod yazmasın; etkilenecek
    dosyaları ve riskleri açıklasın.
4.  **Kapsamı onayla:** Gereksiz dosya değişikliği olmadığını kontrol
    et.
5.  **Uygula:** Yalnızca onaylanan kapsamda değişiklik yaptır.
6.  **Doğrula:** Lint, type-check, test veya build komutlarını çalıştır.
7.  **Diff incele:** İlgisiz dosya değişikliği, paket ekleme, mimari
    sapma ve gizli bilgi sızıntısı olmadığını kontrol et.
8.  **Commit et:** İlgili dosyaları bilinçli biçimde stage et ve
    açıklayıcı mesaj kullan.

### AI için temel kurallar

-   Mevcut mimariyi kendiliğinden değiştirme.
-   İstenmeyen dosya oluşturma, silme, taşıma veya yeniden adlandırma.
-   İlgisiz dosyalara dokunma.
-   Paket eklemeden önce gerekçesini açıkla ve onay al.
-   Mevcut ortak bileşenleri incelemeden yeni benzer bileşen oluşturma.
-   Backend iş mantığını frontend'e taşıma.
-   Gerçek kaynak verisi olmadan fiyat/haber/ücret uydurma.
-   Testleri geçtiğini çalıştırmadan iddia etme.
-   Tamamlanınca değişen dosyaları, testleri ve kalan riskleri raporla.
-   Belirsiz mimari kararları varsayım olarak açıkça belirt.

### Örnek sayfa görevi

``` text
Mevcut mimariyi ve AGENTS.md kurallarını oku.
Yalnızca frontend/app/iletisim/page.tsx üzerinde çalış.
Önce mevcut Header, Footer, global CSS, ortak bileşenler ve tipleri analiz et.
İlk aşamada kod değiştirme; planı ve etkilenecek dosyaları bildir.
Onaydan sonra yalnızca bu sayfanın UI/UX uygulamasını yap.
Backend'e, başka sayfalara ve global tasarıma dokunma.
İş sonunda değişen dosyaları ve doğrulama sonuçlarını bildir.
```

### Örnek algoritma görevi

``` text
Mevcut backend mimarisini, ilgili modelleri, servisleri, tipleri ve testleri incele.
İlk aşamada hiçbir dosyayı değiştirme.
Algoritmanın girdilerini, çıktılarını, iş kurallarını, sınır durumlarını ve test gereksinimlerini açıkla.
Onaydan sonra yalnızca onaylanan algoritma ve gerekli test dosyalarında çalış.
İlgisiz dosyaları değiştirme.
Testleri gerçekten çalıştır; sonucu ve kalan riskleri bildir.
```

------------------------------------------------------------------------

## 17. AGENTS.md İçin Proje Kuralları

Kök dizindeki `AGENTS.md`, AI kodlama araçlarının projeyi nasıl
değiştirebileceğini tanımlayan ana talimat dosyasıdır.

Önerilen kurallar:

-   Önce mevcut yapıyı analiz et, sonra değişiklik yap.
-   Görev kapsamı dışında dosya değiştirme.
-   Onay olmadan dosya silme/taşıma/yeniden adlandırma.
-   Onay olmadan mimariyi, veri modelini veya API sözleşmelerini
    değiştirme.
-   TypeScript strict kurallarını koru.
-   Frontend ve backend sorumluluklarını ayır.
-   Controller'ları ince tut; iş mantığını servis/algoritma katmanında
    tut.
-   Dış kaynak verilerini doğrula.
-   Kritik algoritmalar için test yaz.
-   Gerçek dünya verisi uydurma.
-   Kritik verilerde kaynak ve tarih bilgilerini koru.
-   Ham veri ile işlenmiş veriyi ayır.
-   Gizli anahtarları repoya ekleme.
-   İş sonunda değiştirilen dosyaları, doğrulama adımlarını ve riskleri
    raporla.
-   AI'ın önerisi insan onayı olmadan mimari karara dönüşmez.

------------------------------------------------------------------------

## 18. Güvenlik ve Ortam Değişkenleri

`.env.example`, gereken değişken adlarını örnek değerlerle açıklamak
için kullanılabilir; gerçek sırlar içermez.

-   Gerçek `.env` dosyaları sürüm kontrolüne eklenmemelidir.
-   API anahtarları, veri tabanı parolaları ve erişim tokenları kod
    içine yazılmamalıdır.
-   Sunucu tarafındaki sırlar istemciye gönderilmemelidir.
-   Gelen kullanıcı girdileri doğrulanmalıdır.
-   Hatalar kullanıcıya hassas sistem ayrıntısı sızdırmamalıdır.
-   Dış servislere yapılan isteklerde zaman aşımı ve hata durumları ele
    alınmalıdır.
-   Loglara parola, token veya gereksiz kişisel veri yazılmamalıdır.
-   Rate limiting ve güvenlik middleware'leri gerçek risk ve dağıtım
    gereksinimlerine göre uygulanmalıdır.

------------------------------------------------------------------------

## 19. SEO, İçerik Kalitesi ve Erişilebilirlik

-   Her sayfanın benzersiz ve anlamlı başlık/açıklaması olmalıdır.
-   Dinamik içerik sayfalarının metadata değerleri içerikten
    üretilmelidir.
-   Canonical URL ve sitemap davranışı kontrol edilmelidir.
-   Bulunamayan içerik doğru 404 yanıtını vermelidir.
-   Sayfa başlık hiyerarşisi semantik olmalıdır.
-   Görsellerde anlamlı alternatif metin kullanılmalıdır.
-   Form alanlarının etiketleri ve hata mesajları erişilebilir
    olmalıdır.
-   Mobil görünüm, klavye navigasyonu, kontrast ve odak durumları test
    edilmelidir.
-   Yapısal veri (structured data) yalnızca içerik ve sayfa türü
    gerçekten destekliyorsa eklenmelidir.
-   İçerik doğruluğu, yalnızca SEO metni üretmekten daha önceliklidir.

------------------------------------------------------------------------

## 20. Test ve Kalite Kapıları

Bir işin tamamlanmış sayılması için yalnızca kod yazılmış olması yeterli
değildir.

Göreve göre şu kontrollerden uygun olanları çalıştırın:

-   Lint
-   TypeScript type-check
-   Birim testleri
-   Servis/API testleri
-   Build
-   Mobil ve masaüstü arayüz kontrolü
-   Erişilebilirlik kontrolü
-   Veri kaynağı ve veri tarihi kontrolü
-   Diff ve gizli bilgi kontrolü

Kök dizinden çalıştırılan komutlar (`package.json`): `npm run lint`,
`npm run typecheck`, `npm run test`, `npm run build`,
`npm run format:check`. Ayrıntı için `CONTRIBUTING.md`. Çalıştırılmamış
testler başarılı olarak raporlanmamalıdır. Boş test dosyaları Vitest'te
"geçti" göründüğü için gerçek test yazılana kadar yeşil çıktı güvence
sayılmaz.

------------------------------------------------------------------------

## 21. Kurulum Aşaması ile Geliştirme Aşamasını Ayırma

### Geçerli aşama: geliştirme (kod yazılabilir)

Klasör ve dosya iskeleti (scaffold) tamamlanmıştır. Bu rehberin yayımı
ile birlikte **uygulama kodu yazılabilir**; ancak yalnızca aşağıdaki
koşullarla:

-   Her iş §16'daki Scoped Vibe Coding akışıyla, tek bir tanımlı
    kapsamda yapılır.
-   Bir modülün kodu, ilgili `docs/contracts/` sözleşmesi iki tarafça
    onaylanmadan başlamaz (§15 çalışma sırası).
-   §24'te "blokaj" olarak işaretlenen kararlar verilmeden, o karara
    bağlı kod (framework, ORM, migration, OSRM vb.) yazılmaz. Karar
    ADR olarak `docs/architecture/` altına kaydedilir.
-   §2 ve §9 ilkeleri geçerlidir: gerçek ücret, akaryakıt veya haber
    verisi uydurulmaz; kaynak ve tarih bilgisi zorunludur.
-   Hukuki sayfalar uzman incelemesinden geçmeden yayıma hazır metinle
    doldurulmaz.
-   Kapsam dışı özellikler (§4) onay olmadan koda dökülmez.
-   Yıkıcı scriptler (`reset` vb.) koruma mekanizması olmadan
    yazılmaz.
-   Her iş sonunda lint, type-check ve ilgili testler çalıştırılır;
    çalıştırılmayan test başarılı sayılmaz.

### Tarihçe: scaffold aşaması kuralı (tamamlandı)

Projenin ilk scaffold aşamasına ilişkin kural şuydu:

**İlk aşamada yalnızca klasör ve dosya iskeleti oluşturulur. Uygulama
kodu yazılmaz.**

Bu aşamada:

-   Sayfaların gerçek UI'ı uygulanmaz.
-   API endpoint'leri kodlanmaz.
-   Algoritmalar uygulanmaz.
-   Veri tabanı şeması/migration gerçek anlamda yazılmaz.
-   Entegrasyonlar kurulmuş gibi gösterilmez.
-   Gerçek ücret, akaryakıt veya haber verisi uydurulmaz.
-   Hukuki sayfalar yayıma hazır hukuki metinlerle doldurulmaz.
-   Boş klasörler Git tarafından izlenebilsin diye gerektiğinde
    `.gitkeep` kullanılabilir.
-   Yapılandırma dosyaları ancak iskeletin tutarlı olması için gereken
    asgari içerikle oluşturulur.
-   Var olan dosyalar izinsiz silinmez veya üzerine yazılmaz.

Scaffold tamamlandıktan sonra mimari doğrulanır; ardından küçük ve
sınırlandırılmış görevlerle uygulama aşamasına geçilir. (Bu geçiş bu
sürümle yapılmıştır.)

------------------------------------------------------------------------

## 22. Önerilen Kök Dizin

``` text
PLUS-OTOYOL/
├── frontend/
├── backend/
├── data/
├── docs/
├── infrastructure/
├── scripts/
├── tests/
├── AGENTS.md
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── README.md
└── LICENSE
```

Bu ağaç başlangıçtaki hedef organizasyonu gösterir. Dosyaların gerçekten
mevcut olup olmadığı Git deposu üzerinden doğrulanmalıdır. Bu belge tek
başına dosyaların oluşturulduğunu veya kodların çalıştığını kanıtlamaz.

------------------------------------------------------------------------

## 23. Yol Haritası

### Aşama 1 --- İskelet ve ekip düzeni

-   Klasör/dosya yapısını kurmak.
-   `AGENTS.md` ve README'yi eklemek.
-   GitHub erişimlerini ve branch yaklaşımını düzenlemek.
-   Uygulama kodu eklemeden yapıyı incelemek.

### Aşama 2 --- Mimari kararlar

-   Frontend/backend çalışma komutlarını netleştirmek.
-   API sözleşmelerini belirlemek.
-   Veri tabanı, migration ve ORM kararlarını kesinleştirmek.
-   Kaynak veri envanteri ve doğrulama kurallarını yazmak.
-   Tasarım sistemini kararlaştırmak.

### Aşama 3 --- Dikey dilimler hâlinde geliştirme

-   Bir modülün uçtan uca kapsamını küçük parçalara ayırmak.
-   Önce veri sözleşmesini ve servis sorumluluğunu tanımlamak.
-   Backend ve frontend işlerini branch/PR üzerinden birleştirmek.
-   Her adımda test ve diff incelemesi yapmak.

### Aşama 4 --- Veri güvenilirliği

-   Resmî kaynakları doğrulamak.
-   İçe aktarma ve normalizasyon süreçlerini test etmek.
-   Kaynak, geçerlilik ve güncelleme tarihlerini korumak.
-   Hatalı/eksik veri davranışlarını belirlemek.

### Aşama 5 --- Yayın öncesi

-   Güvenlik ve gizlilik incelemesi.
-   Hukuki metinlerin uzman kontrolü.
-   SEO, erişilebilirlik ve performans testleri.
-   Gerçek veri doğrulaması.
-   Yedekleme, izleme ve hata raporlama planı.
-   Yayın ortamı ve geri alma planı.

Bu yol haritası bir sıralama önerisidir; tamamlanma durumu ekip
tarafından ayrıca takip edilmelidir.

------------------------------------------------------------------------

## 24. Açık Teknik Kararlar

Aşağıdaki kararlar kodlamadan önce veya ilgili modül geliştirilirken
açıkça kayda geçirilmelidir:

-   Backend framework'ü ve REST API düzeni
-   PostgreSQL kullanımı ve barındırma tercihi
-   ORM ve migration aracı
-   Frontend/backend ortak tip paylaşımı
-   Veri kaynağı başına yenileme ve doğrulama yöntemi
-   KGM PDF'lerinin format farklılıklarının ele alınması
-   Akaryakıt verisinin güvenilir kaynağı ve kapsamı
-   OSRM barındırma/kullanım tercihi
-   Haber/duyuru kaynakları ve yayın politikası
-   İçeriklerin nasıl yönetileceği (şimdilik CMS varsayılmamalı)
-   Kullanıcı girdisi veya iletişim formu varsa veri saklama politikası
-   Production dağıtımı, loglama, izleme ve yedekleme
-   Hukuki sayfaların son metinleri

### Blokaj kararları: önerildi, ekip onayı bekliyor

Blokaj niteliğindeki üç karar `docs/architecture/decisions.md`
dosyasında **Önerildi** durumunda kayıtlıdır; iki kişi onaylayana kadar
"Kabul" sayılmaz:

1.  Backend framework'ü: K-01 (Express 5 + zod + pino)
2.  Frontend/backend tip paylaşımı: K-03
3.  `docs/contracts/` ortak biçimi: `docs/contracts/common.contract.md`
    (taslak)

Aşağıdaki "açık sorular" için de aynı dosyada öneriler vardır (K-05 ile
K-13 arası); veri tabanı (K-04), OSRM (K-08) ve yönetim paneli (K-09)
bilinçli olarak ertelenmiştir.

### Repo incelemesinde çıkan açık sorular

-   **Yönetim paneli/CMS:** Gerekli mi? Haberi kim, hangi sıklıkla
    girecek? (Dosya tabanlı içerik, hazır CMS veya özel panel
    seçenekleri.)
-   **Haber/makale içerik kaynağı:** CMS yoksa içerik nerede tutulacak?
    (`data/processed/` altında news/articles şu an yok.)
-   **İletişim modülü:** `contact.routes.ts` var; controller, service,
    validator ve sözleşmesi yok. Form veri topluyorsa KVKK etkisi nedir?
-   **`facility` tipi:** Frontend'de tip var, backend modeli ve sayfası
    yok. Kapsama alınacak mı?
-   **Ücretler için ayrı sayfa:** Ücret bilgisi yol/köprü detayında mı
    gösterilecek, yoksa ayrı bir rota mı olacak?
-   **Test konumları:** `backend/tests/` ile kök `tests/` arasındaki
    ayrım ve frontend test klasörü.
-   **KGM importer konumu:** `backend/src/data/kgm/` ile
    `scripts/data/` arasındaki sorumluluk ayrımı.
-   **`route.algorithm.ts`:** Rota planlama kapsam dışıyken dosyanın
    durumu.
-   **Logo dosyaları:** Şu an boş (0 byte); gerçek varlıklar
    eklenene kadar kullanılmamalı (§6).

Karar verilmemiş konular `docs/architecture/` veya `docs/contracts/`
altında tarih ve gerekçesiyle kaydedilebilir.

------------------------------------------------------------------------

## 25. Başarı Ölçütleri

Proje ilerlemesi şu ölçütlerle değerlendirilebilir:

-   Kullanıcıya sunulan verinin kaynağı ve güncelliği izlenebilir.
-   Ücretler araç sınıfı, giriş/çıkış ve geçerlilik mantığına uygun ele
    alınır.
-   Ham veri ile işlenmiş veri birbirinden ayrıdır.
-   Frontend ve backend sorumlulukları nettir.
-   AI değişiklikleri görev kapsamıyla sınırlıdır.
-   Kritik algoritmalar test edilir.
-   Git geçmişi anlaşılır commit'ler ve kontrollü birleştirmeler içerir.
-   Hukuki metinler gerçek ürün davranışına uyar.
-   Kullanıcıya güncel olmayan veya doğrulanmamış bilgi kesinmiş gibi
    gösterilmez.
-   Site mobil, erişilebilir ve performans açısından test edilmiştir.

------------------------------------------------------------------------

## 26. Belgeyi Güncel Tutma

Bu dosya projenin yaşayan rehberidir. Mimari karar değişikliklerinde
güncellenmelidir.

Her güncellemede:

-   Kesinleşmiş kararlar ile öneriler ayrılmalı.
-   Gerçekleşmemiş özellikler tamamlanmış gibi yazılmamalı.
-   Kaldırılan özellikler kapsamdan çıkarılmalı.
-   Veri kaynakları ve entegrasyonların gerçek durumu belirtilmeli.
-   Dosya ağacı gerçek repo ile gerektiğinde karşılaştırılmalı.
-   Büyük kararların gerekçesi dokümante edilmelidir.

**Son not:** Bu belge, Plus Otoyol'un amaçlarını, planlanan kapsamını ve
teknik çalışma prensiplerini anlatır. Repo içindeki kodun mevcut
durumunu otomatik olarak doğrulamaz; gerçek durum GitHub deposu, testler
ve çalışan sistem üzerinden kontrol edilmelidir.
