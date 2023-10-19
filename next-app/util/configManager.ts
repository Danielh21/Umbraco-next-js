
interface iConfig {
    apiKey: string,
    domain: string,
    previewEnabled: string
}


export const getConfig = () => {

    process.env.NODE_TLS_REJECT_UNAUTHORIED = "0";

    const apiKey = process.env.UMBRACO_API_KEY ?? "";
    const domain = process.env.UMBRACO_DOMAIN ?? "";
    const previewEnabled = process.env.UMBRACO_PREVIEW_ENABLED ?? "";

    const config: iConfig = {
        apiKey: apiKey,
        domain: domain,
        previewEnabled: previewEnabled
    }
    return config;

}

module.exports = {
    getConfig: getConfig
}