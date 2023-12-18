import categoryModel from "../Models/categoryModel.js";
import productModel from "../Models/productModel.js";

//Create a new Category Controllwer
export const createCategoryController=async(req,res)=>{
    try {
        const {category }=req.body;
        if(!category){
            return res.status(404).send({
                success:false,
                massage:"Please enter a category name"
            })
        }
        await categoryModel.create({category})
        res.status(201).send({
            success: true,
            message: `${category}Category created successfully`,
          }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            Message: "Error creating category APi"
        })
    }
}

//Get All Categories
export const getCategoryController=async (req, res) => {
    try {
        const categories = await categoryModel.find({})
        res.status(201).send({
            success:true,
            message:'Category is Fetched successfully',
            totalCategories:categories.length,
            categories
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            Message: "Error Get ALL category APi"
        })
    }
}

//Delete  CATtegory controller
export const deleteCategoryController=async(req,res) => {
    try {
        // find category
        const category = await categoryModel.findById(req.params.id);
        //validation
        if (!category) {
          return res.status(404).send({
            success: false,
            message: "Category not found",
          });
        }
        // find product with this category id
        const products = await productModel.find({ category: category._id });
        // update producty category
        for (let i = 0; i < products.length; i++) {
          const product = products[i];
          product.category = undefined;
          await product.save();
        }
        // save
        await category.deleteOne();
        res.status(200).send({
          success: true,
          message: "Catgeory Deleted Successfully",
        });
      } catch (error) {
        console.log(error);
        // cast error ||  OBJECT ID
        if (error.name === "CastError") {
          return res.status(500).send({
            success: false,
            message: "Invalid Id",
          });
        }
        res.status(500).send({
          success: false,
          message: "Error In DELETE CAT API",
          error,
        });
      }
    };
    
    //Update Category
    export const updateCategoryController = async (req, res) => {
        try {
          // find category
          const category = await categoryModel.findById(req.params.id);
          //validation
          if (!category) {
            return res.status(404).send({
              success: false,
              message: "Category not found",
            });
          }
          // get new cat
          const { updatedCategory } = req.body;
          // find product with this category id
          const products = await productModel.find({ category: category._id });
          // update producty category
          for (let i = 0; i < products.length; i++) {
            const product = products[i];
            product.category = updatedCategory;
            await product.save();
          }
          if (updatedCategory) category.category = updatedCategory;
      
          // save
          await category.save();
          res.status(200).send({
            success: true,
            message: "Catgeory Updated Successfully",
          });
        } catch (error) {
          console.log(error);
          // cast error ||  OBJECT ID
          if (error.name === "CastError") {
            return res.status(500).send({
              success: false,
              message: "Invalid Id",
            });
          }
          res.status(500).send({
            success: false,
            message: "Error In UPDATE CATEGPORY API",
            error,
          });
        }
      };