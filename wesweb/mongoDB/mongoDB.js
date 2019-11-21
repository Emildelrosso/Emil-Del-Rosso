var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 154, name: 'John', address: 'Highway 71'},
        { _id: 155, name: 'Peter', address: 'Lowstreet 4'},
        { _id: 156, name: 'Amy', address: 'Apple st 652'},
        { _id: 157, name: 'Hannah', address: 'Mountain 21'},
        { _id: 158, name: 'Michael', address: 'Valley 345'},
    ];
    dbo.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});