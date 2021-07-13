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

  console.log();
  $('.footer-links ul li:first-child').click(() => {
    window.location.replace("/");
  })

});
