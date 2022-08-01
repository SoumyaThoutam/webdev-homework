// Add your code here
let main = document.body.getElementsByTagName('main')[0];
main.style.margin = 'auto';
main.style.textAlign = 'center';

let figure = document.createElement('figure');
main.appendChild(figure);

let figCaption = document.createElement('figcaption');
figCaption.style.textAlign = 'left';
figCaption.style.margin = 'auto';
figCaption.style.width = '50%';

let img = document.createElement('img');
img.src = '../hw1/images/Soumya.jpeg';
img.alt = "Image of Soumya";
img.style.width = '299px';
img.style.height = '299px';
img.style.borderRadius = '50%';

figure.appendChild(img);
figure.appendChild(figCaption);

let section = document.createElement('section');
section.textContent = 'Hi! My name is Soumya Thoutam. ';
section.style.fontWeight = 'bold';
figCaption.appendChild(section);

let aside = document.createElement('aside');
aside.textContent = 'I am pursuing Masters in Computer Science at Portland State University. I have taken Intro to Web Developement course to upgrade and enhance my skills in frontend web technologies. I would love to explore and experience new places.';
figCaption.appendChild(aside);
