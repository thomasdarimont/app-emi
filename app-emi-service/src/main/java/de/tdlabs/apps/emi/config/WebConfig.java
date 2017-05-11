package de.tdlabs.apps.emi.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Slf4j
@Configuration
class WebConfig extends WebMvcConfigurerAdapter {

  @Autowired
  Environment env;

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {

    if (env.acceptsProfiles("dev")) {
      log.info("Add app-emi-ui frontend code...");
      registry.addResourceHandler("/ui/**")
        .addResourceLocations("file:./../app-emi-ui/target/frontend/")
        .setCacheControl(CacheControl.noCache());
    } else if (env.acceptsProfiles("prod")) {
      log.info("Adding app-emi-ui webjar code...");
      registry.addResourceHandler("/ui/**")
        .addResourceLocations("classpath:/META-INF/resources/webjars/app-emi-ui/1.0.0-SNAPSHOT/")
        .setCacheControl(CacheControl.noCache());
    }
  }
}
