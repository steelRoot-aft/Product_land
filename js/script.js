


//Бургер меню

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.header__menu a').click(function () {
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

// Search

$(document).ready(function () {
	// Клик по кнопке: добавляем/удаляем класс active для кнопки и поля
	$('.header__btn').click(function () {
		$(this).toggleClass('active'); // Переключаем класс для кнопки
		$('.header__input').toggleClass('active').focus(); // Переключаем класс для поля и устанавливаем фокус
	});

	// Клик по документу: убираем классы, если клик вне кнопки или поля
	$(document).click(function (event) {
		if (!$(event.target).closest('.header__btn, .header__input').length) {
			$('.header__btn').removeClass('active'); // Убираем класс с кнопки
			$('.header__input').removeClass('active'); // Убираем класс с поля
		}
	});

	// Отслеживание нажатия Enter в поле ввода
	$('.header__input').keypress(function (event) {
		if (event.which === 13) { // 13 — код клавиши Enter
			event.preventDefault(); // Предотвращаем отправку формы
			$('.header__btn').removeClass('active'); // Убираем класс с кнопки
			$('.header__input').removeClass('active'); // Убираем класс с поля
			let query = $(this).val(); // Получаем текст из input
			if (query) {
				console.log('Ищем: ' + query); // Здесь обработка поискового запроса
				performSearch(query);
			}
		}
	});
});




// Из фото в БГ

function ibg(){
		$.each($('.ibg'), function(_index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
}
ibg();

