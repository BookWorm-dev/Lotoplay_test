const popup = document.querySelector('#popup');
const popupButtons = document.querySelectorAll('[data-popup-button]');
const popupClose = popup.querySelector('[data-popup-close]');
const popupWindow = popup.querySelector('[data-popup-window]');
const menuButton = document.querySelector('.menu_button');
const menu = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav__link');

// Mobile menu
menuButton.addEventListener('click', () => {
	menu.classList.toggle('active');
	menuButton.classList.toggle('active');
});

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.remove('active');
		menuButton.classList.remove('active');
	});
});

// Popup functions
popupButtons.forEach(btn => {
	btn.addEventListener('click', () => popup.classList.add('active'));
});

popupClose.addEventListener('click', () => popup.classList.remove('active'));
popup.addEventListener('click', () => popup.classList.remove('active'));
popupWindow.addEventListener('click', e => e.stopPropagation());

// Form handling function
function handleFormSubmit(form) {
	// Get form data
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);

	// Basic validation
	const name = data.name?.trim();
	const phone = data.phone?.trim();
	const email = data.email?.trim();
	const message = data.message?.trim();

	if (!name || (!phone && !email)) {
		alert("Будь ласка, заповніть обов'язкові поля");
		return false;
	}

	// Log to console (for testing)
	console.log('📧 Форма отправлена:', data);

	// Show success message
	alert("✅ Форма успішно відправлена! Ми зв'яжемося з вами найближчим часом.");

	// Close popup if it's open
	if (popup) {
		popup.classList.remove('active');
	}

	// Reset form
	form.reset();

	// Prevent real submission
	return false;
}

// Initialize all forms
document.addEventListener('DOMContentLoaded', function () {
	// Add submit handlers to all forms
	document.querySelectorAll('form').forEach(form => {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			handleFormSubmit(this);
		});
	});
});
