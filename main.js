

function validate() {
    var userId = document.getElementById("userID");
    var zipCode = document.getElementById("postCode");
    var gender1 = document.getElementById("male");
    var gender2 = document.getElementById("female");
    var lang1 = document.getElementById("lang");
    var lang2 = document.getElementById("lang2");

    if (userId.value.length < 6) {
        alert("Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä.");
        userId.focus();
        return false;
      }
    
      if (zipCode.value.length < 5) {
        alert("Postinumerossa pitää olla 5 numeroa.");
        zipCode.focus();
        return false;
      }
      if (!gender1.checked && !gender2.checked) {
        alert("Valitse sukupuoli.");
        return false;
      }
      if (!lang1.checked && !lang2.checked) {
        alert("Valitse kieli.");
        return false;
      }
    
      return true;
    }

    function validateEmail() {
        var email = document.getElementById("mail");
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(email.value.match(mailformat)) {
            document.form1.text1.focus();
            return true;
        } else {
            alert("Sähköpostiosoitteen tulee olla sähköpostiosoitteen muotoinen.");
            document.form1.text1.focus();
            return false;
        }
    }

