// Banka logoları mapping
export const bankLogos = {
  // Büyük Bankalar
  "Ziraat Bankası": "/bank-logos/ziraat.png?v=1",
  "İş Bankası": "/bank-logos/isbank.png?v=1",
  "Garanti BBVA": "/bank-logos/garanti.png?v=1",
  "Akbank": "/bank-logos/akbank.png?v=1",
  "Yapı Kredi": "/bank-logos/yapikredi.png?v=1",
  "VakıfBank": "/bank-logos/vakifbank.png?v=1",
  "Halkbank": "/bank-logos/halkbank.png?v=1",
  "Denizbank": "/bank-logos/denizbank.png?v=1",
  "QNB Finansbank": "/bank-logos/qnb.png?v=1",
  "ING Bank": "/bank-logos/ing.png?v=1",
  "HSBC": "/bank-logos/hsbc.png?v=1",
  "TEB": "/bank-logos/teb.png?v=1",
  "Şekerbank": "/bank-logos/sekerbank.png?v=1",
  "Türkiye Finans": "/bank-logos/turkiyefinans.png?v=1",
  "Albaraka Türk": "/bank-logos/albaraka.png?v=1",
  "Kuveyt Türk": "/bank-logos/kuveytturk.png?v=1",
  "Vakıf Katılım": "/bank-logos/vakifkatilim.png?v=1",
  "Ziraat Katılım": "/bank-logos/ziraatkatilim.png?v=1",
  "İş Katılım": "/bank-logos/iskatilim.png?v=1",
  "Türkiye Emlak Katılım": "/bank-logos/emlakkatilim.png?v=1"
};

// Banka logosu getir
export const getBankLogo = (bankName) => {
  return bankLogos[bankName] || null;
};

// Banka tipini kontrol et (sadece bankalar)
export const isBank = (bankName) => {
  if (!bankName) return false;
  
  // Direkt olarak bankLogos objesinde varsa banka olarak kabul et
  return bankLogos.hasOwnProperty(bankName);
};

// Banka rengi getir (logo yoksa renk kullan)
export const getBankColor = (bankName) => {
  const bankColors = {
    "Ziraat Bankası": "bg-red-600",
    "İş Bankası": "bg-blue-600", 
    "Garanti BBVA": "bg-green-500",
    "Akbank": "bg-red-700",
    "Yapı Kredi": "bg-blue-600",
    "VakıfBank": "bg-green-700",
    "Halkbank": "bg-blue-800",
    "Denizbank": "bg-blue-400",
    "QNB Finansbank": "bg-purple-600",
    "ING Bank": "bg-orange-500",
    "HSBC": "bg-red-700",
    "TEB": "bg-blue-600",
    "Şekerbank": "bg-green-500",
    "Türkiye Finans": "bg-blue-600",
    "Albaraka Türk": "bg-green-600",
    "Kuveyt Türk": "bg-green-700",
    "Vakıf Katılım": "bg-green-600",
    "Ziraat Katılım": "bg-green-600",
    "İş Katılım": "bg-blue-600",
    "Türkiye Emlak Katılım": "bg-blue-600"
  };
  
  return bankColors[bankName] || "bg-gradient-to-r from-blue-600 to-purple-600";
};
