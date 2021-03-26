function add(q1, q2, q3, q4, q5) {
    return q1 + q2 + q3 + q4 + q5;
}


$(document).ready(function () {
    const result = $('.form-group').submit(function (event) {
        event.preventDefault()
        const q1 = parseInt($('#question1').val());
        const q2 = parseInt($('#question2').val());
        const q3 = parseInt($('#question3').val());
        const q4 = parseInt($('#question4').val());
        const q5 = parseInt($('#question5').val());
        const result = add(q1, q2, q3, q4, q5);
        $("#survey-result").text(result);

        if (result === 0) {
            return $("#survey-result").text("You are a DEMOCRAT!")
        }
        else if (result === 5) {
            return $("survey-resultt").text("You're a TRUMP supporter")
        }
        else { return $("#survey-result").text("do you even follow politics?") }
    })
})