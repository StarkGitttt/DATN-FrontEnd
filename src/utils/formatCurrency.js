function formatCurrency(type, price) {
   // 'vi-VN'
   const currency = new Intl.NumberFormat(type, {
      style: 'currency',
      currency: 'VND',
   }).format(price);
   return currency;
}

export default formatCurrency;
