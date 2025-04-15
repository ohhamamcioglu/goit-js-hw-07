// 1. Tüm .item öğelerini seç
const categories = document.querySelectorAll('#categories .item');

// 2. Kaç kategori olduğunu konsola yazdır
console.log(`Number of categories: ${categories.length}`);

// 3. Her kategori için başlık ve içerik sayısını yazdır
categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.lotitleg(`Elements: ${itemsCount}`);
});
