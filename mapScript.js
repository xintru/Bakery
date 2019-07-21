function initMap() {
  // The location of Uluru
  var novosibirsk = {lat: 55.026424, lng: 82.883447};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: novosibirsk});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: novosibirsk, map: map});
}
