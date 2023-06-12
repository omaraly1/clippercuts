document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.querySelector(".main-title");
    mainTitle.classList.add("fade-in");
  });

  const slogans = [
    "A unique barbershop experience.",
    "A cut above the rest.",
    "Where style meets tradition.",
    "Groomed to perfection.",
    "Unleash your inner dapper.",
    "Stay fresh, stay confident.",
    "Experience the art of grooming.",
    "Sharper looks, sharper lives.",
    "Your hair, our passion.",
    "Transforming hair, transforming lives.",
  ];

  var p = document.getElementById("slogan");
  p.innerHTML = "";
  var n = 0;
  const randomIndex = Math.floor(Math.random() * slogans.length);
  var str = slogans[randomIndex];
  var typeTimer = setInterval(function () {
    n = n + 1;
    p.innerHTML = str.slice(0, n);
    if (n === str.length) {
      clearInterval(typeTimer);
      p.innerHTML = str;
      n = 0;
      setInterval(function () {
        if (n === 0) {
          p.innerHTML = str;
          n = 1;
        } else {
          p.innerHTML = str;
          n = 0;
        }
      }, 500);
    }
  }, 60);

  $(document).ready(function () {
    $("#booking").submit(function (event) {
      event.preventDefault();

      var name = $("#name").val();
      var email = $("#email").val();
      var date = $("#date").val();
      var time = $("#time").val();
      var haircut = $("#haircut").val();
      var barber = $("#barber").val();

      $("#bookingModal").modal("hide");
      $(".modal-backdrop").remove();

      $("#resultBody").html(`
  <img src="./img/check.png" width="170px"/>
  <br/>
  <br/>
  <p>Thank you for booking with us, ${name}. </p>
  <p>${barber} is looking forward to seeing you at ${time} on ${date} for your ${haircut} service.</p>
  <p> A confirmation email for your appointment has been sent to ${email}. </p>
`);
 
      $("#booking").each(function () {
        this.reset();
      });
      $("#resultModal").modal("show");
    });
  });
  document.addEventListener("DOMContentLoaded", function (event) {
    var link = document.getElementById("feedbackModalLink");
    link.addEventListener("click", function (e) {
      e.preventDefault();
      $("#feedbackModal").modal("show");
    });
  });