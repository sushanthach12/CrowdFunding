export const FetchReq = (fetchBody) => {
    return {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: fetchBody
    }
}