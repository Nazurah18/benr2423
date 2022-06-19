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

app.post('/login',async (req, res) => {
	console.log(req.body);n

	const user = await User.login(req.body.username, req.body.password);
    
	res.json({
	_id: '123456',
	name: 'test',
	age: 18,
	 })
})

app.post('/register', async (req, res) => {
	console.log(req.body);

	// res.json({
	// 	_id: '123456',
	// 	name: 'test',
	// 	age: 18,
	// })
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})