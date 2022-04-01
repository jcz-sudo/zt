function amplificationImg(url) {
  console.log(url)
  $("#displayImg").attr("src", url)
  var height = $("#displayImg").height() //拿的图片原来宽高，建议自定义宽高
  var width = $("#displayImg").width()
  layer.open({
    type: 1,
    title: false,
    closeBtn: 0,
    shadeClose: true,
    area: [width + "px", height + "px"], //宽高
    content: "<img src=" + url + " />",
  })
}
