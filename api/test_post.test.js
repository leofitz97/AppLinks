const request = require('supertest');
// const api = require('./appsTest');
const { GenerateSignature } = require('../../utils');
const apps = require('../appTest');
const signature = GenerateSignature({id:2, name:'lioms'});

describe('POST /test/apps/add', ()=>{
    
    describe('with authentication', () => {

        describe('given name, icon, url to create app link', ()=>{

            test('should respond with a status code of 200', async()=>{
    
                const response = await request(apps).post('/test/apps/add').send({ 
                    name: 'app',
                    icon: 'http://fskj.com',
                    url: 'http://uiewlj.com'
                }).set('Cookie', signature)
                expect(response.statusCode).toBe(200);
                
            })
    
            test('should respond with json message object', async() => {
                const response = await request(apps).post('/test/apps/add').send({ 
                    name: 'app',
                    icon: 'http://fskj.com',
                    url: 'http://uiewlj.com'
                })
                .set('Cookie', signature);
    
                expect(response.body).toEqual({
                    message: 'app link has been created successfully!'
                })
            })
            
            test('should specify json in the content type header',async()=>{
                const response = await request(apps).post('/test/apps/add').set('Cookie', signature);
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
            })
    
        })

        describe('when the name, icon or url is empty string or is missing', ()=>{
        
            describe('should respond with the status code of 400', ()=>{
                
                test('required name field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: '',
                    icon: 'http://fskj.com',
                    url: 'http://uiewlj.com'
                    })
                    .set('Cookie', signature)
    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'app name is required is a required field',
                        error: {
                            name: 'ValidationError',
                            type: 'required'
                        }
                    })
                })
    
                test('required icon field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: 'app',
                    icon: '',
                    url: 'http://uiewlj.com'
                    })
                    .set('Cookie', signature)
    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'app icon is required is a required field',
                        error: {
                            name: 'ValidationError',
                            type: 'required'
                        }
                    })
                })
    
                test('required url field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: 'app',
                    icon: 'http://fskj.com',
                    url: ''
                    })
                    .set('Cookie', signature)
    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'app url is required is a required field',
                        error: {
                            name: 'ValidationError',
                            type: 'required'
                        }
                    })
                })
    
                test('missing url field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    // name: 'app',
                    icon: 'http://fskj.com',
                    url: 'http://sfljs.com'
                    })
                    .set('Cookie', signature)
    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'app name is required is a required field',
                        error: {
                            name: 'ValidationError',
                            type: 'optionality'
                        }
                    })
                })
    
                test('missing icon field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: 'app',
                    // icon: 'http://fskj.com',
                    url: 'http://sfljs.com'
                    })
                    .set('Cookie', signature)
    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'app icon is required is a required field',
                        error: {
                            name: 'ValidationError',
                            type: 'optionality'
                        }
                    })
                })
    
                test('missing url field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: 'app',
                    icon: 'http://fskj.com',
                    // url: 'http://sfljs.com'
                    })
                    .set('Cookie', signature)
    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'app url is required is a required field',
                        error: {
                            name: 'ValidationError',
                            type: 'optionality'
                        }
                    })
                })
            })
            
        })
    })
    
    describe('without authentication', () => {
        describe('given name, icon, url to create app link', ()=>{

            test('should respond with a status code of 400', async()=>{
    
                const response = await request(apps).post('/test/apps/add').send({ 
                    name: 'app',
                    icon: 'http://fskj.com',
                    url: 'http://uiewlj.com'
                })
                expect(response.statusCode).toBe(400);
                
            })
    
            test('should respond with json message object', async() => {
                const response = await request(apps).post('/test/apps/add').send({ 
                    name: 'app',
                    icon: 'http://fskj.com',
                    url: 'http://uiewlj.com'
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
                expect(response.body).toEqual({
                    message: 'unknown authorization, please sign in!',
                    error: 'bad request'
                })
            })
    
        })

        describe('when the name, icon or url is empty string or is missing', ()=>{
        
            describe('should respond with the status code of 400', ()=>{
                
                test('required name field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: '',
                    icon: 'http://fskj.com',
                    url: 'http://uiewlj.com'
                    })    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'unknown authorization, please sign in!',
                        error: 'bad request'
                    })
                })
    
                test('required icon field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: 'app',
                    icon: '',
                    url: 'http://uiewlj.com'
                    })    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'unknown authorization, please sign in!',
                        error: 'bad request'
                    })
                })
    
                test('required url field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: 'app',
                    icon: 'http://fskj.com',
                    url: ''
                    })    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'unknown authorization, please sign in!',
                        error: 'bad request'
                    })
                })
    
                test('missing url field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    // name: 'app',
                    icon: 'http://fskj.com',
                    url: 'http://sfljs.com'
                    })    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'unknown authorization, please sign in!',
                        error: 'bad request'
                    })
                })
    
                test('missing icon field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: 'app',
                    // icon: 'http://fskj.com',
                    url: 'http://sfljs.com'
                    })    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'unknown authorization, please sign in!',
                        error: 'bad request'
                    })
                })
    
                test('missing url field', async()=>{
    
                    const response = await request(apps).post('/test/apps/add').send({
                    name: 'app',
                    icon: 'http://fskj.com',
                    // url: 'http://sfljs.com'
                    })    
                    expect(response.statusCode).toBe(400)
                    expect(response.body).toEqual({
                        message: 'unknown authorization, please sign in!',
                        error: 'bad request'
                    })
                })
            })
            
        })
    })
    

    
})


