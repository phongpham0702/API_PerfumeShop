const { BadRequestError } = require("../helpers/error.response");
const JWT = require('jsonwebtoken');
const productModel = require("../models/product");
const converterHelper = require("../helpers/converter.helper");
const uploadAvatar = require("../utils/upload.util");


class AdminService{
    
    static AdminLogin = async(username, password) => {

        //check username
        let isUserNameCorrect = username === process.env.ADMIN_ACCOUNT;


        //check password
        let isPasswordCorrect = password === process.env.ADMIN_PASSWORD;

        if(!isUserNameCorrect || !isPasswordCorrect) throw new BadRequestError("incorrect credential");

        //create token
        let adminToken = await JWT.sign({
            isAdmin: true
        }, 
        process.env.ADMIN_SECRETKEY, 
        {
            expiresIn: '6h',
        });

        //return token        
        return adminToken;
    }

    static getAllProduct = async(pagenum = 1) => {
        const productPerPage = 20 ;
        const currentPage = pagenum ;
        let pipeLine = [
            {$skip : (productPerPage * currentPage) - productPerPage },
            {$limit : productPerPage},
            {
                '$project':
                {   
                    '_id':1,
                    'productName': 1,
                    'productBrand': 1,
                    'productThumbnail': 1,
                    'sold':1,
                    'createdAt': 1,
                    'updatedAt': 1
                }
            },
        ]

        let productList = await productModel.aggregate(pipeLine)


        return {
            productPerPage,
            currentPage,
            productList
        }
    }

    static productDetail = async(productId) => {

        const foundProduct = await productModel.findOne({
            _id: converterHelper.toObjectIdMongo(productId)
        },{__v :0}).lean()
        return foundProduct;
    }

    static createProduct = async() => {
        
    }

}

module.exports = AdminService