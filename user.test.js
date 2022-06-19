const MongoClient = require("mongodb").MongoClient;
const User = require("./user")

describe("User Account Management", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.qjna1.mongodb.net/?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		User.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

	test('register', async () => {
		const res=await User.register("test","test","test","test")
		expect(res.status).toBe(true);
	})
	test('reserve', async () => {
		const res=await User.reserve("test","test","test","test","test","test","test","test")
		expect(res.status).toBe(true);
	})
	test('roomclean', async () => {
		const res=await User.roomclean("test","test","test")
		expect(res.status).toBe("request to clean the room");
	})
	
	test('cancellation', async () => {
		const res=await User.cancellation("test","test","test")
		expect(res.status).toBe("cancel the room");
	})
	test('food', async () => {
		const res=await User.food("test","test","test","test","test")
		expect(res.status).toBe(true);
	})
	test('parking', async () => {
		const res=await User.roomclean("test","test","test","test")
		expect(res.status).toBe(true);
	})
	
	test('availability', async () => {
		const res=await User.availability("test","test")
		expect(res.status).toBe(true);
	})
	test('payment', async () => {
		const res=await User.paymentd("test","test","test","test")
		expect(res.status).toBe(true);
	})
});