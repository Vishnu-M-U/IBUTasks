package com.demo.demo;

import org.springframework.web.bind.annotation.*;

@RestController
//This annotation is used to indicate that the  class is a controller
@RequestMapping("/sum")
//This annotation specifies the base URL path for all the methods in this controller
@CrossOrigin(origins="http://localhost:3000")
//This annotation enables Cross-Origin Resource Sharing (CORS) for the controller
// It allows requests from the specified origin (http://localhost:3000) to access this controller's endpoints

public class Controller {
    @GetMapping("/{num1},{num2}")
    public int getSum(@PathVariable int num1,@PathVariable int num2) {
        return num1+num2;
    }
}
//package com.demo.demo;
//
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/sum")
//public  class Controller{
//    @PostMapping("/calculate")
//    public int getSum(@RequestBody Numbers numbers){
//        return numbers.getNumber1()+numbers.getNumber2();
//    }
//}
