export const httpRequest = (theUrl, method, handler) => {
    let xmlHttp = new XMLHttpRequest();
    if (handler !== undefined && handler !== null) {
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4) {
                handler(JSON.parse(xmlHttp.responseText));
            }
        };
    }

    xmlHttp.open( method, theUrl, true );
    xmlHttp.send();
};

export const listChargingPoints = handler => httpRequest("http://localhost:8080/charging-points", "GET", handler);
export const plugInChargingPoint = (index, handler)=> httpRequest("http://localhost:8080/charging-points/" + index, "PUT", handler);
export const unplugChargingPoint = (index, handler) => httpRequest("http://localhost:8080/charging-points/" + index, "DELETE", handler);

