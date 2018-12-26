import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
export const connect = () => mongoose.connect('mongodb://admin:dodol123@127.0.0.1/training?authSource=training', { useNewUrlParser: true });

/*
ini kalau mau authentication databasenya di db terpisah
db.createUser({
    user: "admin", 
    pwd: "dodol123", 
    roles: [ { role: "userAdmin", db: "admin" }, 
             { role: "dbAdmin", db: "admin" }, 
             { role: "readWrite", db: "admin" } ]
})

ini kalau mau authentication databasenya di db "training" juga
use training
db.createUser({
    user: "admin", 
    pwd: "dodol123", 
    roles: [ "dbOwner" ]
})
*/
