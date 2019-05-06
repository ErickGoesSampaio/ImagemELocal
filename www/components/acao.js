function funciona(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL });
    saveToPhotoToAlbum: true;

    function onSuccess(imageData) {
        var image = document.getElementById('imagem');
        image.src = "data:image/jpeg;base64," + imageData;
    };

    function onFail(message) {
        alert('Failed because: ' + message);
    };

    function mapa(position){
        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

        var map = L.mapquest.map('map', {
        center: [position.coords.latitude, position.coords.longitude],
        layers: L.mapquest.tileLayer('map'),
        zoom: 15
        });
        L.marker([position.coords.latitude, position.coords.longitude], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup('Monguagá, SP').addTo(map);

          L.circle([position.coords.latitude, position.coords.longitude], { radius: 200 }).addTo(map);
        map.addControl(L.mapquest.control());

        document.getElementById('longitude').value = position.coords.longitude;
      document.getElementById('latitude').value = position.coords.latitude;
      };
      navigator.geolocation.getCurrentPosition(mapa);
}
