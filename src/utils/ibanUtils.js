import IBAN from 'iban'

export const validateIBAN = (iban) => {
  return IBAN.isValid(iban)
}

export const formatIBAN = (iban) => {
  return iban.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || iban
}

export const detectBank = (iban) => {
  // Simple Turkish bank detection based on IBAN prefix
  const cleanIban = iban.replace(/\s/g, '')
  if (cleanIban.startsWith('TR')) {
    const bankCode = cleanIban.substring(4, 8)
    // This is a simplified mapping - you can expand this
    const bankMap = {
      '0010': 'Ziraat Bankası',
      '0012': 'Halkbank',
      '0015': 'VakıfBank',
      '0062': 'Garanti BBVA',
      '0064': 'İş Bankası',
      '0067': 'Yapı Kredi',
      '0046': 'Akbank'
    }
    return bankMap[bankCode] || ''
  }
  return ''
}

export const turkishBanks = [
  'Ziraat Bankası', 'Garanti BBVA', 'İş Bankası', 'Yapı Kredi', 'Akbank',
  'Halkbank', 'VakıfBank', 'QNB Finansbank', 'Denizbank', 'TEB',
  'ING Bank', 'HSBC', 'Enpara', 'Papara', 'PayTR'
]
