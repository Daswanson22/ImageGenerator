// Essentially main function, runs when page is loaded
$(document).ready(function() {
    console.log("Page Loaded Successfully");
    $("#submit").click(function() {
        const userSearch = $("#userSearch").val();
        console.log("Searching for: " + userSearch);

        $.ajax({
            type: 'POST',
            url: '../openai/generateImage',
            data: JSON.stringify({ userSearch }),
            contentType: 'application/json',
            success: function (data) {
                const response = data.response;
                $("#imgContainer").text(response);
            },
            error: function (error) {
                alert('An error occurred: ' + error.responseJSON.error);
            }
        });
    });
})
