package com.example.project.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "foods")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private int rating;

    @Column
    private double price;

    @Column
    private String location;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    private Set<Review> reviews;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    private Set<Favorite> favorites;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    private Set<Tag> tags;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    private Set<Recommend> recommends;
}
