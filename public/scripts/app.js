$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;


  $.ajax({
    method: "GET",
    url: "/items"
  }).done((items) => {
    // for (item of items)
    //   $("<div>").text(item.items)
    // }
    $("<div>").text(items[0].list_kind).appendTo($(".movie-item-container"))
    $("<div>").text(items[0].items).appendTo($(".movie-item-container"))
  })
});
