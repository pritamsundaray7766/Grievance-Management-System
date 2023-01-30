package com.example.GrievanceManagementSystem.entities;


import javax.persistence.*;

@Entity
@Table(name="admin")
@NoArgsConstructor
@Getter
@Setter
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 45)
    private String email;

    @Column(length = 15, nullable = false)
    private String password;

    @Column(name = "adfname", length = 45, nullable = false)
    private String firstName;

    @Column(name = "adlname", length = 45, nullable = false)
    private String lastName;
}
