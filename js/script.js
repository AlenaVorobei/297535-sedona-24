var link = document.querySelector(".button");
var popup = document.querySelector(".booking-form");
var checkin = popup.querySelector(".chek-in-date");
var form = document.querySelector("form");
var checkout = popup.querySelector("[name=chek-out-date]");
var adults = popup.querySelector("[name=adults-number]");
var kids = popup.querySelector("[name=kids-number]");
/*var storagekids = localStorage.getItem("kids-number")
var storageadults = localStorage.getItem("adults-number")*/
var isStorageSupport = true;
var storagekids = "";
var storageadults = "";

try {
    storagekids = localStorage.getItem("kids");
    storageadults = localStorage.getItem("adults");
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("search-form-visible");
    checkin.focus();
    if (storagekids) {
      kids.value = storagekids;
    }
    if (storageadults) {
      adults.value = storageadults;
    }
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!checkin.value || !checkout.value || !adults.value || !kids.value) {
      evt.preventDefault();
      popup.classList.add("search-form-error");
       } else {
          if(isStorageSupport) {
      localStorage.setItem("adults-number", adults.value);
      localStorage.setItem("kids-number", kids.value)
    }
  }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("search-form-visible")) {
            popup.classList.remove("search-form-visible");
            popup.classList.remove("search-form-error");
        }
    }
});
