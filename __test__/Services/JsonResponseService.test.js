const JsonResponse = require('../../Services/JsonResponseService');

describe('Json Response', () => {
    test('it should exist', () => {
        expect(JsonResponse()).toBeDefined();
    })

    test('return value status property should be a number', () => {
        let response = JsonResponse();
        expect(typeof response.status).toBe('number');
        expect(response).toHaveProperty('status', 200);
    })

    test('return value data property should be an array', () => {
        let response = JsonResponse();
        expect(Array.isArray(response.data)).toBe(true);
        expect(response).toHaveProperty('data', []);
    })

})