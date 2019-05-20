package com.webShopStore.service;
import com.webShopStore.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserService extends JpaRepository<Users, Integer>{
}
