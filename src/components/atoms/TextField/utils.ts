export const convertToCardNumber = (e: any) => {
  if (/^[۰-۹٠-٩0-9--]+$/.test(e)) {
    const value = e;
    const noDashNumber = value.split('-').join('');
    if (noDashNumber.length > 0) {
      return noDashNumber
        .match(new RegExp(new RegExp('.{1,4}', 'g')))
        .join('-');
    }
  }
  return '';
};
export const convertToPrice = (string: string) => {
  if (string !== '') {
    const num = String(string).replaceAll(',', '');
    // @ts-ignore
    // this func is error
    if (Number(num) !== null && Number(num) !== 'NaN') {
      const numberArray = num.match(/[۰-۹0-9]{1,3}(?=([۰-۹0-9]{3})*$)/g);
      if (numberArray) {
        return numberArray?.join(',');
      }
      return '';
    }
    return '';
  }
  return '';
};
