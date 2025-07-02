'use server'
import {connectToDatabase} from '@/lib/db'
import Product, { IProduct } from '../db/models/productModel'
export const getAllCategories=async()=>{
    await connectToDatabase()
    const categories=await Product.find({isPublished:true}).distinct('category')
    return categories
}
export const getProductForCard=async({tag,limit=4}:{tag:string,limit?:number})=>{
    await connectToDatabase()
    const products=await Product.find({tags:{$in:[tag]},isPublished:true},
        {name:1,href:{$concat:['/product/','$slug']},image:{$arrayElemAt:['$images',0]}}
    ).sort({createdAt:'desc'}).limit(limit)
    return JSON.parse(JSON.stringify(products)) as {
        name:string,
        href:string,
        image:string
    }[]
}
export const getProductsByTag=async({tag,limit=10}:{tag:string,limit?:number})=>{
await connectToDatabase()
const products=await Product.find({
    tags:{$in:[tag]},
    isPublished:true
}).sort({createdAt:'desc'}).limit(limit)
return JSON.parse(JSON.stringify(products)) as IProduct[]
}