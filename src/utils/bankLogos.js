// Banka logoları mapping
export const bankLogos = {
  // Büyük Bankalar
  "Ziraat Bankası": "/bank-logos/ziraat.png",
  "İş Bankası": "/bank-logos/isbank.png",
  "Garanti BBVA": "/bank-logos/garanti.png",
  "Akbank": "/bank-logos/akbank.png",
  "Yapı Kredi": "/bank-logos/yapikredi.png",
  "VakıfBank": "/bank-logos/vakifbank.png",
  "Halkbank": "/bank-logos/halkbank.png",
  "Denizbank": "/bank-logos/denizbank.png",
  "QNB Finansbank": "/bank-logos/qnb.png",
  "ING Bank": "/bank-logos/ing.png",
  "HSBC": "/bank-logos/hsbc.png",
  "TEB": "/bank-logos/teb.png",
  "Şekerbank": "/bank-logos/sekerbank.png",
  "Türkiye Finans": "/bank-logos/turkiyefinans.png",
  "Albaraka Türk": "/bank-logos/albaraka.png",
  "Kuveyt Türk": "/bank-logos/kuveytturk.png",
  "Vakıf Katılım": "/bank-logos/vakifkatilim.png",
  "Ziraat Katılım": "/bank-logos/ziraatkatilim.png",
  "İş Katılım": "/bank-logos/iskatilim.png",
  "Türkiye Emlak Katılım": "/bank-logos/emlakkatilim.png"
};

// Banka logosu getir
export const getBankLogo = (bankName) => {
  console.log('getBankLogo çağrıldı:', bankName);
  console.log('Logo yolu:', bankLogos[bankName]);
  return bankLogos[bankName] || null;
};

// Banka tipini kontrol et (sadece bankalar)
export const isBank = (bankName) => {
  console.log('isBank çağrıldı:', bankName);
  console.log('Banka listesinde var mı:', bankLogos.hasOwnProperty(bankName));
  
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
