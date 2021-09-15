export async function baseService(req: Partial<Request>, options: any) {
    const DEFAULT_HEADERS = {
        "Content-Type": "application/json",
    };
    const { body, headers = DEFAULT_HEADERS, method = "GET", url = "" } = req;
    const baseUrl = "https://localhost:5001/";
    const endpoint = new URL(baseUrl + url);
    const fetchInit: RequestInit = {
        method,
        headers,
        credentials: "omit",
    };

    if (body) {
        fetchInit.body = JSON.stringify(body);
    }

    if (options) {
        const searchParams = new URLSearchParams({});
        if (options.filter) {
            const hashedFilter = btoa(JSON.stringify(options.filter));
            searchParams.set("filter", hashedFilter);
        }

        if (options.sort) {
            const hashedSort = btoa(JSON.stringify(options.sort));
            searchParams.set("sort", hashedSort);
        }

        endpoint.search = searchParams.toString();
    }

    const rawResponse = await fetch(endpoint as any, fetchInit);

    const parsedResponse = await rawResponse.json();

    if (!rawResponse.ok) {
        throw parsedResponse;
    }
    return parsedResponse;
}
