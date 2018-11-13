/*
    Moved json to seperate file to keep things clean
*/

var json = {
    title: "Employment Screening Questionnaire",
    pages: [
        {
            name: "pageBasics",
            elements: [
                {
                    type: "text",
                    name: "postingLocation",
                    title: "Where did you see our posting?"
                },
                {
                    type: "radiogroup",
                    name: "telephoneInterview1",
                    title: "Would you be willing to participate in a telephone interview?​​​",
                    choices: [
                        {
                            value: "item1",
                            text: "Yes"
                        },
                        {
                            value: "item2",
                            text: "No"
                        }
                    ]
                }
            ],
            title: "Basics"
        },
        {
            name: "pageExpectations",
            elements: [
                {
                    type: "text",
                    name: "decisionCriteria",
                    title: "What decision criteria will you use to decide whether you will accept this job offer if it is offered to you?"
                },
                {
                    type: "text",
                    name: "minSalary1",
                    title: "What is the minimum starting yearly salary that you will accept for this position?",
                    inputType: "number"
                }
            ],
            title: "Expectations"
        },
        {
            name: "pageStrengths",
            elements: [
                {
                    type: "text",
                    name: "techSkills",
                    title: "What knowledge areas and technical skills are your strongest?"
                },
                {
                    type: "text",
                    name: "bestWork",
                    title: "Can you provide us with a sample or demonstration of your best work?"
                }
            ],
            title: "Personal Strengths"
        },
        {
            name: "pageMotivations",
            elements: [
                {
                    type: "comment",
                    name: "questionFuture",
                    title: "Where do you expect to be in two years? Five years?"
                },
                {
                    type: "text",
                    name: "questionDevelopment",
                    title: "Are you interested in further professional development?"
                }
            ],
            title: "Personal Motivations "
        },
        {
            name: "pageWrapUp",
            elements: [
                {
                    type: "text",
                    name: "questionStart",
                    title: "When can you start work if you are hired?",
                    inputType: "date"
                },
                {
                    type: "text",
                    name: "questionEmail",
                    title: "What email may we contact you with?",
                    validators: [
                        {
                            type: "email"
                        }
                    ],
                    inputType: "email"
                }
            ],
            title: "Wrap Up"
        }
    ],
    showPageNumbers: true,
    showProgressBar: "bottom"
};
