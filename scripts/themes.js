const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
 let color = '';
 if (localStorage.getItem('bg-color')!== null)
 {
     color = localStorage.getItem('bg-color');
     header.style.background = color;
     footer.style.background = color; 
     main.style.background = localStorage.getItem('bg-color-main');
     
 }


function dark()
{
    header.style.background = '#091242';
    header.style.transition = '1s';
    main.style.background = '#222d66';
    main.style.transtion = '1s';
    footer.style.background = '#091242';
    footer.style.transition = '1s';
    localStorage.setItem('bg-color','#091242');
    localStorage.setItem('bg-color-main','#222d66');
    
}

function light()
{
    header.style.background = '#7ca5d6';
    header.style.transition = '1s';
    main.style.background = '#b5cce8';
    main.style.transtion = '1s';
    footer.style.background = '#7ca5d6';
    footer.style.transition = '1s';
    localStorage.setItem('bg-color','#7ca5d6');
    localStorage.setItem('bg-color-main','#b5cce8');
}


































console.log('Dark');