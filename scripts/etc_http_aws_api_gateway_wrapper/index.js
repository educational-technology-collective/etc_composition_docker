export class AWSAPIGatewayWrapper {
    _url;
    _bucket;
    _path;
    _retry;
    _errorHandler;
    constructor({ url, bucket, path, retry = 1000, errorHandler = console.error }) {
        this.request = this.request.bind(this);
        this.requestAsync = this.requestAsync.bind(this);
        this._url = url;
        this._bucket = bucket;
        this._path = path;
        this._retry = retry;
        this._errorHandler = errorHandler;
    }
    request(data) {
        (async () => {
            try {
                await this.requestAsync(data);
            }
            catch (e) {
                if (typeof this._retry == "number") {
                    setTimeout(this.request, this._retry, data);
                }
            }
        })();
    }
    async requestAsync(data) {
        let response;
        try {
            response = await fetch([this._url, this._bucket, this._path].join("/"), {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data)
            });
            if (response.status !== 200) {
                throw new Error(JSON.stringify({
                    "response.status": response.status,
                    "response.statusText": response.statusText,
                    "response.text": await response.text()
                }));
            }
            return response;
        }
        catch (e) {
            if (typeof this._errorHandler == "function") {
                this._errorHandler(e);
            }
            throw e;
        }
    }
}
