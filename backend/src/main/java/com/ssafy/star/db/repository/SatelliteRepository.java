package com.ssafy.star.db.repository;

import com.ssafy.star.db.entity.Satellite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SatelliteRepository extends JpaRepository<Satellite, Long> {
    @Override
    List<Satellite> findAll();

    @Override
    Optional<Satellite> findById(Long aLong);
}
