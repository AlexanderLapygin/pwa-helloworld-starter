self.addEventListener('install', event => {
  console.log('Service worker installing...');
  // Здесь ваши шаги по установке
});

self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
  // Здесь обработка запросов fetch
});
