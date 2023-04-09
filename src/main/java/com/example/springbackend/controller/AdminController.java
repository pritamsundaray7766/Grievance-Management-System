package com.example.springbackend.controller;

import com.example.springbackend.model.Admin;
import com.example.springbackend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @GetMapping("/admins")
    public List<Admin> getAllAdmin(){

        return adminRepository.findAll();
    }

    @GetMapping("/admins/{admin_id}")
    public Admin getAdminById(@PathVariable Long admin_id) {
        return adminRepository.findById(admin_id).get();
    }

    @PostMapping("/admins")
    public Admin saveAdminDetails(@RequestBody Admin admin) {

        return adminRepository.save(admin);
    }

    @PutMapping("/admins")
    public Admin updateAdminById(@RequestBody Admin admin ) {
        return adminRepository.save(admin);
    }

    @DeleteMapping("/admins/{admin_id}")
    public ResponseEntity<HttpStatus> deleteAdminById(@PathVariable Long admin_id) {
        adminRepository.deleteById(admin_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    //build create admin REST API
//    public Admin createAdmin(@RequestBody Admin admin){
//        return adminRepository.save(admin);
//    }

//    @GetMapping("/result")
//    public ResponseEntity<List<Admin>> getAllAdmin(@RequestParam(required = false)String first_name){
//        try{
//            List<Admin> admins = new ArrayList<Admin>();
//
//            if(first_name == null){
//                adminRepository.findAll().forEach(admins::add);
//            }else {
//                adminRepository.findByFirst_nameContaining(first_name).forEach(admins::add);
//            }
//            if (admins.isEmpty()){
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//            return new ResponseEntity<>(admins,HttpStatus.OK);
//        }catch(Exception e){
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

}
