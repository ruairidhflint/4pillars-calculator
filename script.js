const form = document.getElementById('container');
const adherence = document.getElementById('adherence');
const adherenceTarget = document.getElementById('adherence-target');
const adherenceToggle = document.getElementById('adherence-toggle');
const homework = document.getElementById('homework');
const homeworkTarget = document.getElementById('homework-target');
const homeworkToggle = document.getElementById('homework-toggle');
const nutrition = document.getElementById('nutrition');
const nutritionTarget = document.getElementById('nutrition-target');
const nutritionToggle = document.getElementById('nutrition-toggle');
const steps = document.getElementById('steps');
const stepsTarget = document.getElementById('steps-target');
const stepsToggle = document.getElementById('steps-toggle');
const error = document.getElementById('error');
const display = document.getElementById('display');

adherenceToggle.checked = true;
homeworkToggle.checked = true;
nutritionToggle.checked = true;
stepsToggle.checked = true;
adherenceTarget.value = 2.0;
homeworkTarget.value = 2.0;
nutritionTarget.value = 80;
stepsTarget.value = 10000;

const calculation = (e) => {
  e.preventDefault();

  if (
    isNaN(adherence.value) ||
    isNaN(homework.value) ||
    isNaN(nutrition.value) ||
    isNaN(steps.value) ||
    isNaN(adherenceTarget.value) ||
    isNaN(homeworkTarget.value) ||
    isNaN(nutritionTarget.value) ||
    isNaN(stepsTarget.value)
  ) {
    error.style.display = 'block';
    display.textContent = '';
    return;
  }
  const percentages = {};
  if (adherenceToggle.checked) {
    const result = (adherence.value / adherenceTarget.value) * 100;
    percentages.adherence = result;
  }
  if (homeworkToggle.checked) {
    const result = (homework.value / homeworkTarget.value) * 100;
    percentages.homework = result;
  }
  if (nutritionToggle.checked) {
    const result = (nutrition.value / nutritionTarget.value) * 100;
    percentages.nutrition = result;
  }
  if (stepsToggle.checked) {
    const result = (steps.value / stepsTarget.value) * 100;
    percentages.steps = result;
  }
  const values = Object.values(percentages);
  error.style.display = 'none';
  if (!values.length) {
    display.textContent = '';
    return;
  }
  const total = (
    values.reduce((total, acc) => {
      return total + acc;
    }, 0) / values.length
  ).toFixed(2);

  display.textContent = `${total}%`;
  display.scrollIntoView();
};

form.onsubmit = calculation;
