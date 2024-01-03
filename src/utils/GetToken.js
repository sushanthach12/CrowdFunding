
const GetToken = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/token`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    });

    const response = await res.json();

    return response;
}

export default GetToken;