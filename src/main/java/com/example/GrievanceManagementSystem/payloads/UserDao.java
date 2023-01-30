package com.example.GrievanceManagementSystem.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDao {
    private Long id;
    private String name;
    private String email;
    private String password;
}
