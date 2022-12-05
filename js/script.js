const navigation = document.querySelector('.background-nav');

window.onscroll = function () {
   var top = window.scrollY;
   console.log(top);

   if (top >= 100) {
      navigation.classList.add('active');
   } else {
      navigation.classList.remove('active');
   }
};
