
function changeImage () {
   
    var image = document.getElementById('lightb');
  
    if (image.src.match("bulb2")) { // 반드시 false ("안의 값이 거짓이어야 함")
        image.src ="/images_all/light-bulb1.png";
    } else {
        image.src ="/images_all/light-bulb2.png";
    }
}