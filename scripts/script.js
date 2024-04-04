const btn = document.getElementById('btn');

let buyf = 0;
let basket = 0;
let price = btn.previousSibling.previousSibling.innerHTML;
price = price.replace(' ','');
price = parseInt(price);
console.log(price);
//localStorage.clear();
const basketPrice = document.querySelector('.price');

if (localStorage.getItem('basket')!==  null)
{
    basket = localStorage.getItem('basket');
    basketPrice.innerHTML = basket;
}

if (localStorage.getItem('buyf')!== null)
{
  buyf = localStorage.getItem('buyf');
  buyf = parseInt(buyf);

  if (buyf == 1)
    {
     btn.style.background = 'green';
     btn.innerHTML = 'in basket';
    }
    else
    {
        btn.style.background = 'white';
        btn.innerHTML = 'buy';  
    }

}



function buy()
{   
    if (buyf == 0)
    {
     basket= parseInt(basket)+price;
     btn.style.background = 'green';
     btn.innerHTML = 'in basket';
     buyf = 1;
    }
    else
    {
        basket= parseInt(basket)-price;
        btn.style.background = 'white';
        btn.innerHTML = 'buy';
        buyf = 0;
    }
    basketPrice.innerHTML = basket + '£';
    localStorage.setItem('basket',basket);
    localStorage.setItem('buyf',buyf);
}  