describe('UPDATE /test/app/:id', ()=>{

    describe('with authentication', () => {
        
        describe('given a name to update app link name', ()=>{

            test('should respond with a status code of 200', async()=>{
                const response = await request(apps).patch('/test/apps/98').send({name:'ufasi'}).set('Cookie', signature)
                expect(response.statusCode).toBe(200);
            })
    
            test('should specify json in the content type header',async()=>{
                const response = await request(apps).patch('/test/apps/78').send({ name: "ufasi" }).set('Cookie', signature)
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
            })
    
            test('should respond with json object of message', async() => {
                const response = await request(apps).patch('/test/apps/98').send({name:'ufasi'}).set('Cookie', signature)
                expect(response.body).toEqual({ message: 'app has been successfully updated!' });
            })
        })
    
        describe('given name field is missing', ()=>{
    
            test('should respond with a status code of 400 when name is missing', async()=>{
                const response = await request(apps).patch('/test/apps/78').set('Cookie', signature)
                expect(response.statusCode).toBe(400);
            })
            
            test('should respond with content type header json', async() => {
                const response = await request(apps).patch('/test/apps/78').set('Cookie', signature);
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            })
            
            test('should respond with json object of error message', async() => {
                const response = await request(apps).patch('/test/apps/78').set('Cookie', signature);
                expect(response.body).toEqual({
                    message: 'app name is required is a required field',
                    error: {
                        name: 'ValidationError',
                        type: 'optionality'
                    }
                })
            })
        })
    
        describe('given name field is an empty string', () => {    
    
            test('should respond with a status code of 400', async()=>{
                const response = await request(apps).patch('/test/apps/78').send({name:''}).set('Cookie', signature)
                expect(response.statusCode).toBe(400);
            })
    
            test('should respond with content type header json', async() => {
                const response = await request(apps).patch('/test/apps/78').send({name:''}).set('Cookie', signature);
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            })
            
            test('should respond with json object of error message', async() => {
                const response = await request(apps).patch('/test/apps/78').send({name:''}).set('Cookie', signature);
                expect(response.body).toEqual({
                    message: 'app name is required is a required field',
                    error: {
                        name: 'ValidationError',
                        type: 'required'
                    }
                })
            })
        })
    })
    
    describe('without authentication', () => {
        
        describe('given a name to update app link name', ()=>{

            test('should respond with a status code of 400', async()=>{
                const response = await request(apps).patch('/test/apps/98').send({name:'ufasi'})
                expect(response.statusCode).toBe(400);
            })
    
            test('should specify json in the content type header',async()=>{
                const response = await request(apps).patch('/test/apps/78').send({ name: "ufasi" })
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
            })
    
            test('should respond with json object of error', async() => {
                const response = await request(apps).patch('/test/apps/98').send({name:'ufasi'})
                expect(response.body).toEqual({ 
                    message: 'unknown authorization, please sign in!',
                    error: 'bad request',
                });
            })
        })

        describe('given name field is missing', ()=>{
    
            test('should respond with a status code of 400 when name is missing', async()=>{
                const response = await request(apps).patch('/test/apps/78')
                expect(response.statusCode).toBe(400);
            })
            
            test('should respond with content type header json', async() => {
                const response = await request(apps).patch('/test/apps/78')
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            })
            
            test('should respond with json object of error message', async() => {
                const response = await request(apps).patch('/test/apps/78')
                expect(response.body).toEqual({
                    message: 'unknown authorization, please sign in!',
                    error: 'bad request'
                })
            })
        })
    
        describe('given name field is an empty string', () => {    
    
            test('should respond with a status code of 400', async()=>{
                const response = await request(apps).patch('/test/apps/78').send({name:''})
                expect(response.statusCode).toBe(400);
            })
    
            test('should respond with content type header json', async() => {
                const response = await request(apps).patch('/test/apps/78').send({name:''})
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            })
            
            test('should respond with json object of error message', async() => {
                const response = await request(apps).patch('/test/apps/78').send({name:''})
                expect(response.body).toEqual({
                    message: 'unknown authorization, please sign in!',
                    error: 'bad request'
                })
            })
        })
    })
    
})


