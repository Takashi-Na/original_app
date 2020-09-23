// マップの初期表示設定
let map
// 初期位置の設定
function initMap() {
  geocoder = new google.maps.Geocoder()

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 35.6809591, lng: 139.7673068 },
    zoom: 15,
  });
}
window.addEventListener('load', initMap);