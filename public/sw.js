self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache=>{
      return cache.addAll([
        '/index.php',
        '/authView.js',
        '/auth.js',
        '/gest.js'
      ])
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response=>{
    if (response !== underfined) {
      return response
    } else {
      return fetch(event.request).then(response=>{
        let responseClone = response.clone()

        caches.open('v1'.then(cache) => {
          cache.put(event.request, )
        })
      })
    }
  }))
})
