$( document ).ready(function() {
  // console.log(document.cookie);

  let isLoged = false;
  let logingMenu;
  let regForm = document.getElementById('register-form')
  regForm.addEventListener('submit', function (event) {
    if(regForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    regForm.classList.add('was-validated');
    
    let email = document.getElementById('inputEmail4').value;
    let password = document.getElementById('inputPassword4').value;
    let passwordRep = document.getElementById('inputPassword4Repeat').value;
    if (email && password !='' && password === passwordRep) {

      let address = document.getElementById('inputAddress').value;
      let address2 = document.getElementById('inputAddress2').value;
      let city = document.getElementById('inputCity').value;
      let state = document.getElementById('inputState').value;
      let zip = document.getElementById('inputZip').value;
      
      document.cookie = `email=${email}`;
      document.cookie = `password=${password}`;
      document.cookie = `address=${address}`;
      document.cookie = `address2=${address2}`;
      document.cookie = `city=${city}`;
      document.cookie = `state=${state}`;
      document.cookie = `zip=${zip}`;
      console.log(document.cookie + '++++++');
      $('#register').modal('hide');
    }
  })

  document.getElementById('enter-btn').addEventListener('click', function () {
    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    isLoged = true;
    localStorage.setItem('isLoged', isLoged);

    if(localStorage.getItem('isLoged')) {
      logingMenu = $('#loging');
      $('#loging').replaceWith('<li class="nav-item"><a id="logout" class="nav-link" href="#section1">Log out</a></li>')
      $('#logout').click(function() {
        $(this).replaceWith(logingMenu);
      });;
    }

    console.log( document.cookie );
    console.log( localStorage.getItem('email') + ' * ' + localStorage.getItem('password') + localStorage.getItem('isLoged') );

    document.cookie = `email=${email}`;
    console.log(document.cookie);
  });
  
});