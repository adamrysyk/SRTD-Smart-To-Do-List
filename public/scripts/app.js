createListElement = (item) => {
  let $listItem = $("<div>").addClass("movie-item-container")
  .append($("<p>").addClass("movie-title").text(item.name));
  return $listItem
}


$(() => {

  $.ajax({
    method: "GET",
    url: "/items/watch"
  }).done((items) => {
    console.log(items)

    for (item of items) {
      let $listItem = createListElement(item)
        $('.watch').append($listItem[0])
    }
  })

  $.ajax({
    method: "GET",
    url: "/items/read"
  }).done((items) => {
    console.log(items)

    for (item of items) {
      let $listItem = createListElement(item)
        $('.read').append($listItem[0])
    }
  })

    $.ajax({
    method: "GET",
    url: "/items/eat"
  }).done((items) => {
    console.log(items)

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

