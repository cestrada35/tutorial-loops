const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picArray = ['pic1.jpg','pic2.jpg','pic4.jpg','pic5.jpg']

/* Looping through images */
for (let i = 0; i < picArray.length; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', picArray[i]);
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
