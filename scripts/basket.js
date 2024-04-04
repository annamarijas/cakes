let elemLi = document.createElement("li");
elemLi.classList.add('gds_item'); 
let elemStart = document.querySelector('.gds_list');
let elemName = document.createElement("h3");
elemName.innerHTML = 'purchase';

let elemImg = document.createElement("img");
elemImg.classList.add('gds_img');
elemImg.src = 'img/he.jpeg';
elemImg.style.width = '100px';

let elemPrice = document.createElement("p");
elemPrice.classList.add('gds_price');
elemPrice.innerHTML = '250 pounds';
let firstItem = document.querySelector('.gds_item');







function update()
{
    elemStart.appendChild(elemLi);
    elemLi.appendChild(elemName);
    elemLi.appendChild(elemImg);
    elemLi.appendChild(elemPrice);
    firstItem.classList.add('non');
}


























































/*let elemBtn = document.createElement("button");
elemBtn.classList.add('btn');
let btnName = document.createElement("h3");
elemBtn.innerHTML = 'получилось';
 elemStart.appendChild(elemBtn);
    elemBtn.appendChild(btnName);*/