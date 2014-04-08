var feed_url = 'https://ethercalc.org/static/proxy/fumao.word.live.json'
var forum_url = 'https://ethercalc.org/static/proxy/enews.json'

$(document).ready(function() {
  $.getJSON(forum_url, function(data){
    news = $.map(data.entry, function(entry){ return entry })
    news.sort(function(a, b){ return(a.published > b.published) })
    $.each(news.slice(-3), function(_, news) {
      time = new Date(news.published)
      date_string = addZeros(time.getMonth() + 1) + '/' + addZeros(time.getDate())
      time_string = addZeros(time.getHours()) + ':' + addZeros(time.getMinutes())
      body = $('<p>' + news.content.content + '</p>')
      img = body.find('img')
      img = img.length ? img.addClass('thumbnail')[0].outerHTML : ''
      body.find('img').remove()
      content = body.html()
      $('.eforum h4').after('<p><time>' + date_string + ' ' + time_string + '</time> ' + img + content + '</p>')
    })
  })

  $.getJSON(feed_url, function(data){
    news = data.slice(-5)
    $.each(news, function(_, news) {
      datetime_string = news.time.replace(/^\d+-|:\d+$/g, '')
      $('.livefeed h4').after('<p><time>' + datetime_string + '</time> ' + news.msg + '</p>')
    })
  })

})

function addZeros(st) {
  st = st.toString()

  if(st.length == 1) {
    st = '0' + st
  }

  return st
}
