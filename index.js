const submitData = (userName, UserEmail) => {
    
    const formData = {
      name: userName,
      email: UserEmail,
    };
    
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })

       .then((response) => {
     return  response.json();
    })
    .then((object) => {
      document.querySelector("body").append(object.id);
    })
      .catch(function (error) {
        alert("Error!");
        document.querySelector("body").innerHTML = error.message
        console.log(error.message);
      });
  };
  

  submitData('user', 'user@gmail.com');
