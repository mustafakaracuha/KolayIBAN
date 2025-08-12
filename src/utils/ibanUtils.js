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
