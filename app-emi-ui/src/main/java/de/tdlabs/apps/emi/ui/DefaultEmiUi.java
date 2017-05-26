package de.tdlabs.apps.emi.ui;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class DefaultEmiUi implements EmiUi {

  private ArtifactDescriptor getDescriptor() {

    InputStream is = getClass().getClassLoader().getResourceAsStream("version.properties");
    Properties props = new Properties();
    try {
      props.load(is);
    } catch (IOException e) {
      e.printStackTrace();
    }

    return new ArtifactDescriptor(props.getProperty("groupId"), props.getProperty("artifactId"), props.getProperty("version"));
  }

  public String getResourceLocation() {
    ArtifactDescriptor descriptor = getDescriptor();
    return String.format("classpath:/META-INF/resources/webjars/%s/%s/", descriptor.getArtifactId(), descriptor.getVersion());
  }
}
