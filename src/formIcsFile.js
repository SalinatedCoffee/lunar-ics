const today = new Date(Date.now());
const TEMPLATE_START = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//S.COFFEE//NONSGML v1.0//EN';
const CL_END = 'END:VCALENDAR';
const EV_BEGIN = 'BEGIN:VEVENT';
const EV_END = 'END:VEVENT';
const DTSTAMP = 'DTSTAMP:' + today.toISOString();
const EV_DATE = 'DTSTART:' + '20210326';
const EV_SUM = 'SUMMARY:' + 'Some Generic Text Here';


/**
 * Given a Gregorian date, generates a string for a single-day event in .ics format.
 * @param {*} date Gregorian date of the event.
 * @param {string} description Description of the event.
 */
function generateVevent(date, description) {
    var res_str = '';
    res_str += EV_BEGIN + '\n';
    res_str += DTSTAMP + '\n';
    res_str += EV_DATE + '\n';
    res_str += EV_SUM + '\n';
    res_str += EV_END + '\n';

    return res_str;
}