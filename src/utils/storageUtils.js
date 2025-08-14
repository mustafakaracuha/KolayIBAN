import CryptoJS from 'crypto-js'

export const generateEncryptionKey = () => {
  // 32 karakterlik rastgele bir anahtar oluşturuyoruz
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export const encryptData = (data, encryptionKey = 'default-key-123') => {
  // Verileri AES şifreleme ile şifreleyiyoruz
  return CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString()
}

export const decryptData = (encryptedData, encryptionKey = 'default-key-123') => {
  // Şifrelenmiş verileri AES şifresini kullanarak çözüyoruz
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))  
  } catch (error) {
    return []
  }
}

export const loadIbans = (encryptionKey) => {
  try {
    // localStorage'dan şifrelenmiş verileri çekiyoruz
    const saved = localStorage.getItem('iban-saver-data')
    // Eğer veri varsa, şifresini çözüyoruz veya boş dizi dönüyoruz
    if (saved) {
      return decryptData(saved, encryptionKey) || []
    }
    return []
  } catch (error) {
    console.error('Error loading IBANs:', error)
    return []
  }
}

export const saveIbans = (ibans, encryptionKey) => {
  try {
    // Verileri şifreleyip localStorage'a kaydediyoruz
    const encrypted = encryptData(ibans, encryptionKey)
    localStorage.setItem('iban-saver-data', encrypted)
    // Başarılı olursa true dönüyoruz
    return true
  } catch (error) {
    console.error('Error saving IBANs:', error)
    return false
  }
}
