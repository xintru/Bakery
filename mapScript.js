function initMap() {
  // The location of Novosibirsk
  var novosibirsk = {lat: 55.026424, lng: 82.883447};
  // The map, centered at Novosibirsk
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: novosibirsk});
  // The marker, positioned at Novosibirsk
  var marker = new google.maps.Marker({position: novosibirsk, map: map});
}
