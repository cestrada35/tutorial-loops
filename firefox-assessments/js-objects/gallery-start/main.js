const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

/* Looping through images */
for (let i = 0; i < picArray.length; i++){
  const newImage = document.createElement('img');
  const picLocation = 'images/' + picArray[i];
  newImage.setAttribute('src', picLocation);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', () => {
      displayedImage.setAttribute('src', picLocation);
  });
}

/* Wiring up the Darken/Lighten button */
function dLButton(){
    let state = btn.getAttribute('class');
    if (state == 'dark'){
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{ //light
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

btn.addEventListener('click', dLButton);