describe('GET /test/app/:id', () => {
    
    describe('with authentication', () => {
        test('should respond with a status code of 200', async() => {
            const response = await request(apps).get('/test/apps/78').set('Cookie', signature);
            expect(response.statusCode).toBe(200);
        })
    
        test('should respond with content type header json', async() => {
            const response = await request(apps).get('/test/apps/78').set('Cookie', signature);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        })
        
        test('should respond with json object of message and app link data of array type', async() => {
            const response = await request(apps).get('/test/apps/78').set('Cookie', signature);
            expect(response.body).toEqual({
                message: 'success',
                
            })
        })
    })
    
    describe('without authentication', () => {

        test('should respond with a status code of 400', async() => {
            const response = await request(apps).get('/test/apps/78');
            expect(response.statusCode).toBe(400);
        })
    
        test('should respond with content type header json', async() => {
            const response = await request(apps).get('/test/apps/78');
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        })
        
        test('should respond with json object of message and app link data of array type', async() => {
            const response = await request(apps).get('/test/apps/78');
            expect(response.body).toEqual({
                message: 'unknown authorization, please sign in!',
                error: 'bad request'
            })
        })
    })
    
})

describe('DELETE /test/apps/:id', () => {

    describe('with authentication', () => {
    
        test('should respond with a status code of 200', async() => {
            const response = await request(apps).delete('/test/apps/78').set('Cookie', signature);
            expect(response.statusCode).toBe(200);
        })
    
        test('should respond with content type header json', async() => {
            const response = await request(apps).delete('/test/apps/78').set('Cookie', signature);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        })
        
        test('should respond with json object of message and app link data of array type', async() => {
            const response = await request(apps).delete('/test/apps/78').set('Cookie', signature);
            expect(response.body).toEqual({message: 'app has been deleted successfully!'});
        })
    })
        
    describe('without authentication', () => {

        test('should respond with a status code of 400', async() => {
            const response = await request(apps).delete('/test/apps/78');
            expect(response.statusCode).toBe(400);
        })
    
        test('should respond with content type header json', async() => {
            const response = await request(apps).delete('/test/apps/78');
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        })
        
        test('should respond with json object of message and app link data of array type', async() => {
            const response = await request(apps).delete('/test/apps/78');
            expect(response.body).toEqual({
                message: 'unknown authorization, please sign in!',
                error: 'bad request'
            })
            
        })
    })
    
})


describe('GET /test/apps/', () => {
    
    describe('all users can view without authentication', () => {
        
        test('should respond with status code of 200', async() => {
            const response = await request(apps).get('/test/apps')
            expect(response.statusCode).toBe(200)
        })
        
        test('should respond with content type header json', async()=>{
            const response = await request(apps).get('/test/apps')
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
        })

        test('should respond with all app links', async()=>{
            const response = await request(apps).get('/test/apps')
            expect(response.body).toEqual({
                message:'success',
            })
        })
    })
    
})

