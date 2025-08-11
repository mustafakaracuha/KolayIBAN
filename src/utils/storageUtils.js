import CryptoJS from 'crypto-js'

export const encryptData = (data, encryptionKey = 'default-key-123') => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString()
}

export const decryptData = (encryptedData, encryptionKey = 'default-key-123') => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  } catch (error) {
    return []
  }
}

export const loadIbans = (encryptionKey) => {
  try {
    const saved = localStorage.getItem('iban-saver-data')
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
    const encrypted = encryptData(ibans, encryptionKey)
    localStorage.setItem('iban-saver-data', encrypted)
    return true
  } catch (error) {
    console.error('Error saving IBANs:', error)
    return false
  }
}

export const checkLockStatus = () => {
  return localStorage.getItem('iban-saver-pin') !== null
}

export const setupPin = (pin) => {
  localStorage.setItem('iban-saver-pin', pin)
}

export const verifyPin = (pin) => {
  return pin === localStorage.getItem('iban-saver-pin')
}

export const removePin = () => {
  localStorage.removeItem('iban-saver-pin')
}
