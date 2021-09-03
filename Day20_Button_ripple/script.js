const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    //finds the spot being clicked on whole screen
    const x = e.clientX;
    const y = e.clientY;

    //finds the location of the button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    //finds the exact coordinates
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    //creates the circle
    const circle = document.createElement('span');
    circle.classList.add('circle');

    //finds the starting point
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    //appends to the button
    this.appendChild(circle);

    //removes the circle from DOM
    setTimeout(() => circle.remove(), 500);
  });
});
