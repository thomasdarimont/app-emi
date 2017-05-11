package de.tdlabs.apps.emi;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@Slf4j
@RestController
class GreetingResource {

  @GetMapping("/greet")
  Object greet(@RequestParam(defaultValue = "World")  String name){

    log.info("Greeting for {}", name);

    return Collections.singletonMap("greeting", "Hello " + name);
  }
}
