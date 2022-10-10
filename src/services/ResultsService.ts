export const resultsService = async (id: string): Promise<{ id: string, status: string, urls: String[] }> => {
    const obj: RequestInit = {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(`http://testapp.axreng.com:3000/crawl/${id}`, obj);
    return response.json();
}