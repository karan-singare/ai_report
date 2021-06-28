$(document).ready(() => {
  $('#hero form select').change((event) => {
    if (event.target.value === 'links') {
      $('#links-form-control').slideToggle();
      $('#csv-form-control').slideToggle();
    } else {
      $('#links-form-control').slideToggle();
      $('#csv-form-control').slideToggle();
    }
  });

});
