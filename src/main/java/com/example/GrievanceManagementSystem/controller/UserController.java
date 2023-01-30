package com.example.GrievanceManagementSystem.controller;

import com.example.GrievanceManagementSystem.payloads.ApiResponse;
import com.example.GrievanceManagementSystem.payloads.UserDto;
import com.example.GrievanceManagementSystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    //    POST-create user
    @PostMapping("/")
    public ResponseEntity<UserDao> createUser(@RequestBody UserDao userDao) {
        UserDto createUserDao = this.userService.createUser(userDao);
        return new ResponseEntity<>(createUserDao, HttpStatus.CREATED);

    }

    //    PUT-Update User
    @PutMapping("/{userId}")
    public ResponseEntity<UserDao> updateUser(@RequestBody UserDao userDao, @PathVariable("userId") Long uid) {
        UserDao updatedUser = this.userService.updateUser(userDao, uid);
        return ResponseEntity.ok(updatedUser);
    }

    //    DELETE-Delete user
    @DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable("userId") Long uid) {
        this.userService.deleteUser(uid);
        return new ResponseEntity(new ApiResponse("User deleted Successfully", true), HttpStatus.OK);
    }

    //    GET-User Get
    @GetMapping("/")
    public ResponseEntity<List<UserDao>> getAllUsers() {

        return ResponseEntity.ok(this.userService.getAllUsers());
    }

//       GET-Single user data
    @GetMapping("/{userId}")
    public  ResponseEntity<UserDao> getSingleUser(@PathVariable Long userId){
        return ResponseEntity.ok(this.userService.getUserById(userId));

    }
}