function add(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) {
    return q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;
}


$(document).ready(function () {
    const result = $('.form-group').submit(function (event) {
        event.preventDefault()

        const q1 = parseInt($('#question1').val());
        const q2 = parseInt($('#question2').val());
        const q3 = parseInt($('#question3').val());
        const q4 = parseInt($('#question4').val());
        const q5 = parseInt($('#question5').val());
        const q6 = parseInt($('#question6').val());
        const q7 = parseInt($('#question7').val());
        const q8 = parseInt($('#question8').val());
        const q9 = parseInt($('#question9').val());
        const q10 = parseInt($('#question10').val());
        const result = add(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);
        $("#survey-result-showing").text(result);

        if (result < 20) {
            return $("#survey-result-showing").text("FIRST BRANCH")
        }
        else if (result >= 20 && result < 40) {
            return $("#survey-result-showing").text("SECOND BRANCH")
        } else if (result >= 40 && result < 60) {
            return $("#survey-result-showingt").text("THIRD BRANCH")
        } else if (result >= 60 && result < 80) {
            return $("#survey-result-showing").text("FOURTH BRANCH")
        } else if (result > 80) {
            return $("#survey-result-showing").text("FIFTH BRANCH")
        }
        else {
            return $("#survey-result-showing").text("PLEASE ANSWER ALL QUESTIONS BEFORE SUBMITTING")
        }

    })

})
// $("#survey-result-showing").submit(function () {
// $("#survey-result-showing").toggle();
// $("#survey-result-hidden").toggle();

// Ruby
// C#
// JavaScript
// Go
// Python
// Rust
// Swift