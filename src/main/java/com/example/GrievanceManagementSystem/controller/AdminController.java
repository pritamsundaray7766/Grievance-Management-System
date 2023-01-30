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
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    //    POST-create admin
    @PostMapping("/")
    public ResponseEntity<AdminDao> createAdmin(@RequestBody AdminDao adminDao) {
        AdminDao createAdminDao = this.adminService.createAdmin(adminDao);
        return new ResponseEntity<>(createAdminDao, HttpStatus.CREATED);

    }

    //    PUT-Update Admin
    @PutMapping("/{adminId}")
    public ResponseEntity<AdminDto> updateAdmin(@RequestBody AdminDao adminDao, @PathVariable("adminId") Long aid) {
        AdminDao updatedAdmin = this.adminService.updateAdmin(adminDao, aid);
        return ResponseEntity.ok(updatedAdmin);
    }

//    //    DELETE-Delete admin
//    @DeleteMapping("/{adminId}")
//    public ResponseEntity<ApiResponse> deleteAdmin(@PathVariable("adminId") Long aid) {
//        this.adminService.deleteAdmin(aid);
//        return new ResponseEntity(new ApiResponse("admin deleted Successfully", true), HttpStatus.OK);
//    }

    //    GET-Admin Get
    @GetMapping("/")
    public ResponseEntity<List<AdminDao>> getAllUsers() {

        return ResponseEntity.ok(this.adminService.getAllAdmins());
    }

    //       GET-Single admin's data
    @GetMapping("/{adminId}")
    public  ResponseEntity<AdminDao> getSingleAdmin(@PathVariable Long adminId){
        return ResponseEntity.ok(this.adminService.getAdminById(adminId));

    }
}