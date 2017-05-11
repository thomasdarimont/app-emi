package de.tdlabs.apps.emi;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
class UiController {

  @RequestMapping("/ui")
  String index() {
    return "redirect:ui/index.html";
  }
}
