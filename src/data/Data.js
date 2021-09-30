export const data ={
    id: "cb3611f5-e0bb-444a-8b2c-91c669270f86",
    surveyId: "ba632fa4-617a-46a1-8341-d8e5eefaab04",
    text: "Кто я нахуй?",
    questionType: 0,
    variants: [
    {
    id: "48895bfe-813d-435c-889c-debf94110670",
    questionId: "cb3611f5-e0bb-444a-8b2c-91c669270f86",
    text: "хуила"
    },
    {
    id: "639d7da9-609e-48c5-92bb-930db060627f",
    questionId: "cb3611f5-e0bb-444a-8b2c-91c669270f86",
    text: "а??"
    }
]
}

export async function fetchSurvey() {
    var res = await fetch('https://thesurvey20210930185220.azurewebsites.net/surveys/get/', {
        method:"POST",
        body:JSON.stringify({
            "ids":["F1D4B943-EA64-4844-0512-08D9841C61BC"]
        })
    })
    console.log(res)
    return res;
}


// const questionTypes = {
//     "0": "Single",
//     "1": "Multiple",
//     "2": "Input"
//     }