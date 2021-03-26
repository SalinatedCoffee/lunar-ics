/**
 * Handles sending requests / getting responses from the API endpoint.
 * TODO: Maybe remove authentication key handling somewhere else
 */

const res = require('dotenv').config();

if (res.error) {
    throw res.error;
}

const AUTH_KEY = process.env.AUTH_KEY;
const ENDPOINT_URL = process.env.ENDPOINT_URL;
/* getLunCallInfo: Converts Korean lunar date to Gregorian date.
 * int lunYear: Year of Korean lunar date to convert
 * int lunMonth: Month of Korean lunar date to convert
 * int lunDay: Day of Korean lunar date to convert
 * 
 * Example request: {ENDPOINT_URL}/{KLUN2GREG}?{KLUN2GREG_Y}=2015&{KLUN2GREG_M}=01&{KLUN2GREG_D}=01&ServiceKey={AUTH_KEY}
 */
const KLUN2GREG = 'getSolCalInfo';
const KLUN2GREG_Y = 'lunYear';
const KLUN2GREG_M = 'lunMonth';
const KLUN2GREG_D = 'lunDay';

/**
 * Object containing properly formatted date for sendRequest.
 */
class CleanDate{
    year;
    month;
    day;

    /**
     * Constructor for CleanDate object.
     * @param {number} y Year of date to be formatted. 
     * @param {number} m Month of date to be formatted.
     * @param {number} d Day of date to be formatted.
     */
    constructor(y, m, d) {
        if (!(y.isInteger() & m.isInteger() & d.isInteger())) {
            throw 'CleanDate(): Input is malformed.\n' + '('
                  + y.toString() + ', '
                  + m.toString() + ', '
                  + d.toString() + ')';
        }
        this.year = y.toString();
        this.month = m.toString().padStart(2, '0');
        this.day = d.toString().padStart(2, '0');
    }
}


/**
 * Sends a request for a Gregorian date conversion given a Korean lunar date.
 * @param {string} query_y Year of the date to request.
 * @param {string} query_m Month of the date to request.
 *                         Single-digit numbers should be padded with a 0 (e.g. '01' instead of '1').
 * @param {string} query_d Day of the date to request.
 *                         Single-digit numbers should be padded with a 0.
 */
function sendRequest(query_y, query_m, query_d) {
    let request = ENDPOINT_URL + '/' + KLUN2GREG + '?'
              + KLUN2GREG_Y + '=' + query_y
              + '&' + KLUN2GREG_M + '=' + query_m
              + '&' + KLUN2GREG_D + '=' + query_d
              + '&serviceKey=' + AUTH_KEY;

    return fetch(request)
            .then((response) => response.text())
            .catch((error) => error);
}

module.exports = {
    sendRequest,
    CleanDate
}