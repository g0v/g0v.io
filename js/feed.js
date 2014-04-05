var feed_url = 'https://ethercalc.org/static/proxy/fumao.word.live.json'

$(document).ready(function() {
  $.getJSON(feed_url, function(data){
    news = data.slice(data.length - 5, data.length)
    $.each(news, function(_, news) {
      time = new Date(news.time)
      date_string = addZeros(time.getMonth() + 1) + '/' + addZeros(time.getDate())
      time_string = addZeros(time.getHours()) + ':' + addZeros(time.getMinutes())
      $('.livefeed h4').after('<p><time>' + date_string + ' ' + time_string + '</time> ' + news.msg + '</p>')
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
