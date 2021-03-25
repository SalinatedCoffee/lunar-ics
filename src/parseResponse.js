/**
 * Parses raw XML response string.
 * @param {string} response_str XML response in raw string format.
 */
function parseXml(response_str) {
    let parser = new DOMParser();

    return parser.parseFromString(response_str, 'text/xml');
}

module.exports = {
    parseXml
}