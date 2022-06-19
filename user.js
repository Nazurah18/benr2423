let users;

class User {
	static async injectDB(conn) {
		users = await conn.db("Hotel_management").collection("guest")
	}

	/**
	 * @remarks
	 * This method is not implemented yet. To register a new user, you need to call this method.
	 * 
	 * @param {*} username 
	 * @param {*} _id 
	 
	 */
	static async register(username, _id) {
		// TODO: Check if username exists
		// TODO: Hash password
		// TODO: Save user to database
		// faker.js
		// return
	}

	static async login(username, _id) {
		// TODO: Check if username exists
		findOne({username: username})
		const result=await users.findOne({username})
		if(!result)return{status:'username not found'}

		//TODO: check the match _id
		findOne({_id:_id})
		const iresult=await user.findOne({_id})
		if(!iresult)return{status:'id not found'}

		//TODO:Save user/guest to database
		 //faker.js
		const insertresult=await users.insertOne({username, _id :_id,
			bookHotelStatus:{ verified:true},
			bookHotel_num:1
		})

		// TODO: Validate _id
		compared()
		return false

		// TODO: Return user object
		return user;

		// faker.js
		return
	}
}

module.exports = User;