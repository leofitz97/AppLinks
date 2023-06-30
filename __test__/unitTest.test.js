const request = require('supertest');
const app = require('../express-app');




describe('Validate Create App Test', () => {
    
    test("should respond with status code 200", async () => {
         
        const res = await request(app).post("/test").send({
            name: 'app',
            icon: 'http://icon.com',
            url: 'http://hsi.com'
        })
        expect(res.statusCode).toEqual(200);
        expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

    describe('Testing required empty fields string returns error type required', () => {
        test('required name field empty', async()=>{
    
            const response = await request(app).post('/test').send({
            name: '',
            icon: 'http://fskj.com',
            url: 'http://uiewlj.com'
            })
    
            expect(response.statusCode).toBe(400);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(response.body).toEqual({
                message: 'app name is a required field',
                error: {
                    name: 'ValidationError',
                    type: 'required'
                }
            })
        })
    
        test('required icon field empty', async()=>{
    
            const response = await request(app).post('/test').send({
            name: 'app',
            icon: '',
            url: 'http://uiewlj.com'
            })
    
            expect(response.statusCode).toBe(400);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(response.body).toEqual({
                message: 'app icon is a required field',
                error: {
                    name: 'ValidationError',
                    type: 'required'
                }
            })
        })
    
        test('required url field empty', async()=>{
    
            const response = await request(app).post('/test').send({
            name: 'app',
            icon: 'http://fskj.com',
            url: ''
            })
    
            expect(response.statusCode).toBe(400);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(response.body).toEqual({
                message: 'app url is a required field',
                error: {
                    name: 'ValidationError',
                    type: 'required'
                }
            })
        })
    })
    
    describe('Testing missing fields returns error type optionality', () => {
        test('missing url field', async()=>{

            const response = await request(app).post('/test').send({
            // name: 'app',
            icon: 'http://fskj.com',
            url: 'http://sfljs.com'
            })
    
            expect(response.statusCode).toBe(400);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(response.body).toEqual({
                message: 'app name is a required field',
                error: {
                    name: 'ValidationError',
                    type: 'optionality'
                }
            })
        })
    
        test('missing icon field', async()=>{
    
            const response = await request(app).post('/test').send({
            name: 'app',
            // icon: 'http://fskj.com',
            url: 'http://sfljs.com'
            })
    
            expect(response.statusCode).toBe(400);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(response.body).toEqual({
                message: 'app icon is a required field',
                error: {
                    name: 'ValidationError',
                    type: 'optionality'
                }
            })
        })
    
        test('missing url field', async()=>{
    
            const response = await request(app).post('/test').send({
            name: 'app',
            icon: 'http://fskj.com',
            // url: 'http://sfljs.com'
            })
    
            expect(response.statusCode).toBe(400);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(response.body).toEqual({
                message: 'app url is a required field',
                error: {
                    name: 'ValidationError',
                    type: 'optionality'
                }
            })
        })
    })    
})
