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
        $("#survey-result").text(result);

        if (result === 0) {
            return $("#survey-result").text("FIRST BRANCH")
        }
        else if (result === 5) {
            return $("#survey-result").text(" ELSE IF BRANCH")
        }
        else { return $("#survey-result").text("CATCH ALL BRANCH") }
    })
})