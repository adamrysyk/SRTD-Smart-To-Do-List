createListElement = (item) => {
  let $listItem = $("<div>").addClass("movie-item-container")
  .append($("<p>").addClass("movie-title").text(item.item_names))
  return $listItem
}







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

    for (item of items) {
      let $listItem = createListElement(item)
      $('.list_container-main').append($listItem[0])
    }
  })
});
