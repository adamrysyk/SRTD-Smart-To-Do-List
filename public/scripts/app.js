
createListElement = (item) => {
  let $listItem = $("<div>").addClass("movie-item-container")
  .append($("<p>").addClass("movie-title").text(item.name))
  .append($("<form>").addClass("delete-form")
  .attr( "method", "POST" )
  .attr( "action", `/del/items/${item.type.toLowerCase()}/${item.id}?_method=DELETE` )
  .append($("<button>").addClass("delete-title").attr("type", "submit").text("X")))
  return $listItem
}

$(() => {

  $.ajax({
    method: "GET",
    url: "/items/watch"
  }).done((items) => {
    for (item of items) {
      let $listItem = createListElement(item)
        $('.watch').append($listItem[0])
    }
  })

  $.ajax({
    method: "GET",
    url: "/items/read"
  }).done((items) => {
    for (item of items) {
      let $listItem = createListElement(item)
        $('.read').append($listItem[0])
    }
  })

    $.ajax({
    method: "GET",
    url: "/items/eat"
  }).done((items) => {
    for (item of items) {
      let $listItem = createListElement(item)
        $('.eat').append($listItem[0])
    }
  })

  $.ajax({
    method: "POST",
    url: "/login"
  })
});

