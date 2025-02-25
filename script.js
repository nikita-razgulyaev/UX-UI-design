/*Включение и выключение лампы*/
let currentState = false; // Изначальное состояние: выключено

function toggleImage() {
  let img = document.getElementById("lamp");
  if (currentState) {
    img.src = "images/lamp_off.png"; // Выключить
    img.alt = "lamp off";
  } else {
    img.src = "images/lamp_on.png"; // Включить
    img.alt = "lamp on";
  }
  currentState = !currentState; // Переключить состояние
};

/*Скролл до элемента при нажатии*/
function scrollToSectionUXAndUI() {
  const section = document.getElementById('UXAndUI');
  section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionUX() {
  const section = document.getElementById('UX');
  section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionUI() {
  const section = document.getElementById('UI');
  section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionDevelopmentSteps() {
  const section = document.getElementById('DevelopmentSteps');
  section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionSource() {
  const section = document.getElementById('sources');
  section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionUsefulLink() {
  const section = document.getElementById('usefulLink');
  section.scrollIntoView({ behavior: 'smooth' });
}

/*Движение по этапам*/

/*главные функции этапов*/
function animateStepOne() {
  changeStateHint();
  setTimeout(NewClassStartPoint, 50); //start point
  setTimeout(OldClassStartPoint, 150); //start point

  setTimeout(NewClassPointN1, 100);
  setTimeout(OldClassPointN1, 250);

  setTimeout(NewClassPointN2, 200);
  setTimeout(OldClassPointN2, 350);

  setTimeout(NewClassPointN3, 300);
  setTimeout(OldClassPointN3, 450);

  setTimeout(NewClassPointN4, 400);
  setTimeout(OldClassPointN4, 550);

  setTimeout(NewClassPointN5, 500);
  setTimeout(OldClassPointN5, 650);

  setTimeout(NewClassPointN6, 600);
  setTimeout(OldClassPointN6, 750);

  setTimeout(NewClassCheckPointOne, 700); //check point
  setTimeout(stepOneChangeBackground, 700); //active step
  setTimeout(stepOneNewTriangleBackground, 700); //active triangle
  setTimeout(toggleStepOneIcon, 700); //active icon
}

function animateStepTwo() {
  changeStateHint();

  setTimeout(NewClassPointN7, 100);
  setTimeout(OldClassPointN7, 250);

  setTimeout(NewClassPointN8, 200);
  setTimeout(OldClassPointN8, 350);

  setTimeout(NewClassPointN9, 300);
  setTimeout(OldClassPointN9, 450);

  setTimeout(NewClassPointN10, 400);
  setTimeout(OldClassPointN10, 550);

  setTimeout(NewClassPointN11, 500);
  setTimeout(OldClassPointN11, 650);

  setTimeout(NewClassPointN12, 600);
  setTimeout(OldClassPointN12, 750);

  setTimeout(NewClassPointN13, 700);
  setTimeout(OldClassPointN13, 850);

  setTimeout(NewClassPointN14, 800);
  setTimeout(OldClassPointN14, 950);

  setTimeout(NewClassPointN15, 900);
  setTimeout(OldClassPointN15, 1050);

  setTimeout(NewClassPointN16, 1000);
  setTimeout(OldClassPointN16, 1150);

  setTimeout(NewClassPointN17, 1100);
  setTimeout(OldClassPointN17, 1250);

  setTimeout(NewClassPointN18, 1200);
  setTimeout(OldClassPointN18, 1350);

  setTimeout(NewClassPointN19, 1300);
  setTimeout(OldClassPointN19, 1450);

  setTimeout(NewClassPointN20, 1400);
  setTimeout(OldClassPointN20, 1550);

  setTimeout(NewClassCheckPointTwo, 1500); // check point
  setTimeout(stepTwoChangeBackground, 1500); // active step
  setTimeout(stepTwoNewTriangleBackground, 1500); // active triangle
  setTimeout(toggleStepTwoIcon, 1500); // active icon
}

function animateStepThree() {
  changeStateHint();

  setTimeout(NewClassPointN21, 100);
  setTimeout(OldClassPointN21, 250);

  setTimeout(NewClassPointN22, 200);
  setTimeout(OldClassPointN22, 350);

  setTimeout(NewClassPointN23, 300);
  setTimeout(OldClassPointN23, 450);

  setTimeout(NewClassPointN24, 400);
  setTimeout(OldClassPointN24, 550);

  setTimeout(NewClassPointN25, 500);
  setTimeout(OldClassPointN25, 650);

  setTimeout(NewClassPointN26, 600);
  setTimeout(OldClassPointN26, 750);

  setTimeout(NewClassPointN27, 700);
  setTimeout(OldClassPointN27, 850);

  setTimeout(NewClassPointN28, 800);
  setTimeout(OldClassPointN28, 950);

  setTimeout(NewClassPointN29, 900);
  setTimeout(OldClassPointN29, 1050);

  setTimeout(NewClassPointN30, 1000);
  setTimeout(OldClassPointN30, 1150);

  setTimeout(NewClassPointN31, 1100);
  setTimeout(OldClassPointN31, 1250);

  setTimeout(NewClassPointN32, 1200);
  setTimeout(OldClassPointN32, 1350);

  setTimeout(NewClassPointN33, 1300);
  setTimeout(OldClassPointN33, 1450);

  setTimeout(NewClassPointN34, 1400);
  setTimeout(OldClassPointN34, 1550);

  setTimeout(NewClassCheckPointThree, 1500); // check point
  setTimeout(stepThreeChangeBackground, 1500); // active step
  setTimeout(stepThreeNewTriangleBackground, 1500); // active triangle
  setTimeout(toggleStepThreeIcon, 1500); // active icon
}

function animateStepFour() {
  changeStateHint();

  setTimeout(NewClassPointN35, 100);
  setTimeout(OldClassPointN35, 250);

  setTimeout(NewClassPointN36, 200);
  setTimeout(OldClassPointN36, 350);

  setTimeout(NewClassPointN37, 300);
  setTimeout(OldClassPointN37, 450);

  setTimeout(NewClassPointN38, 400);
  setTimeout(OldClassPointN38, 550);

  setTimeout(NewClassPointN39, 500);
  setTimeout(OldClassPointN39, 650);

  setTimeout(NewClassPointN40, 600);
  setTimeout(OldClassPointN40, 750);

  setTimeout(NewClassPointN41, 700);
  setTimeout(OldClassPointN41, 850);

  setTimeout(NewClassPointN42, 800);
  setTimeout(OldClassPointN42, 950);

  setTimeout(NewClassPointN43, 900);
  setTimeout(OldClassPointN43, 1050);

  setTimeout(NewClassPointN44, 1000);
  setTimeout(OldClassPointN44, 1150);

  setTimeout(NewClassPointN45, 1100);
  setTimeout(OldClassPointN45, 1250);

  setTimeout(NewClassPointN46, 1200);
  setTimeout(OldClassPointN46, 1350);

  setTimeout(NewClassPointN47, 1300);
  setTimeout(OldClassPointN47, 1450);

  setTimeout(NewClassPointN48, 1400);
  setTimeout(OldClassPointN48, 1550);

  setTimeout(NewClassCheckPointFour, 1500); // check point
  setTimeout(stepFourChangeBackground, 1500); // active step
  setTimeout(stepFourNewTriangleBackground, 1500); // active triangle
  setTimeout(toggleStepFourIcon, 1500); // active icon
}

function animateStepFive() {
  changeStateHint();

  setTimeout(NewClassPointN49, 100);
  setTimeout(OldClassPointN49, 250);

  setTimeout(NewClassPointN50, 200);
  setTimeout(OldClassPointN50, 350);

  setTimeout(NewClassPointN51, 300);
  setTimeout(OldClassPointN51, 450);

  setTimeout(NewClassPointN52, 400);
  setTimeout(OldClassPointN52, 550);

  setTimeout(NewClassPointN53, 500);
  setTimeout(OldClassPointN53, 650);

  setTimeout(NewClassPointN54, 600);
  setTimeout(OldClassPointN54, 750);

  setTimeout(NewClassPointN55, 700);
  setTimeout(OldClassPointN55, 850);

  setTimeout(NewClassPointN56, 800);
  setTimeout(OldClassPointN56, 950);

  setTimeout(NewClassPointN57, 900);
  setTimeout(OldClassPointN57, 1050);

  setTimeout(NewClassPointN58, 1000);
  setTimeout(OldClassPointN58, 1150);

  setTimeout(NewClassPointN59, 1100);
  setTimeout(OldClassPointN59, 1250);

  setTimeout(NewClassPointN60, 1200);
  setTimeout(OldClassPointN60, 1350);

  setTimeout(NewClassPointN61, 1300);
  setTimeout(OldClassPointN61, 1450);

  setTimeout(NewClassPointN62, 1400);
  setTimeout(OldClassPointN62, 1550);

  setTimeout(NewClassCheckPointFive, 1500); // check point
  setTimeout(stepFiveChangeBackground, 1500); // active step
  setTimeout(stepFiveNewTriangleBackground, 1500); // active triangle
  setTimeout(toggleStepFiveIcon, 1500); // active icon
}


/*объявление подсказки (её составляющих)*/
const hintBackground = document.getElementById('hintBackground');
const hint = document.getElementById('hint');
const hintText = document.getElementById('hintText');

/*состояния подсказки*/

/*не активное состояние подсказки*/
const activeHintBackground = 'hint-background';
const activeHint = 'hint';
const activehintText = 'hint-text';

/*не активное состояние подсказки*/
const inactiveHintBackground = 'hint-background-inactive';
const inactiveHint = 'hint-inactive';
const inactivehintText = 'hint-text-inactive';

/*объявление этапов*/
const stepOneBackground = document.getElementById('stepOneBackground');
const stepTwoBackground = document.getElementById('stepTwoBackground');
const stepThreeBackground = document.getElementById('stepThreeBackground');
const stepFourBackground = document.getElementById('stepFourBackground');
const stepFiveBackground = document.getElementById('stepFiveBackground');

/*объявление стрелок этапов*/
const stepOneTriangle = document.getElementById('stepOneTriangle');
const stepTwoTriangle = document.getElementById('stepTwoTriangle');
const stepThreeTriangle = document.getElementById('stepThreeTriangle');
const stepFourTriangle = document.getElementById('stepFourTriangle');
const stepFiveTriangle = document.getElementById('stepFiveTriangle');

/*состояния срелок*/
const oldStepBackground = 'step-background';
const newStepBackgroundA = 'step-background-a-inactive';
const newStepBackgroundB = 'step-background-b-inactive';

/*состояния точек*/
const classA = 'point';
const classB = 'point-active';

const checkPointCore = 'check-point-core';
const checkPointRing = 'check-point-ring';

const checkPointCoreActive = 'check-point-core-active';
const checkPointRingActive = 'check-point-ring-active';

/*объявление точек начала и конца*/
const startPoint = document.getElementById('startPoint');
const endPoint = document.getElementById('endPoint');

/*объявление точек этапов (их составляющих)*/
const checkPointOneCore = document.getElementById('checkPointOneCore');
const checkPointOneRing = document.getElementById('checkPointOneRing');

const checkPointTwoCore = document.getElementById('checkPointTwoCore');
const checkPointTwoRing = document.getElementById('checkPointTwoRing');

const checkPointThreeCore = document.getElementById('checkPointThreeCore');
const checkPointThreeRing = document.getElementById('checkPointThreeRing');

const checkPointFourCore = document.getElementById('checkPointFourCore');
const checkPointFourRing = document.getElementById('checkPointFourRing');

const checkPointFiveCore = document.getElementById('checkPointFiveCore');
const checkPointFiveRing = document.getElementById('checkPointFiveRing');

/*объявление промежуточных точек*/
const pointN1 = document.getElementById('pt-1');
const pointN2 = document.getElementById('pt-2');
const pointN3 = document.getElementById('pt-3');
const pointN4 = document.getElementById('pt-4');
const pointN5 = document.getElementById('pt-5');
const pointN6 = document.getElementById('pt-6');
const pointN7 = document.getElementById('pt-7');
const pointN8 = document.getElementById('pt-8');
const pointN9 = document.getElementById('pt-9');
const pointN10 = document.getElementById('pt-10');
const pointN11 = document.getElementById('pt-11');
const pointN12 = document.getElementById('pt-12');
const pointN13 = document.getElementById('pt-13');
const pointN14 = document.getElementById('pt-14');
const pointN15 = document.getElementById('pt-15');
const pointN16 = document.getElementById('pt-16');
const pointN17 = document.getElementById('pt-17');
const pointN18 = document.getElementById('pt-18');
const pointN19 = document.getElementById('pt-19');
const pointN20 = document.getElementById('pt-20');
const pointN21 = document.getElementById('pt-21');
const pointN22 = document.getElementById('pt-22');
const pointN23 = document.getElementById('pt-23');
const pointN24 = document.getElementById('pt-24');
const pointN25 = document.getElementById('pt-25');
const pointN26 = document.getElementById('pt-26');
const pointN27 = document.getElementById('pt-27');
const pointN28 = document.getElementById('pt-28');
const pointN29 = document.getElementById('pt-29');
const pointN30 = document.getElementById('pt-30');
const pointN31 = document.getElementById('pt-31');
const pointN32 = document.getElementById('pt-32');
const pointN33 = document.getElementById('pt-33');
const pointN34 = document.getElementById('pt-34');
const pointN35 = document.getElementById('pt-35');
const pointN36 = document.getElementById('pt-36');
const pointN37 = document.getElementById('pt-37');
const pointN38 = document.getElementById('pt-38');
const pointN39 = document.getElementById('pt-39');
const pointN40 = document.getElementById('pt-40');
const pointN41 = document.getElementById('pt-41');
const pointN42 = document.getElementById('pt-42');
const pointN43 = document.getElementById('pt-43');
const pointN44 = document.getElementById('pt-44');
const pointN45 = document.getElementById('pt-45');
const pointN46 = document.getElementById('pt-46');
const pointN47 = document.getElementById('pt-47');
const pointN48 = document.getElementById('pt-48');
const pointN49 = document.getElementById('pt-49');
const pointN50 = document.getElementById('pt-50');
const pointN51 = document.getElementById('pt-51');
const pointN52 = document.getElementById('pt-52');
const pointN53 = document.getElementById('pt-53');
const pointN54 = document.getElementById('pt-54');
const pointN55 = document.getElementById('pt-55');
const pointN56 = document.getElementById('pt-56');
const pointN57 = document.getElementById('pt-57');
const pointN58 = document.getElementById('pt-58');
const pointN59 = document.getElementById('pt-59');
const pointN60 = document.getElementById('pt-60');
const pointN61 = document.getElementById('pt-61');
const pointN62 = document.getElementById('pt-62');
const pointN63 = document.getElementById('pt-63');
const pointN64 = document.getElementById('pt-64');
const pointN65 = document.getElementById('pt-65');
const pointN66 = document.getElementById('pt-66');
const pointN67 = document.getElementById('pt-67');
const pointN68 = document.getElementById('pt-68');
const pointN69 = document.getElementById('pt-69');

/*функция смены состояния подсказки*/
function changeStateHint() {
  hintBackground.classList.remove(activeHintBackground);
  hintBackground.classList.add(inactiveHintBackground);

  hint.classList.remove(activeHint);
  hint.classList.add(inactiveHint);

  hintText.classList.remove(activehintText);
  hintText.classList.add(inactivehintText);
}

/*функции смены фона этапов*/
function stepOneChangeBackground() {
  stepOneBackground.classList.remove(newStepBackgroundA);
  stepOneBackground.classList.add(oldStepBackground);
}

function stepTwoChangeBackground() { 
  stepTwoBackground.classList.remove(newStepBackgroundB);
  stepTwoBackground.classList.add(oldStepBackground);
}

function stepThreeChangeBackground() {
  stepThreeBackground.classList.remove(newStepBackgroundA);
  stepThreeBackground.classList.add(oldStepBackground);
}

function stepFourChangeBackground() { 
  stepFourBackground.classList.remove(newStepBackgroundB);
  stepFourBackground.classList.add(oldStepBackground);
}

function stepFiveChangeBackground() { 
  stepFiveBackground.classList.remove(newStepBackgroundA);
  stepFiveBackground.classList.add(oldStepBackground);
}

/*функции смены фона стрелок*/
function stepOneNewTriangleBackground() {
  stepOneTriangle.classList.remove('step-triangle-inactive');
  stepOneTriangle.classList.add('step-triangle');
}

function stepTwoNewTriangleBackground() {
  stepTwoTriangle.classList.remove('step-triangle-inactive');
  stepTwoTriangle.classList.add('step-triangle');
}

function stepThreeNewTriangleBackground() {
  stepThreeTriangle.classList.remove('step-triangle-inactive');
  stepThreeTriangle.classList.add('step-triangle');
}

function stepFourNewTriangleBackground() {
  stepFourTriangle.classList.remove('step-triangle-inactive');
  stepFourTriangle.classList.add('step-triangle');
}

function stepFiveNewTriangleBackground() {
  stepFiveTriangle.classList.remove('step-triangle-inactive');
  stepFiveTriangle.classList.add('step-triangle');
}

/*функции для смены иконок этапов*/

/*Смена иконки первого этапа*/
let currentStateOneIcon = false; // Изначальное состояние: выключено

function toggleStepOneIcon() {
  let stepOneIcon = document.getElementById("stepOneIcon");
  if (currentStateOneIcon) {
    stepOneIcon.src = "images/analysis-inactive.png"; // Не активное состояние
  } else {
    stepOneIcon.src = "images/analysis.png"; // Активное состояние
  }
};

/*Смена иконки второго этапа*/
let currentStateTwoIcon = false; // Изначальное состояние: выключено

function toggleStepTwoIcon() {
  let stepTwoIcon = document.getElementById("stepTwoIcon");
  if (currentStateTwoIcon) {
    stepTwoIcon.src = "images/layout-inactive.png"; // Не активное состояние
  } else {
    stepTwoIcon.src = "images/layout.png"; // Aктивное состояние
  }
};

/*Смена иконки третьего этапа*/
let currentStateThreeIcon = false; // Изначальное состояние: выключено

function toggleStepThreeIcon() {
  let stepThreeIcon = document.getElementById("stepThreeIcon");
  if (currentStateThreeIcon) {
    stepThreeIcon.src = "images/design-inactive.png"; // Не активное состояние
  } else {
    stepThreeIcon.src = "images/design.png"; // Aктивное состояние
  }
};

/*Смена иконки четвёртого этапа*/
let currentStateFourIcon = false; // Изначальное состояние: выключено

function toggleStepFourIcon() {
  let stepFourIcon = document.getElementById("stepFourIcon");
  if (currentStateFourIcon) {
    stepFourIcon.src = "images/testing-inactive.png"; // Не активное состояние
  } else {
    stepFourIcon.src = "images/testing.png"; // Aктивное состояние
  }
};

/*Смена иконки пятого этапа*/
let currentStateFiveIcon = false; // Изначальное состояние: выключено

function toggleStepFiveIcon() {
  let stepFiveIcon = document.getElementById("stepFiveIcon");
  if (currentStateFiveIcon) {
    stepFiveIcon.src = "images/integration-inactive.png"; // Не активное состояние
  } else {
    stepFiveIcon.src = "images/integration.png"; // Aктивное состояние
  }
};

/*функции точек начала*/
function NewClassStartPoint() {
  startPoint.classList.add(classB);
}
function OldClassStartPoint() {
  startPoint.classList.remove(classB);
}

/*функции точек конца*/
function NewClassEndPoint() {
  endPoint.classList.add(classB);
}
function OldClassEndPoint() {
  endPoint.classList.remove(classB);
}

/*функции точек этапов*/

/*функции первого этапа*/
function NewClassCheckPointOne() {
  checkPointOneCore.classList.add(checkPointCoreActive);
  checkPointOneCore.classList.remove(checkPointCore);
  checkPointOneRing.classList.add(checkPointRingActive);
  checkPointOneRing.classList.remove(checkPointRing);
}
function OldClassCheckPointOne() {
  checkPointOneCore.classList.add(checkPointCore);
  checkPointOneCore.classList.remove(checkPointCoreActive);
  checkPointOneRing.classList.add(checkPointRing);
  checkPointOneRing.classList.remove(checkPointRingActive);
}

/*функции второго этапа*/
function NewClassCheckPointTwo() {
  checkPointTwoCore.classList.add(checkPointCoreActive);
  checkPointTwoCore.classList.remove(checkPointCore);
  checkPointTwoRing.classList.add(checkPointRingActive);
  checkPointTwoRing.classList.remove(checkPointRing);
}
function OldClassCheckPointTwo() {
  checkPointTwoCore.classList.add(checkPointCore);
  checkPointTwoCore.classList.remove(checkPointCoreActive);
  checkPointTwoRing.classList.add(checkPointRing);
  checkPointTwoRing.classList.remove(checkPointRingActive);
}

/*функции третьего этапа*/
function NewClassCheckPointThree() {
  checkPointThreeCore.classList.add(checkPointCoreActive);
  checkPointThreeCore.classList.remove(checkPointCore);
  checkPointThreeRing.classList.add(checkPointRingActive);
  checkPointThreeRing.classList.remove(checkPointRing);
}
function OldClassCheckPointThree() {
  checkPointThreeCore.classList.add(checkPointCore);
  checkPointThreeCore.classList.remove(checkPointCoreActive);
  checkPointThreeRing.classList.add(checkPointRing);
  checkPointThreeRing.classList.remove(checkPointRingActive);
}

/*функции четвёртого этапа*/
function NewClassCheckPointFour() {
  checkPointFourCore.classList.add(checkPointCoreActive);
  checkPointFourCore.classList.remove(checkPointCore);
  checkPointFourRing.classList.add(checkPointRingActive);
  checkPointFourRing.classList.remove(checkPointRing);
}
function OldClassCheckPointFour() {
  checkPointFourCore.classList.add(checkPointCore);
  checkPointFourCore.classList.remove(checkPointCoreActive);
  checkPointFourRing.classList.add(checkPointRing);
  checkPointFourRing.classList.remove(checkPointRingActive);
}

/*функции пятого этапа*/
function NewClassCheckPointFive() {
  checkPointFiveCore.classList.add(checkPointCoreActive);
  checkPointFiveCore.classList.remove(checkPointCore);
  checkPointFiveRing.classList.add(checkPointRingActive);
  checkPointFiveRing.classList.remove(checkPointRing);
}
function OldClassCheckPointFive() {
  checkPointFiveCore.classList.add(checkPointCore);
  checkPointFiveCore.classList.remove(checkPointCoreActive);
  checkPointFiveRing.classList.add(checkPointRing);
  checkPointFiveRing.classList.remove(checkPointRingActive);
}

/*функции для промежуточных точек*/
function NewClassPointN1() {
  pointN1.classList.add(classB);
}
function OldClassPointN1() {
  pointN1.classList.remove(classB);
}

function NewClassPointN2() {
  pointN2.classList.add(classB);
}

function OldClassPointN2() {
  pointN2.classList.remove(classB);
}

function NewClassPointN3() {
  pointN3.classList.add(classB);
}

function OldClassPointN3() {
  pointN3.classList.remove(classB);
}

function NewClassPointN4() {
  pointN4.classList.add(classB);
}

function OldClassPointN4() {
  pointN4.classList.remove(classB);
}

function NewClassPointN5() {
  pointN5.classList.add(classB);
}

function OldClassPointN5() {
  pointN5.classList.remove(classB);
}

function NewClassPointN6() {
  pointN6.classList.add(classB);
}

function OldClassPointN6() {
  pointN6.classList.remove(classB);
}

function NewClassPointN7() {
  pointN7.classList.add(classB);
}

function OldClassPointN7() {
  pointN7.classList.remove(classB);
}

function NewClassPointN8() {
  pointN8.classList.add(classB);
}

function OldClassPointN8() {
  pointN8.classList.remove(classB);
}

function NewClassPointN9() {
  pointN9.classList.add(classB);
}

function OldClassPointN9() {
  pointN9.classList.remove(classB);
}

function NewClassPointN10() {
  pointN10.classList.add(classB);
}

function OldClassPointN10() {
  pointN10.classList.remove(classB);
}

function NewClassPointN11() {
  pointN11.classList.add(classB);
}

function OldClassPointN11() {
  pointN11.classList.remove(classB);
}

function NewClassPointN12() {
  pointN12.classList.add(classB);
}

function OldClassPointN12() {
  pointN12.classList.remove(classB);
}

function NewClassPointN13() {
  pointN13.classList.add(classB);
}

function OldClassPointN13() {
  pointN13.classList.remove(classB);
}

function NewClassPointN14() {
  pointN14.classList.add(classB);
}

function OldClassPointN14() {
  pointN14.classList.remove(classB);
}

function NewClassPointN15() {
  pointN15.classList.add(classB);
}

function OldClassPointN15() {
  pointN15.classList.remove(classB);
}

function NewClassPointN16() {
  pointN16.classList.add(classB);
}

function OldClassPointN16() {
  pointN16.classList.remove(classB);
}

function NewClassPointN17() {
  pointN17.classList.add(classB);
}

function OldClassPointN17() {
  pointN17.classList.remove(classB);
}

function NewClassPointN18() {
  pointN18.classList.add(classB);
}

function OldClassPointN18() {
  pointN18.classList.remove(classB);
}

function NewClassPointN19() {
  pointN19.classList.add(classB);
}

function OldClassPointN19() {
  pointN19.classList.remove(classB);
}

function NewClassPointN20() {
  pointN20.classList.add(classB);
}

function OldClassPointN20() {
  pointN20.classList.remove(classB);
}

function NewClassPointN21() {
  pointN21.classList.add(classB);
}

function OldClassPointN21() {
  pointN21.classList.remove(classB);
}

function NewClassPointN22() {
  pointN22.classList.add(classB);
}

function OldClassPointN22() {
  pointN22.classList.remove(classB);
}

function NewClassPointN23() {
  pointN23.classList.add(classB);
}

function OldClassPointN23() {
  pointN23.classList.remove(classB);
}

function NewClassPointN24() {
  pointN24.classList.add(classB);
}

function OldClassPointN24() {
  pointN24.classList.remove(classB);
}

function NewClassPointN25() {
  pointN25.classList.add(classB);
}

function OldClassPointN25() {
  pointN25.classList.remove(classB);
}

function NewClassPointN26() {
  pointN26.classList.add(classB);
}

function OldClassPointN26() {
  pointN26.classList.remove(classB);
}

function NewClassPointN27() {
  pointN27.classList.add(classB);
}

function OldClassPointN27() {
  pointN27.classList.remove(classB);
}

function NewClassPointN28() {
  pointN28.classList.add(classB);
}

function OldClassPointN28() {
  pointN28.classList.remove(classB);
}

function NewClassPointN29() {
  pointN29.classList.add(classB);
}

function OldClassPointN29() {
  pointN29.classList.remove(classB);
}

function NewClassPointN30() {
  pointN30.classList.add(classB);
}

function OldClassPointN30() {
  pointN30.classList.remove(classB);
}

function NewClassPointN31() {
  pointN31.classList.add(classB);
}

function OldClassPointN31() {
  pointN31.classList.remove(classB);
}

function NewClassPointN32() {
  pointN32.classList.add(classB);
}

function OldClassPointN32() {
  pointN32.classList.remove(classB);
}

function NewClassPointN33() {
  pointN33.classList.add(classB);
}

function OldClassPointN33() {
  pointN33.classList.remove(classB);
}

function NewClassPointN34() {
  pointN34.classList.add(classB);
}

function OldClassPointN34() {
  pointN34.classList.remove(classB);
}

function NewClassPointN35() {
  pointN35.classList.add(classB);
}

function OldClassPointN35() {
  pointN35.classList.remove(classB);
}

function NewClassPointN36() {
  pointN36.classList.add(classB);
}

function OldClassPointN36() {
  pointN36.classList.remove(classB);
}

function NewClassPointN37() {
  pointN37.classList.add(classB);
}

function OldClassPointN37() {
  pointN37.classList.remove(classB);
}

function NewClassPointN38() {
  pointN38.classList.add(classB);
}

function OldClassPointN38() {
  pointN38.classList.remove(classB);
}

function NewClassPointN39() {
  pointN39.classList.add(classB);
}

function OldClassPointN39() {
  pointN39.classList.remove(classB);
}

function NewClassPointN40() {
  pointN40.classList.add(classB);
}

function OldClassPointN40() {
  pointN40.classList.remove(classB);
}

function NewClassPointN41() {
  pointN41.classList.add(classB);
}

function OldClassPointN41() {
  pointN41.classList.remove(classB);
}

function NewClassPointN42() {
  pointN42.classList.add(classB);
}

function OldClassPointN42() {
  pointN42.classList.remove(classB);
}

function NewClassPointN43() {
  pointN43.classList.add(classB);
}

function OldClassPointN43() {
  pointN43.classList.remove(classB);
}

function NewClassPointN44() {
  pointN44.classList.add(classB);
}

function OldClassPointN44() {
  pointN44.classList.remove(classB);
}

function NewClassPointN45() {
  pointN45.classList.add(classB);
}

function OldClassPointN45() {
  pointN45.classList.remove(classB);
}

function NewClassPointN46() {
  pointN46.classList.add(classB);
}

function OldClassPointN46() {
  pointN46.classList.remove(classB);
}

function NewClassPointN47() {
  pointN47.classList.add(classB);
}

function OldClassPointN47() {
  pointN47.classList.remove(classB);
}

function NewClassPointN48() {
  pointN48.classList.add(classB);
}

function OldClassPointN48() {
  pointN48.classList.remove(classB);
}

function NewClassPointN49() {
  pointN49.classList.add(classB);
}

function OldClassPointN49() {
  pointN49.classList.remove(classB);
}

function NewClassPointN50() {
  pointN50.classList.add(classB);
}

function OldClassPointN50() {
  pointN50.classList.remove(classB);
}

function NewClassPointN51() {
  pointN51.classList.add(classB);
}

function OldClassPointN51() {
  pointN51.classList.remove(classB);
}

function NewClassPointN52() {
  pointN52.classList.add(classB);
}

function OldClassPointN52() {
  pointN52.classList.remove(classB);
}

function NewClassPointN53() {
  pointN53.classList.add(classB);
}

function OldClassPointN53() {
  pointN53.classList.remove(classB);
}

function NewClassPointN54() {
  pointN54.classList.add(classB);
}

function OldClassPointN54() {
  pointN54.classList.remove(classB);
}

function NewClassPointN55() {
  pointN55.classList.add(classB);
}

function OldClassPointN55() {
  pointN55.classList.remove(classB);
}

function NewClassPointN56() {
  pointN56.classList.add(classB);
}

function OldClassPointN56() {
  pointN56.classList.remove(classB);
}

function NewClassPointN57() {
  pointN57.classList.add(classB);
}

function OldClassPointN57() {
  pointN57.classList.remove(classB);
}

function NewClassPointN58() {
  pointN58.classList.add(classB);
}

function OldClassPointN58() {
  pointN58.classList.remove(classB);
}

function NewClassPointN59() {
  pointN59.classList.add(classB);
}

function OldClassPointN59() {
  pointN59.classList.remove(classB);
}

function NewClassPointN60() {
  pointN60.classList.add(classB);
}

function OldClassPointN60() {
  pointN60.classList.remove(classB);
}

function NewClassPointN61() {
  pointN61.classList.add(classB);
}

function OldClassPointN61() {
  pointN61.classList.remove(classB);
}

function NewClassPointN62() {
  pointN62.classList.add(classB);
}

function OldClassPointN62() {
  pointN62.classList.remove(classB);
}

function NewClassPointN63() {
  pointN63.classList.add(classB);
}

function OldClassPointN63() {
  pointN63.classList.remove(classB);
}

function NewClassPointN64() {
  pointN64.classList.add(classB);
}

function OldClassPointN64() {
  pointN64.classList.remove(classB);
}

function NewClassPointN65() {
  pointN65.classList.add(classB);
}

function OldClassPointN65() {
  pointN65.classList.remove(classB);
}

function NewClassPointN66() {
  pointN66.classList.add(classB);
}

function OldClassPointN66() {
  pointN66.classList.remove(classB);
}

function NewClassPointN67() {
  pointN67.classList.add(classB);
}

function OldClassPointN67() {
  pointN67.classList.remove(classB);
}

function NewClassPointN68() {
  pointN68.classList.add(classB);
}

function OldClassPointN68() {
  pointN68.classList.remove(classB);
}

function NewClassPointN69() {
  pointN69.classList.add(classB);
}

function OldClassPointN69() {
  pointN69.classList.remove(classB);
}