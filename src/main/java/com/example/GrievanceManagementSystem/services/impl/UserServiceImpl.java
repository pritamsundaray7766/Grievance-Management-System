package com.example.GrievanceManagementSystem.services.impl;

import com.example.GrievanceManagementSystem.entities.User;
import com.example.GrievanceManagementSystem.exception.ResourceNotFoundException;
import com.example.GrievanceManagementSystem.payloads.UserDto;
import com.example.GrievanceManagementSystem.repository.UserRepo;
import com.example.GrievanceManagementSystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDao createUser(UserDao userDao) {
        User user=this.daoToUser(userDao);
        User savedUser = this.userRepo.save(user);
        return this.userToDao(savedUser);
    }

    @Override
    public UserDao updateUser(UserDao userDao, Long userId) {
       User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","id",userId));
      user.setName(userDao.getName());
      user.setEmail(userDao.getEmail());
      user.setPassword(userDao.getPassword());

      User updatedUser = this.userRepo.save(user);
      UserDao userDto1 = this.userToDao(updatedUser);
      return userDao1;
    }

    @Override
    public UserDao getUserById(Long userId) {
        User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "Id", userId));

        return this.userToDao(user);
    }

    @Override
    public List<UserDao> getAllUsers() {
        List<User> users = this.userRepo.findAll();
        List<UserDao> userDaos = users.stream().map(user -> this.userToDao(user)).collect(Collectors.toList());
        return userDaos;
    }

    @Override
    public void deleteUser(Long userId) {
        User user= this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "id", userId));
        this.userRepo.delete(user);
    }
    public User daoToUser(UserDao userDao){
        User user = new User();
        user.setId(userDao.getId());
        user.setName(userDao.getName());
        user.setEmail(userDao.getEmail());
        user.setPassword(userDao.getPassword());
        return user;
    }
    public UserDao userToDao(User user){
        UserDao userDao = new UserDao();
        userDao.setId(user.getId());
        userDao.setName(user.getName());
        userDao.setEmail(user.getEmail());
        userDao.setPassword(user.getPassword());
        return userDao;
    }
}
