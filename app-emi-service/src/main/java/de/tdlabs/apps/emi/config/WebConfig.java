package de.tdlabs.apps.emi.config;

import de.tdlabs.apps.emi.ui.EmiUi;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.ServiceLoader;

@Slf4j
@Configuration
class WebConfig extends WebMvcConfigurerAdapter {

  @Autowired
  private Environment env;

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {

    if (env.acceptsProfiles("dev")) {

      log.info("Add app-emi-ui frontend code...");
      registry.addResourceHandler("/ui/**")
        .addResourceLocations("file:./../app-emi-ui/target/frontend/")
        .setCacheControl(CacheControl.noCache());

    } else if (env.acceptsProfiles("prod")) {

      ServiceLoader<EmiUi> emiUi = ServiceLoader.load(EmiUi.class);

      for (EmiUi ui : emiUi) {

        String resourceLocation = ui.getResourceLocation();

        log.info("Adding app-emi-ui location {}", resourceLocation);

        registry.addResourceHandler("/ui/**")
          .addResourceLocations(resourceLocation)
          .setCacheControl(CacheControl.noCache());

        // load only the first ui in path
        break;
      }
    }
  }
}
