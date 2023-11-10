function newquestion(question){
  const span = document.createElement('span');

  span.appendChild(document.createTextNode(question));


  const icon = document.createElement('i');

  const line = document.createElement('hr');

  icon.appendChild(line)

  icon.className= 'fa-solid fa-chevron-down fa-bounce'

  span.appendChild(icon);

  document.querySelector('#hthree').appendChild(span);
}


  newquestion('Can I link my Bank account and credit card?');

  newquestion('Can I customize my categories in the app?');

  newquestion('Does Wallet-Sentry support multi-currency transactions?');

  newquestion('Can I view my spending history?');

  

// Create the show function

const navs = document.querySelector('.navigation')
const bars = document.querySelector('#bars')
const instant = document.querySelectorAll('.drop')
const kool = document.querySelector('.drops')
// function onTouch(e) {
//   console.log("working in style")
//   if (e.target.parentElement.parentElement.classList.contains('bre')) {
//    e.target.parentElement.parentElement.parentElement.parentElement.innerHTML= bossy
//       // console.log("working in style")
//     }
// }

  navs.addEventListener('click', onClick);

  function onClick(e){
    if(e.target.parentElement.parentElement.classList.contains('bre')){
    console.log("click function is working");
    instant.forEach((inst)=> {
      console.log(inst.textContent);
      });
    navs.innerHTML=kool.textContent
    // instant.style.display="block";
    
    }
  }
