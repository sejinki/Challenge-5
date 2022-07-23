$(document).ready(function () {
    for (var i = 9; i < 18; i++) {
        var momentHour = moment().hours();
        var colorKey = "";
        if(momentHour > i){colorKey = "past"}
        else if(momentHour === i){colorKey = "present"}
        else {colorKey = "future"};
        var hourDisplay = "";
        if(i < 12){hourDisplay = i + " a.m."}
        else if(i ===  12){hourDisplay = i + " p.m."}
        else {hourDisplay = i - 12 + " p.m."}
        var rowDiv = $("<div>").addClass("row time-block");
        var hourDiv = $("<div>").addClass("col-2 hour").text(hourDisplay);
        var textArea = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(i));
        var button = $("<button>").addClass("btn btn-primary saveBtn").text("save").attr("id", i).on("click", function () {
             console.log(this) 
            var key = $(this).attr("id");
            var activity = $(this).siblings(".description").val();
            localStorage.setItem(key, activity);
            });
        $(".container").append(rowDiv.append(hourDiv, textArea, button));
    }
})
// '      <div class="row time-block">
// <div class="col-2">9am</div>
// <textarea class="col-8"></textarea>
// <button class="btn btn-primary saveBtn">save</button>
// </div>'