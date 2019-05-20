package com.webShopStore.service;
import com.webShopStore.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductService extends JpaRepository<Products, Integer>{
}
