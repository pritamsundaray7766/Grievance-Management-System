package com.example.GrievanceManagementSystem.repository;

import com.example.GrievanceManagementSystem.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
