createListElement = (item) => {
  let $listItem = $("<div>").addClass("item-container")
  .append($("<p>").addClass("item-entry").text(item.name));
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

  $('#manual-watch').submit(function(event) {
    // event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/items/watch",
      success: function () {
        $('.edithere').val('');
      }
    })
  })

  $('#manual-read').submit(function(event) {
    // event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/items/read",
      success: function () {
        $('.edithere').val('');
      }
    })
  })

  $('#manual-eat').submit(function(event) {
    // event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/items/eat",
      success: function () {
        $('.edithere').val('');
      }
    })
  })


});




























