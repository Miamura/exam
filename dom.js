
const text = document.querySelector('#text');

const redt = document.createElement('p');
redt.classList.add('content');
redt.textContent = 'Hey I’m red!';
redt.style.color = "red";

const bluet = document.createElement('h3');
bluet.classList.add('content');
bluet.textContent = 'I’m a blue h3!';
bluet.style.color = "blue";

const pink1 = document.createElement('h1');
pink1.classList.add('content');
pink1.textContent = 'I’m in a div';
pink1.style.border = "thick solid #000000";
pink1.style.background = "pink";

const pink2 = document.createElement('p');
pink2.classList.add('content');
pink2.textContent = 'ME TOO!';
pink2.style.border = "thick solid #000000";
pink2.style.background = "pink";



text.appendChild(redt);
text.appendChild(bluet);
text.appendChild(pink1);
text.appendChild(pink2);