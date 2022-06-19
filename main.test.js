const supertest = require('supertest');
const User = require('./user');
const request = supertest('http://localhost:3000');

describe('Express Route Test', function () {
	// it('should return hello world', async () => {
	// 	return request.get('/hello')
	// 		.expect(200)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('Hello BENR2423');
	// 		});
	// })



	it('register', async () => {
		return request.post('/register')
			.expect(200)
			.then(res=>{
				expect(res.text).toBe(true)
			})
	})
		 
	})
	it('reserve', async () => {
		return request.post('/reserve')
			.expect(200)
			.then(res=>{
				expect(res.text).toBe(true)
			})
	})
	
	it('roomclean', async () => {
		return request.post('/roomclean')
		.expect(200)
		.then(res=>{
			expect(res.text).toBe("request to clean the room")
		})
	})
	
	it('cancellation', async () => {
		return request.post('/cancellation')
			.expect(200)
			.then(res=>{
				expect(res.text).toBe("cancel the room")
			})
	})
	it('food', async () => {
		return request.post('/food')
		.expect(200)
		.then(res=>{
			expect(res.text).toBe(true)
		})
	})
	it('parking', async () => {
		return request.post('/parking')
		.expect(200)
		.then(res=>{
			expect(res.text).toBe(true)
		})
    })
	
	it('availability', async () => {
		return request.post('/availability')
		.expect(200)
		.then(res=>{
			expect(res.text).toBe(true)
		})
	})
	it('payment', async () => {
		return request.post('/payment')
		.expect(200)
		.then(res=>{
			expect(res.text).toBe(true)
		})
	})

	
