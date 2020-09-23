// 現在地取得
function getMyPlace() {
  const output = document.getElementById('result');
  if (!navigator.geolocation) {//Geolocation apiがサポートされていない場合
    output.innerHTML = "<p>Geolocationはあなたのブラウザーでサポートされておりません</p>";
    return;
  }
  function success(position) {
    var latitude = position.coords.latitude;//緯度
    var longitude = position.coords.longitude;//経度
    // 位置情報
    var latlng = new google.maps.LatLng(latitude, longitude);
    // Google Mapsに書き出し
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,// ズーム値
      center: latlng,// 中心座標
    });
    // マーカーの新規出力
    new google.maps.Marker({
      map: map,
      position: latlng,
    });
  };
  function error() {
    //エラーの場合
    output.innerHTML = "座標位置を取得できません";
  };
  navigator.geolocation.getCurrentPosition(success, error);//成功と失敗を判断
}
window.addEventListener('click', getMyPlace);
