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

	test("New user registration", async () => {
		const res = await User.register("test", "_id", )
		expect(test).toBe(_id)
	})

	test("Duplicate username", async () => {
		const res = await User.register("test", "1234")
		expect(test).toBe(1234)
	})

	test("User login invalid username", async () => {
		const res = await User.login("test", "test")
		expect(res).toBe("??")
	})

	test("User login invalid password", async () => {
		const res = await User.login("test", "test")
		expect(res).toBe("??") 
	})

	test("User login successfully", async () => {
		const res = await User.login("test", "test")
		expect(res).toBe()
	})

	test('should run', () => {
	});
});