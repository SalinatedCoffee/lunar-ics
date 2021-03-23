/**
 * Handles sending requests / getting responses from the API endpoint.
 */

require('dotenv').config()
AUTH_KEY = process.env.AUTH_KEY
ENDPOINT_URL = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService'
/* getLunCallInfo: Converts Gregorian date to Korean Lunar date.
 * int solYear: Year of Gregorian date to convert
 * int solMonth: Month of Gregorian date to convert
 * int solDay: Day of Gregorian date to convert
 * 
 * Example request: {ENDPOINT_URL}/{GREG2KLUN}?{GREG2KLUN_Y}=2015&{GREG2KLUN_M}=01&{GREG2KLUN_D}=01&ServiceKey={AUTH_KEY}
 */
GREG2KLUN = 'getLunCallInfo'
GREG2KLUN_Y = 'solYear'
GREG2KLUN_M = 'solMonth'
GREG2KLUN_D = 'solDay'

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
                  + d.toString() + ')'
        }
        this.year = y.toString()
        this.month = m.toString().padStart(2, '0')
        this.day = d.toString().padStart(2, '0')
    }
}


/**
 * Sends a request for a Korean lunar date conversion given a Gregorian date.
 * TODO: Parse response XML to something else
 * @param {string} query_y Year of the date to request.
 * @param {string} query_m Month of the date to request.
 *                         Single-digit numbers should be padded with a 0 (e.g. '01' instead of '1').
 * @param {string} query_d Day of the date to request.
 *                         Single-digit numbers should be padded with a 0.
 */
function sendRequest(query_y, query_m, query_d) {
    request = ENDPOINT_URL + '/' + GREG2KLUN + '?'
              + GREG2KLUN_Y + '=' + query_y
              + GREG2KLUN_M + '=' + query_m
              + GREG2KLUN_D + '=' + query_d
              + '&ServiceKey=' + AUTH_KEY

    return fetch(request)
            .then((response) => null)
}