const MongoClient = require("mongodb").MongoClient;
const User = require("./user");

MongoClient.connect(
	// TODO: Connection 
	"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.qjna1.mongodb.net/?retryWrites=true&w=majority",
	{ useNewUrlParser: true },
)
.then(async client => {
	console.log('Connected to MongoDB');
	User.injectDB(client);
})

const express=require ('express')
const app = express()
const port = process.env.PORT||3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('Hotel Management System')
})

app.get('/', (req, res) => {
	res.send('Hotel Management System')
})

app.post('/register',async (req, res) => {
	

	const newinfo = await User.register(req.body.name, req.body._id, req.body.phone,req.body.address);
    
	if (newinfo.status=="name")
	{
		res.status(200).json({status:"already register"})
		return
	}
	else if (newinfo.status){
		res.status(200).json({status: true})
		app.post ('/reserve',async(req,res)=>{
			const info1=await User.reserve(req.body._id,req.body.roomtype,req.body.roomid,req.body.roomnum,
				req.body.numguest,req.body.price,
				req.body.ci,req.body.co);
			res.json({
				_id: "test",
				roomtype:"test",
				roomid: "test",
				numguest: "test",
				price: "test",
				ci:"test",
				co:"test",

			})
			if(user1.status){
				res.status(200).json({status:true})
			}
			})
		}
	else if (!newinfo.status){
		res.status(401).json({error:'fail to register new guest'})
	}
})

app.read('/roomclean',async(req,res)=>{
	const info2 = await User.roomclean (req.body._id,req.body.roomnum,req.body.time)
	if(info2.status=="roomnum")
	{
		res.status(200).json({status:"request to clean the room"})
	}
	else if(!info2.status){
		res.status(401).json({error:"does not request to clean the room"})
	}
})




app.delete('/cancellation',async(req,res)=>{
 const info=await User.cancel(req.body._id,req.body.roomid)
 if (info.status=='roomid')
 {
	res.status(200).json({status:"cancel the room"})

 }
 else if(info.status){
	res.status(401).json({status:"cannot cancel the room"})
 }
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

app.update('/food',async(req,res)=>{
	const fdinfo=await User.food(req.body.fid,req.body.name,req.body.roomnum,req.body.numguest,req.body.fprice)
	if(fdinfo=="fprice")
	res.status(200).json({status: true })

})
app.post('/parking',async(req,res)=>{
	const park=await User.parking(req.body.pid,req.body.pnum,req.body.ploor,req.body.plate)
	if(park=="pid")
	res.status(200).json({status:true})
})

app.update('/availability',async(req,res)=>{
	const avail= await User.availability(req.body.day,req.body.roomid)
	if(avail=="roomid")
	res.status(200).json({status:true})
})

app.update('/payment',async (req,res)=>{
	const py=await User.payment(req.body.pid,req.body.date,req.body._id)
	if(py=="_id")
	res.status(200).json({status:true})
})