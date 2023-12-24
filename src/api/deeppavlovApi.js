export async function askQuestion(context, question) {
    let body = {
        "context_raw": [context],
        "question_raw": [question]
    }
    console.log(JSON.stringify(body))
    let result = await fetch('http://127.0.0.1:5005/model', {
        headers: {
            "Content-type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(body)
    })
    return await result.json()
}