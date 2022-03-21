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
btn.addEventListener('click', e => {
  let state = e.target.getAttribute('class');
  if (state = 'dark'){
    e.target.setAttribute('class', 'light');
    //finish dis
  }else{ //light
  e.target = 'dark';//change to set attribute
  }
  console.log(state);
});''