function validate(Email,Password) {
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;

    if (Email === "trinesh@gmail.com" & Password === "1234") {
        location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd5V7h2a8lb4LbGZY2Mh42D6bStH-c6VGEabDQ6shm1N2rCwQ/viewform?usp=sf_link";
        alert("Login Successfully");

    }
    else {
        alert("Login Failed");
        
    }
}

