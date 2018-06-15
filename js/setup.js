'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COATS = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var MAX_WIZARD_NUMBER = 4;

var setup = document.querySelector('.setup');

var getRandom = function (list) {
  return Math.floor(Math.random() * list.length);
};

var createWizard = function () {
  var wizard = {
    name: WIZARD_NAMES[getRandom(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[getRandom(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandom(WIZARD_EYES)]
  };
  return wizard;
};

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < MAX_WIZARD_NUMBER; i++) {
  fragment.appendChild(renderWizard(createWizard()));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

// module4-task1 ---------------------------------------------------------------

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupInput = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if ((evt.keyCode === ESC_KEYCODE) && !(setupInput === document.activeElement)) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var coatColor = WIZARD_COATS[getRandom(WIZARD_COATS)];
  wizardCoat.style.fill = coatColor;
  setup.querySelector('input[name=coat-color]').value = coatColor;
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = WIZARD_EYES[getRandom(WIZARD_EYES)];
  wizardEyes.style.fill = eyesColor;
  setup.querySelector('input[name=eyes-color]').value = eyesColor;
});

wizardFireball.addEventListener('click', function () {
  var fireballColor = WIZARD_FIREBALL[getRandom(WIZARD_FIREBALL)];
  wizardFireball.style.backgroundColor = fireballColor;
  setup.querySelector('input[name=fireball-color]').value = fireballColor;
});
