package com.example.GrievanceManagementSystem.entities;


import org.hibernate.type.BlobType;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name="grievance")
@Getter
@Setter
public class Grievance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 45)
    private String category;

    @Column(nullable = false, unique = false, length = 250)
    private String desc;

    @Column(nullable = true, unique = true,length = 45)
    private BlobType img;
}
