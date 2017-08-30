window.onbeforeunload = myConfirmation;

function myConfirmation() {
  return 'Are you sure you want to quit?';
}