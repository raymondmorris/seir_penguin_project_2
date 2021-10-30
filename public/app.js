// Menu sandwich
const $menuButton = $(".nav-hamburger")
const $navHamburger = $("#main-header-nav")
$(".logged-out-links").hide()
$(".logged-in-links").hide()

let menuOpen = false;
$menuButton.on("click", () => {
    if(!menuOpen) {
        $navHamburger.addClass("open");
        menuOpen = true;
        if(menuOpen = true) {
            $(".logged-out-links").show(400)
            $(".logged-in-links").show(400)
        }
    } else {
        $navHamburger.removeClass("open");
        menuOpen = false;
        $(".logged-out-links").css("display", "none")
        $(".logged-in-links").css("display", "none")

    }
});

// Main page modal
const $modal = $("#main-modal")
const $button = $(".modal-click")
const $span = $(".close")

$button.on("click", () => {
    $modal.css("display", "block")
})
$span.on("click", () => {
    $modal.css("display", "none")
})
$modal.on("click", function(event){
    if (event.target == $modal) {
        $modal.css("display", "none")
    }
})

//Show page modals for delete and edit
const $editModal = $("#edit-modal")
const $editButton = $(".edit-modal-button")
const $editSpan = $(".close")
const $cancel = $(".cancel")

$editButton.on("click", () => {
    $editModal.css("display", "block")
})
$editSpan.on("click", () => {
    $editModal.css("display", "none")
})
$cancel.on("click", () => {
    $editModal.css("display", "none")
})
$editModal.on("click", function(event){
    if (event.target == $editModal) {
        $editModal.css("display", "none")
    }
})


const $deleteModal = $("#delete-modal")
const $deleteButton = $(".delete-modal-button")
const $deleteSpan = $(".close")
const $deleteCancel = (".cancel")

$deleteButton.on("click", () => {
    $deleteModal.css("display", "block")
})
$deleteSpan.on("click", () => {
    $deleteModal.css("display", "none")
})
$cancel.on("click", () => {
    $deleteModal.css("display", "none")
})
$deleteModal.on("click", function(event){
    if (event.target == $deleteModal) {
        $deleteModal.css("display", "none")
    }
})