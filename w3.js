const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.qjna1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err){
        console.log(err.message)
        return
      }
      console.log("Connected to MongoDB");
      
      client.db('MyDatabase').collection('people').insertOne({
        name: 'Abby Rowe',
        city: '金鑫 熊',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1150.jpg',
        pass: '$2a$10$QRu2DaBD8h5fsaTFq9PoN.4/QMtFih0v1xnugaK3kmwUQh.Gh158m',
      }).then(result => {
        console.log(result);
      //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
/*client.db('sample_training').collection('inspections').findOne().then(result => {
console.log(result);*/
  })
});