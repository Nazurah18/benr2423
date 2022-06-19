const client= new MongoCLient(uri);
let users;

class User {
	static async injectDB(conn) {
		users = await conn.db("Hotel_management").collection("guest")
	}

	/**
	 * @remarks
	 * This method is not implemented yet. To register a new user, you need to call this method.
	 * 
	 * @param {*} name 
	 * @param {*} _id 
	 * @param {*} phone 
	 * @param {*} address
	 * @param {*} roomtype
	 * @param {*} roomid
	 * @param {*} roomnum 
	 * @param {*} numguest
	 * @param {*} price
	 * @param {*} ci
	 * @param {*} co
	 * @param {*} time
	 * @param {*} fid
	 * @param {*} fprice
	 * @param {*} pid
	 * @param {*} pnam
	 * @param {*} pfloor
	 * @param {*} plate
	 * @param {*} day
     * @param {*} pid
	 * @param {*} date
	 */
	static async register(name, _id,phone,address) {
		// TODO: Check if name exists
		let existance= await users.aggregate([
			{$match:{'name':name}}
		]).toArray();
		if (existance!=''){
			return{status:"name is not found"};
		}
		else if(existance==""){
			return{status: "already register"}
		}
	}
	
    static async reserve(_id,roomid,roomnum,roomtype,numguest,price,ci,co){
      
	}
	

}
	
module.exports = User;