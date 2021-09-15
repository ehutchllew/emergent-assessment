import { baseService } from "./baseService";

export async function softwareService(name?: string, options?: any) {
    const method = "GET";
    let url = "api/software";

    if (name) {
        url.concat(`/${name}`);
    }

    const requestInit: Partial<Request> = {
        method,
        url,
    };
    return baseService(requestInit, options);
}
