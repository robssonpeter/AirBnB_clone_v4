$(document).ready(() => {
  const selectedAmenities = {};
  $('input[type="checkbox"]').change(function () {
    const name = $(this).attr('data-name');
    const id = $(this).attr('data-id');
    let amString = '';
    if (this.checked) {
      /* Add to list */
      selectedAmenities[id] = name;
    } else {
      /* Remove from list */
      delete selectedAmenities[id];
    }
    amString = Object.values(selectedAmenities).join(', ');
    if (amString.length) {
      $('div.amenities h4').text(amString);
    } else {
      $('div.amenities h4').html('&nbsp;');
    }
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status',
    method: 'GET',
    success: function (response) {
      if (response == 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    },
    error: function (error) {
      console.error(error);
    }
  });
});
