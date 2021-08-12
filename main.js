var img = $('img');
var holder = $('#holder');
var info = $('.info');
var imgInfo = 'Kendo is a traditional Japanese martial art,which descended from swordsmanship (kenjutsu) and uses bamboo swords (shinai) and protective armour (bōgu).';

img.on('click', function () {
  info.html('');
  holder.html('');
  var self = $(this);

  var copy = self.clone();
    copy.css({
      position: 'absolute',
      width: self.width(),
      height: self.height(),
      top: self.offset().top,
      left: self.offset().left
  });
  copy.animate({
    top: holder.offset().top,
    left: holder.offset().left,
    width: holder.width(),
    height: holder.height()
  }, 1000, function () {
  info.append(imgInfo);
  })
  holder.append(copy);
});
