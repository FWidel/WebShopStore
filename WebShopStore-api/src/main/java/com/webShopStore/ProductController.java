package com.webShopStore;

import com.webShopStore.model.Products;
import com.webShopStore.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    // Select, Insert, Delete, Update Operations for an User
    
    @RequestMapping(value = "/product", method = RequestMethod.GET)
    Optional<Products> getProduct(@RequestParam Integer id){
        return  productService.findById(id);
    }

  

    // Select, Insert, Delete for List of Employees

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    List<Products> getAllProducts(){
        return productService.findAll();
    }


    @RequestMapping(value = "/products", method = RequestMethod.DELETE)
    String deleteAllProducts(){
    	productService.deleteAll();
        return "SUCCESS";
    }
}
