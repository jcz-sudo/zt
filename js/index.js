$(function () {
  /*小屏幕导航点击关闭菜单*/
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide")
  })
  $(".carousel").carousel() //轮播
  //时间线
  $(".line_point").on("click", function () {
    $(".line_point").removeClass("active")
    let index = $(this).index()
    $(this).addClass("active")
    $(".history .time_desc").addClass("d-none")
    $(".history .time_desc").eq(index).removeClass("d-none")
    $(".history .video").addClass("d-none")
    $(".history .video").eq(index).removeClass("d-none")
  })
  //新闻中心导航
  $(".news_nav_item").on("click", function () {
    $(".news_nav_item").removeClass("active")
    $(this).addClass("active")
    let index = $(this).index()
    $(this).addClass("active")
    $(".news_body .news_right .news_list").addClass("d-none")
    $(".news_body .news_right .news_list").eq(index).removeClass("d-none")
  })
})
