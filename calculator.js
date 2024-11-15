const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");



buttons.forEach(buttons => {
  buttons.addEventListener("click", () => {
    display.value += buttons.value;

  });
});

equals.addEventListener("click", () => {
  try{
    display.value = eval(display.value);
  }catch (error){
    display.value = "Error";
   

  }
});



clear.addEventListener("click", () => {
  display.value = '';
});