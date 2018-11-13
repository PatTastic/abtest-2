// set survey style
Survey.Survey.cssType = 'bootstrap';

// get json data
var surveyJSON = json;

// survey complete action
function thankYou(survey) {
    console.log('Survey Complete', survey);

    // redirect to thank you page
    window.location = 'thankyou.html';
}

// create survey
var survey = new Survey.Model(surveyJSON);
$('#surveyContainer').Survey({
    model: survey,
    onComplete: thankYou
});
