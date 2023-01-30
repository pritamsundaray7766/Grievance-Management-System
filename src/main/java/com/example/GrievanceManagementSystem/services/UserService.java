package com.example.GrievanceManagementSystem.services;

import com.example.GrievanceManagementSystem.payloads.UserDto;

import java.util.List;

public interface UserService {

    public UserDao createUser(UserDao user);
    public UserDao updateUser(UserDao user,Long userId);
    public UserDao  getUserById(Long userId);
    public List<UserDao> getAllUsers();
    public void deleteUser(Long userId);
}
