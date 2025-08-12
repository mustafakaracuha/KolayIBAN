import IBAN from "iban";

export const validateIBAN = (iban) => {
  return IBAN.isValid(iban);
};

export const formatIBAN = (iban) => {
  return (
    iban
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ") || iban
  );
};

export const bankCodes = {
  "0010": "Ziraat Bankası",
  "0062": "Garanti BBVA",
  "0064": "İş Bankası",
  "0067": "Yapı Kredi",
  "0046": "Akbank",
  "0012": "Halkbank",
  "0015": "VakıfBank",
  "0111": "QNB Finansbank",
  "0134": "Denizbank",
  "0032": "TEB",
  "0099": "ING Bank",
  "0123": "HSBC",
  "0059": "Şekerbank",
  "0206": "Türkiye Finans",
  "0203": "Albaraka Türk",
  "0205": "Kuveyt Türk",
  "0210": "Vakıf Katılım",
  "0211": "Ziraat Katılım",
  "0214": "Türkiye Emlak Katılım"
};

export const turkishBanks = [
  "Ziraat Bankası",
  "Garanti BBVA",
  "İş Bankası",
  "Yapı Kredi",
  "Akbank",
  "Halkbank",
  "VakıfBank",
  "QNB Finansbank",
  "Denizbank",
  "TEB",
  "ING Bank",
  "HSBC",
  "Şekerbank",
  "Türkiye Finans",
  "Albaraka Türk",
  "Kuveyt Türk",
  "Vakıf Katılım",
  "Ziraat Katılım",
  "İş Katılım",
  "Türkiye Emlak Katılım"
];

// IBAN'dan banka adını çıkar
export const getBankFromIBAN = (iban) => {
  if (!iban || iban.length < 7) return null;
  
  const cleanIban = iban.replace(/\s/g, "").toUpperCase();
  
  // Debug için log
  console.log('IBAN:', cleanIban);
  console.log('IBAN karakterleri:', cleanIban.split('').map((char, i) => `${i}:${char}`).join(' '));
  
  // TR800006200050000006600832 -> 0062 (5-8. haneler)
  const bankCode = cleanIban.substring(5, 9);
  console.log('Banka kodu:', bankCode);
  
  const detectedBank = bankCodes[bankCode];
  console.log('Tespit edilen banka:', detectedBank);
  
  return detectedBank || null;
};
