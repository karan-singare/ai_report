$(document).ready(() => {
  const origin = window.location.origin;
  const login = () => {
    const username = $('#loginEmail')[0].value;
    if (username.trim().length !== 0) {
      localStorage.setItem('user', username);
      location.replace(origin + '/dashboard.html');
    }
  };
  const logout = () => {
    localStorage.clear();
    location.replace(origin);
  };

  $('#login-form button').click(() =>login());
  $('#logout-btn').click(() =>logout());

});
