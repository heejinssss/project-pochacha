package com.ssafy.oho.test;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@Log4j2
@CrossOrigin(origins = {"https://172.17.0.1", "https://172.26.3.152", "https://43.201.150.143"})

public class TestController {

    private final TestRepository testRepository;

    @GetMapping("/get")
    private List<Test> getTest() {
        log.info("This is get test!!");
        return testRepository.findAll();
    }

    @PostMapping("/post")
    private Test postTest(@RequestBody TestDto testDto){
        log.info("This is post test!!");
        Test newTest = new Test();
        newTest.setInfo(testDto.getInfo());

        return testRepository.save(newTest);
    }
}
