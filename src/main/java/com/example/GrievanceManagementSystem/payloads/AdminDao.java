package com.example.GrievanceManagementSystem.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class AdminDao {
    private Long id;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
}
