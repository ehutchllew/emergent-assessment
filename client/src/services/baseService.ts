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
        if (options.version) {
            searchParams.set("version", options.version);
        }

        if (options.name) {
            searchParams.set("name", options.name);
        }

        endpoint.search = searchParams.toString();
    }

    console.log(endpoint);

    const rawResponse = await fetch(endpoint.href, fetchInit);

    const parsedResponse = await rawResponse.json();

    if (!rawResponse.ok) {
        throw parsedResponse;
    }
    return parsedResponse;
}
