import { getConfig } from "./configManager";

const config = getConfig();

export interface APIParams {
    expand: string;
    filter: string;
    skip: string;
    take: string;
}




const callContentDelivertAPI = async (url: URL) => {

    let items;

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'api-key': config.apiKey,
                'preview': config.previewEnabled
            }
        
        });

        items = response.json();

    } catch (error) {
        console.error(error);
    }

    return items;
}



export async function fetchItems(Params: APIParams) {

    let url = new URL(`${config.domain}/umbraco/delivery/api/v1/content?`);

    if (Params.expand) {
        url.searchParams.append("expand", Params.expand);
    }

    if (Params.filter) {
        url.searchParams.append("expand", Params.filter);
    }

    if (Params.skip) {
        url.searchParams.append("expand", Params.skip);
    }
    
    if (Params.take) {
        url.searchParams.append("expand", Params.take);
    }

    return callContentDelivertAPI(url);
}


export async function fetchItem(pathOrId : string, expand : string) {

    let url = new URL(`${config.domain}/umbraco/delivery/api/v1/content/item/${pathOrId}`);

    if(expand) {
        url.searchParams.append("expand", expand);
    }

    return callContentDelivertAPI(url);

}