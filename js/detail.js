$(function () {
  //顶部导航栏激活
  let url = window.location.search
  let index = Number(url.split("=")[1] - 1)
  $(".nav-item").eq(index).addClass("active")

  console.log($(".zt_content img"))
  $(".zt_content img").each(function (index, element) {
    console.log(element)
    $(element).addClass("img_block")

    $(element).parent().addClass("a_block")
  })
  $(this).parent().addClass("highlight")

  //控制字体
  $(".tool_bar .font_size").delegate("span", "click", function (e) {
    const size = e.target.dataset.size
    $(".zt_detail").css("font-size", size + "px")
  })

  $(".weixin_popup .weixin_popup_head .weixin_popuo_close").on(
    "click",
    function (e) {
      $(".weixin_popup").css("display", "none")
      $("#code").empty()
    }
  )
  //微信分享
  $(".share_bar .share_item .weixin").on("click", function (e) {
    $(".weixin_popup").css("display", "block")
    e.preventDefault()
    // 设置 qrcode 参数
    $("#code").empty()
    $("#code").qrcode({
      render: "canvas", //table方式
      width: 200, //宽度
      height: 200, //高度
      text: window.location.href, //任意内容
    })
  })

  $(".share_bar .share_item .weibo").on("click", function (e) {
    //微博分享
    e.preventDefault()
    const title = $(".zt_detail .zt_title").text()
    const url = window.location.href
    const img = "/imgs/newsDetail/detail1.png"
    window.open(
      `http://service.weibo.com/share/share.php?appkey=&title=${title}&url=${url}&pic=${img}&searchPic=false&style=simple `
    )
  })

  $(".share_bar .share_item .qq").on("click", function (e) {
    //qq空间分享
    e.preventDefault()
    const title = $(".zt_detail .zt_title").text()
    const url = window.location.href
    const picurl = "/imgs/newsDetail/detail1.png"
    var shareqqzonestring =
      "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=" +
      title +
      "&url=" +
      url +
      "&pics=" +
      picurl

    window.open(shareqqzonestring)
  })
})
