console.log('Service Worker Loaded...');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('data ', data);
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Notified by Domstech!',
        icon: 'http://image.ibb.co/frY0Fd/tmlogo.png'
    });
});