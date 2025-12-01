// Wait for document to load
$(document).ready(() => {
    $('form').on('submit', () => {

        // prevents default behaviour
        // Prevents event propagation
        return false;
    });
});