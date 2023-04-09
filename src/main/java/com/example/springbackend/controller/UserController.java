package com.example.springbackend.controller;


import com.example.springbackend.model.User;
import com.example.springbackend.playloads.ApiResponse;
import com.example.springbackend.playloads.UserDto;
import com.example.springbackend.repository.UserRepository;
import com.example.springbackend.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    //    GET-User Get
    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(this.userService.getAllUsers());
    }

//    @GetMapping("/users/{user_id}")
//    public User getUserById(@PathVariable Long user_id) {
//        return userRepository.findById(user_id).get();
//    }
    //       GET-Single user data
    @GetMapping("/users/{user_id}")
    public  ResponseEntity<UserDto> getSingleUser(@PathVariable Long user_id){
        return ResponseEntity.ok(this.userService.getUserById(user_id));

    }

//    @PostMapping("/users")
//    public User saveUserDetails(@RequestBody User user) {
//        return userRepository.save(user);
//    }

    //    POST-create user
    @PostMapping("/users")
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto) {
        UserDto createUserDto = this.userService.createUser(userDto);
        return new ResponseEntity<>(createUserDto, HttpStatus.CREATED);

    }

//    @PutMapping("/users")
//    public User updateUser(@RequestBody User user) {
//        return userRepository.save(user);
//    }
    //    PUT-Update User
    @PutMapping("/{user_id}")
    public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto, @PathVariable("user_id") Long uid) {
        UserDto updatedUser = this.userService.updateUser(userDto, uid);
        return ResponseEntity.ok(updatedUser);
    }

//    @DeleteMapping("/users/{user_id}")
//    public ResponseEntity<HttpStatus> deleteUserById(@PathVariable Long user_id) {
//        userRepository.deleteById(user_id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
    //    DELETE-Delete user
    @DeleteMapping("/users/{user_id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable("user_id") Long uid) {
        this.userService.deleteUser(uid);
        return new ResponseEntity(new ApiResponse("User deleted Successfully", true), HttpStatus.OK);
    }
}
