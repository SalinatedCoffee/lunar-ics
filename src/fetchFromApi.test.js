require('dotenv').config();
const fetchFromApi = require('./fetchFromApi');
const AUTH_KEY = process.env.AUTH_KEY;

const MOCK_RESPONSE = '<response></response>';

beforeEach(() => {
    fetch.resetMocks();
});

test('testing whether query was formed correctly', () => {
    fetch.mockResponseOnce(MOCK_RESPONSE);
    let test_y = '1337';
    let test_m = '07';
    let test_d = '21';

    return fetchFromApi.sendRequest(test_y, test_m, test_d)
           .then((response) => {
               expect(fetch.mock.calls[0][0]).toBe('http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getSolCalInfo?lunYear='
                                                  + test_y
                                                  + '&lunMonth=' + test_m
                                                  + '&lunDay=' + test_d
                                                  + '&serviceKey=' + AUTH_KEY);
           });
});

test('testing whether fetchFromApi returns expected string', () => {
    fetch.mockResponseOnce(MOCK_RESPONSE);

    return fetchFromApi.sendRequest('','','')
           .then((response) => {
               expect(response).toBe(MOCK_RESPONSE);
           });
});