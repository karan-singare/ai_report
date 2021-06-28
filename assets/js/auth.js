$(document).ready(() => {
  const login = () => {
    const username = $('#loginEmail')[0].value;
    if (username.trim().length !== 0) {
      localStorage.setItem('user', username);
      location.replace('./dashboard.html');
    }
  };
  const logout = () => {
    localStorage.clear();
    location.replace('./');
  };

  $('#login-form button').click(() => login());
  $('#logout-btn').click(() => logout());

});
