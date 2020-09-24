// マップの表示設定
let map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // center: { lat: 35.6809591, lng: 139.7673068 }, これは東京駅
    zoom: 15,
  });

  // 現在地の取得
  let a = navigator.geolocation.getCurrentPosition(get_pos);
  function get_pos(position) {
    let lat = position.coords.latitude;　// 緯度
    let lng = position.coords.longitude; // 経度
    let latLng = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({　// 現在地の位置設定とアイコンのカスタマイズ
      position: latLng,
      map: map,
    });
    map.setCenter(latLng);　// 地図の中央に現在地を表示する
  }
}
window.addEventListener('load', initMap);