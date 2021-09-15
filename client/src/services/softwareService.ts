import { baseService } from "./baseService";

export async function softwareService(value?: string, options?: any) {
    const method = "GET";
    const url = "api/software";

    const valueList = value?.split(".");
    const requestOptions = { ...options };

    const isValueVersion = Number.parseInt(valueList?.[0]!);

    if (isNaN(isValueVersion)) {
        requestOptions.name = value;
    } else {
        requestOptions.version = value;
    }

    const requestInit: Partial<Request> = {
        method,
        url,
    };
    return baseService(requestInit, requestOptions);
}
