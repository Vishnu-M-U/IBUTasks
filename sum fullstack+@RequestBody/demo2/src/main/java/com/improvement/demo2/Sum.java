package com.improvement.demo2;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sum")
@CrossOrigin(origins="http://localhost:3000")
public  class Sum{
    @PostMapping("/calculate")
    public int getSum(@RequestBody Numbers numbers){
        return numbers.getNumber1()+numbers.getNumber2();
    }
}
