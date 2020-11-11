if ('serviceWoker' in navigator) {
  navigator.serviceWoker.register('/sw.js')
  .then(reg=>{
    if(req.installing) {
      console.log('Service worker installing')
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }
  }).catch(error=>{
    console.log('Registration failed with ' + error)
  })
}
