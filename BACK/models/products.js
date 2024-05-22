<<<<<<< HEAD
class Product{
    // Changes: remove productId and creationDate
    // Why ? => Mongo automatically insert with an _id which is an ObjectId
    // => ObjectId are created with the creationDate inside and it can be infered from it ;) 
    constructor(name, category){
        this.productName = name;
        this.category = category;
    }
}

=======
class Product{
    // Changes: remove productId and creationDate
    // Why ? => Mongo automatically insert with an _id which is an ObjectId
    // => ObjectId are created with the creationDate inside and it can be infered from it ;) 
    constructor(name, category){
        this.productName = name;
        this.category = category;
    }
}

>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
module.exports = {Product};