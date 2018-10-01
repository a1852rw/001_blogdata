<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
$(function() {
  var win = $(window);
  var list = [];
  var currentLevel = 0;
  var entryContentLen = 0;

  // 見出しを検索
  $('.entry-content h2,.entry-content h3').each(function(i){
    var self = this;
    var idName = 'section' + i;
    var level = 0;

    $(self).attr('id', idName);
    list.push('<li><a href="#' + idName + '">' + $(self).text() + '</a>');
    if (self.nodeName.toLowerCase() == 'h3') {
      level = 1;
    } else if (self.nodeName.toLowerCase() == 'h4') {
      level = 2;
    }
    while (currentLevel < level) {
      list[i] = '<ol class="chapter">' + list[i];
      currentLevel++;
    }
    while (currentLevel > level) {
      list[i] = '</ol></li>' + list[i];
      currentLevel--;
    }
    entryContentLen++;
  });
  // 見出しが2つ以上あったら目次を表示する
  if (entryContentLen >= 2) {
    $('<div class="sectionList"><h5>目次</h5><ol>' + list.join('') + '</ol></div>').prependTo('.entry-content');
  }
  // スクロールを滑らかにする
  $('.sectionList a').on('click', function() {
    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 300);
    return false;
  });
});
</script>
