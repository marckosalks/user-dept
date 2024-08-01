package com.devmarcosales.userdept.repositirories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmarcosales.userdept.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
