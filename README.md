# IBAN Kasa - Güvenli IBAN Kasası

Güvenli IBAN yönetimi uygulaması. Kullanıcılar kendi veya başkalarına ait IBAN bilgilerini güvenli şekilde kaydedip hızlıca erişebilirler.

## Özellikler

### 🔐 Güvenlik
- **Şifreleme**: IBAN bilgileri AES şifreleme ile güvenli şekilde saklanır
- **Yerel Depolama**: Veriler cihazda şifrelenmiş olarak saklanır

### 📱 Mobil Uygulama Deneyimi
- **PWA Desteği**: Ana ekrana eklenebilir
- **Offline Çalışma**: İnternet olmadan da kullanılabilir
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm

### 💳 IBAN Yönetimi
- **Otomatik Format**: IBAN'lar otomatik olarak formatlanır
- **Doğrulama**: IBAN formatı otomatik kontrol edilir
- **Banka Tanıma**: Türk bankaları otomatik algılanır
- **QR Kod**: IBAN'lar için QR kod oluşturma

### 🔍 Arama ve Filtreleme
- **Akıllı Arama**: İsim, açıklama ve etiketlerde arama
- **Banka Filtresi**: Banka adına göre filtreleme
- **Etiket Sistemi**: IBAN'ları kategorilere ayırma

### 📋 Hızlı Erişim
- **Tek Tıkla Kopyalama**: IBAN'ları panoya kopyalama
- **QR Kod Tarama**: IBAN'ları QR kod ile paylaşma
- **Hızlı Düzenleme**: Kolay düzenleme ve silme

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

## Kullanım

1. **İlk Kullanım**: Uygulamayı açın ve "IBAN Ekle" butonuna tıklayın
2. **IBAN Ekleme**: 
   - İsim (zorunlu)
   - IBAN (zorunlu, otomatik formatlanır)
   - Banka adı (opsiyonel, otomatik algılanır)
   - Açıklama ve etiketler (opsiyonel)
3. **Arama**: Üst kısımdaki arama kutusunu kullanın
4. **Filtreleme**: Banka dropdown'ından filtreleme yapın
5. **Kopyalama**: IBAN kartındaki kopya ikonuna tıklayın
6. **QR Kod**: QR kod ikonuna tıklayarak QR kod görüntüleyin

## Teknolojiler

- **React 19**: Modern React hooks ve functional components
- **Vite**: Hızlı build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon set
- **CryptoJS**: AES şifreleme
- **QRCode.react**: QR kod oluşturma
- **IBAN**: IBAN doğrulama
- **React Hot Toast**: Bildirimler

## Güvenlik

- Tüm IBAN verileri AES-256 şifreleme ile korunur
- Veriler hiçbir zaman buluta gönderilmez
- Offline çalışma ile internet bağımlılığı yok

## PWA Özellikleri

- Ana ekrana eklenebilir
- Offline çalışma

## Lisans

MIT License

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## Destek

Sorunlar için GitHub Issues kullanın.
