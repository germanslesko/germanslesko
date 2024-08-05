// Функции для HTML - HTML ( Main menu ) "Home"
// Функция для анимации картинки - в блоке про новости о игре

document.addEventListener('DOMContentLoaded', function() {
  const images = [
    'battle_of_w1.jpeg',
    'battle_of_w2.jpeg',
    'battle_of_w3.jpeg'
  ];

  const newsImage = document.getElementById('newsImage');
  let currentIndex = 0; // Начинаем с нулевого индекса

  function changeImage() {
    newsImage.classList.remove('fade-in'); // Удаляем класс появления

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      newsImage.src = images[currentIndex];
      newsImage.classList.add('fade-in'); // Добавляем класс для появления
    }, 500); // Ждем 500 миллисекунд перед следующей сменой изображения
  }

  setInterval(changeImage, 3000); // Меняем изображение каждые 3 секунды, начиная сразу после показа первой картинки
});
function showDescription(spellName, descriptionId) {
    var description = document.getElementById(descriptionId);
    description.textContent = spellName;
    description.style.display = 'block';
}

var descriptionTimer;

function showDescription(spellName, descriptionId) {
    var description = document.getElementById(descriptionId);
    description.textContent = spellName;
    description.style.display = 'block';

    setTimeout(function() {
        description.style.transition = 'opacity 1s';
        description.style.opacity = '0';
        setTimeout(function() {
            description.style.display = 'none';
        }, 1000); // Исчезновение после плавного затухания
    }, 5000); // Исчезновение через 5 секунд

    // После 5 секунд снова устанавливаем видимость текста
    setTimeout(function() {
        description.style.display = 'block';
        description.style.opacity = '1';
        description.style.transition = '';
    }, 0); // После 6 секунд
}



document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var popupBanner = document.getElementById('popupBanner');
        popupBanner.style.display = 'block';
        setTimeout(function() {
            var countdown = document.getElementById('countdown');
            countdown.innerText = '3'; // Начало обратного отсчета
            setTimeout(function() {
                countdown.innerText = '2';
                setTimeout(function() {
                    countdown.innerText = '1';
                    showCloseButton();
                }, 1000); // После 2 секунд
            }, 1000); // После 1 секунды
        }, 3000); // После 3 секунд
    }, 5000); // Появление баннера спустя 5 секунд
});

function showCloseButton() {
    var closeButton = document.getElementById('closeButton');
    closeButton.style.display = 'block';
}

function closeBanner() {
    var popupBanner = document.getElementById('popupBanner');
    popupBanner.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');

  stars.forEach(function(star) {
    star.addEventListener('mouseover', function() {
      const value = parseInt(star.getAttribute('data-value'));
      stars.forEach(function(innerStar, index) {
        innerStar.classList.toggle('active', index < value);
      });
    });

    star.addEventListener('click', function() {
      const value = parseInt(star.getAttribute('data-value'));
      stars.forEach(function(innerStar, index) {
        innerStar.classList.toggle('active', index < value);
      });
    });
  });
});



function closeBanner_r() {
   document.getElementById('popupBanner_r').style.display = 'none';
 }

 document.addEventListener('DOMContentLoaded', function() {
   const stars = document.querySelectorAll('.star');
   const popupBannerText_r = document.getElementById('popupBannerText_r');
   const popupBanner_r = document.getElementById('popupBanner_r');

   stars.forEach(function(star) {
     star.addEventListener('mouseover', function() {
       const value = parseInt(star.getAttribute('data-value'));
       stars.forEach(function(innerStar, index) {
         innerStar.classList.toggle('active', index < value);
       });
     });

     star.addEventListener('click', function() {
       const value = parseInt(star.getAttribute('data-value'));
       stars.forEach(function(innerStar, index) {
         innerStar.classList.toggle('active', index < value);
       });

       // Уникальный текст для каждой звезды
       const texts = [
         "Sorry to hear about your appreciation of this site, but that's just a reason to try harder.",
         "It's better than 1, but still not good, I'll try to improve.",
         "For some it may be the golden mean, but not for me, I'll keep working.",
         "I am very pleased with this mark, I am glad that the work is worthy of this mark, I will keep trying harder.",
         "5 - Perfect, but nothing is perfect, so I will keep thinking about what can be improved and simplified."
       ];

       // Установка текста для баннера при клике на звезду
       popupBanner_r.style.display = 'block';
       popupBannerText_r.innerText = texts[value - 1]; // Используем value - 1, так как индексация массива начинается с 0
     });
   });
 });
