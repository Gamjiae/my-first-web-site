var Body = {
    setBackgroundColor : function(color){
      $('body').css('background-color', color);
    },
    setColor : function(color){
      $('body').css('color', color);
    }
  }
var box = {
    setBackgroundColor : function(color){
        $('#box').css('background-color', color);
    },
    setColor : function(color) {
        $('#box').css('color', color);
    }
}
var Links = {
    setColor : function(color){
        $('a').css('color', color);
    } 
}
var h3 = {
    setBackgroundColor : function(color) {
        $('h3').css('background-color', color);
    },
    setColor : function(color) {

        $('h3').css('color', color);
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value=='마우스를 올려보세요!'){
      Body.setBackgroundColor('rgb(251, 184, 241)');
      Body.setColor('black');
      Links.setColor('rgb(96, 5, 116)');
      box.setBackgroundColor('white');
      box.setColor('blueviolet');
      h3.setBackgroundColor('rgb(96, 5, 116)');
      h3.setColor('white');
      self.value='돌아갑니다!';
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');        
      Links.setColor('rgb(187, 53, 217)');
      box.setBackgroundColor('blueviolet');
      box.setColor('white');
      h3.setBackgroundColor('rgb(246, 203, 240)');
      h3.setColor('black');
      self.value='마우스를 올려보세요!';
    }
  } 