$(function () {
  $(".zt_navbar .zt_nav_item").on("click", function (event) {
    event.stopPropagation()
    $(".zt_navbar .zt_nav_item").removeClass("active")
    $(".zt_navbar .zt_sub_menu_title").removeClass("active")
    $(this).addClass("active")
    let parentNode = $(this).parent(".zt_sub_menu")[0]
    if (!parentNode) {
      $(".zt_navbar .zt_sub_menu").removeClass("show")
    }
  })

  $(".zt_navbar .zt_sub_menu_title").on("click", function (event) {
    // $(".zt_navbar .zt_nav_item").removeClass("active")
    // $(".zt_navbar .zt_sub_menu_title").removeClass("active")
    // $(this).addClass("active")
    $(".zt_navbar .zt_nav_item").removeClass("active")
    $(this).siblings(".zt_sub_menu").toggleClass("show") //本身展开
    $(this)
      .siblings(".zt_sub_menu")
      .find(".zt_nav_item:first")
      .addClass("active")
    //其他关闭
    $(".zt_navbar .zt_sub_menu_title")
      .not(this)
      .siblings(".zt_sub_menu")
      .removeClass("show")
  })

  // 控制搜索框显示隐藏
  $(".search_link").on("click", function () {
    $(".zt_layout").toggleClass("d-none")
  })
  $(".zt_layout").on("click", function (event) {
    console.log(event.target.nodeName)
    if (event.target.nodeName === "INPUT") {
      return
    }
    $(".zt_layout").addClass("d-none")
  })
})
