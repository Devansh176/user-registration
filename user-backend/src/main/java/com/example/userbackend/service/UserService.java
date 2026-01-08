package com.example.userbackend.service;

import com.example.userbackend.entity.User;
import com.example.userbackend.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public User addUser(User user) {
        userRepository.save(user);
        return user;
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User getUserByName(String name) {
        return userRepository.findByName(name);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Transactional
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
