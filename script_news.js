// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем изображение и модальное изображение
var img = document.querySelector(".news_photo");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
document.getElementById("contactForm").addEventListener("submit", function(event){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if(name == "" || email == "" || message == "") {
    alert("All fields must be filled out");
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});
