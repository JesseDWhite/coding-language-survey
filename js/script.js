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

        if (result < 20 && result > 9) {
            return $("#survey-result").text("You are a glutton for punishment. You should learn Javascript!")
        }
        else if (result >= 20 && result < 30) {
            return $("#survey-result").text("Your name is clearly Bill Gates. You should learn C#!")
        } else if (result >= 30 && result < 40) {
            return $("#survey-result").text("You've heard of a computer. You should learn Python!")
        } else if (result >= 40 && result < 50) {
            return $("#survey-result").text("You have a relative with an app idea that's really dumb. You should learn Ruby!")
        } else if (result > 50) {
            return $("#survey-result").text("You are cutting edge for your age. You should learn Rust!")
        }
        else {
            return $("#survey-result").text("PLEASE ANSWER ALL QUESTIONS BEFORE SUBMITTING!")
        }
    })
})
// $("#survey-result-showing").submit(function () {
// $("#survey-result-showing").toggle();
// $("#survey-result-hidden").toggle();