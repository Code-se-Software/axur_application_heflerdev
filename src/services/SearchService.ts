export const searchService = async (param: string): Promise<{ id: string }> => {

    const obj: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({keyword: param})
    }

    const response = await fetch('http://testapp.axreng.com:3000/crawl', obj);
    return response.json();
}