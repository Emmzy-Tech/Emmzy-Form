 const yTubeBtn = document.querySelector(".play-btn");
 const yTube = document.querySelector('.ytvideo');
 const closeYt = document.querySelector('.close');
 const frame = document.querySelector('iframe');
 const btn = document.querySelector('.btn');
 const spin = document.querySelector('.spinner');
//  console.log(yTube);

yTubeBtn.addEventListener('click', function(){
    yTube.classList.add('yopen');
})
closeYt.addEventListener('click', function(){
    yTube.classList.remove('yopen');
    frameReload();
})
// closeYt.event(e){
//     e.preventDefault();
// }
function frameReload(){
    window.location.reload(true);
}
btn.addEventListener('click', function(){
    spin.classList.toggle('spinning');
})