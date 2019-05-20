package com.webShopStore;

import com.webShopStore.model.Users;
import com.webShopStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    

    // Select, Insert, Delete, Update Operations for an User
    
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    Optional<Users> getEmployee(@RequestParam Integer id){
        return  userService.findById(id);
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    String addEmployee(@RequestBody Users user){
    	Users savedEmployee = userService.save(user);
        return "SUCCESS";
    }

    @RequestMapping(value = "/user", method = RequestMethod.PUT)
    Users updateEmployee(@RequestBody Users user){
    	Users updatedEmployee = userService.save(user);
        return updatedEmployee;
    }

    @RequestMapping(value = "/user", method = RequestMethod.DELETE)
    Map deleteEmployee(@RequestParam Integer id){
    	userService.deleteById(id);

        Map<String, String> status = new HashMap<>();
        status.put("Status", "Success");
        return status;
    }

    // Select, Insert, Delete for List of Employees

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    List<Users> getAllEmployee(){
        return userService.findAll();
    }


    @RequestMapping(value = "/users", method = RequestMethod.DELETE)
    String addAllEmployees(){
    	userService.deleteAll();
        return "SUCCESS";
    }
}
