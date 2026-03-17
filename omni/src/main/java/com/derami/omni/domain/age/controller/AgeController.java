package com.derami.omni.domain.age.controller;

import com.derami.omni.domain.age.dto.AgeRequest;
import com.derami.omni.domain.age.dto.AgeResponse;
import com.derami.omni.domain.age.service.AgeService;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/age")
@RequiredArgsConstructor
public class AgeController {
    private final AgeService ageService;

    @PostMapping("/calculate")
    public ResponseEntity<AgeResponse> calculate(@RequestBody AgeRequest request){

        return ResponseEntity.ok(ageService.calculateAge(request));
    }
}
