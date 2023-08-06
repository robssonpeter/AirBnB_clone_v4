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
    $('div.amenities h4').text(amString);
  });
});
