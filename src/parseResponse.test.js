const parseResponse = require('./parseResponse');

const MOCK_RESPONSE = '<response> \
                           <header> \
                               <resultCode>00</resultCode> \
                               <resultMsg>NORMAL SERVICE.</resultMsg> \
                           </header> \
                           <body> \
                               <items> \
                                   <item> \
                                   <lunDay>22</lunDay> \
                                       <lunIljin>계미(癸未)</lunIljin> \
                                       <lunLeapmonth>평</lunLeapmonth> \
                                       <lunMonth>09</lunMonth> \
                                       <lunNday>30</lunNday> \
                                       <lunSecha>을미(乙未)</lunSecha> \
                                       <lunWolgeon>병술(丙戌)</lunWolgeon> \
                                       <lunYear>2015</lunYear> \
                                       <solDay>03</solDay> \
                                       <solJd>2457330</solJd> \
                                       <solLeapyear>평</solLeapyear> \
                                       <solMonth>11</solMonth> \
                                       <solWeek>화</solWeek> \
                                       <solYear>2015</solYear> \
                                   </item> \
                               </items> \
                               <numOfRows>10</numOfRows> \
                               <pageNo>1</pageNo> \
                               <totalCount>1</totalCount> \
                           </body> \
                       </response>';

test('testing whether raw string parses as expected', () => {
    let res = parseResponse.parseXml(MOCK_RESPONSE);

    expect(res.getElementsByTagName('resultCode')[0].childNodes[0].nodeValue).toBe('00');
    expect(res.getElementsByTagName('solJd')[0].childNodes[0].nodeValue).toBe('2457330');
});