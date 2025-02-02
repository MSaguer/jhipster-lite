package tech.jhipster.lite.generator.server.springboot.mvc.web.infrastructure.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import tech.jhipster.lite.generator.buildtool.generic.domain.BuildToolService;
import tech.jhipster.lite.generator.project.domain.ProjectRepository;
import tech.jhipster.lite.generator.server.springboot.logging.domain.SpringBootLoggingService;
import tech.jhipster.lite.generator.server.springboot.mvc.web.domain.SpringBootMvcDomainService;
import tech.jhipster.lite.generator.server.springboot.mvc.web.domain.SpringBootMvcService;
import tech.jhipster.lite.generator.server.springboot.properties.domain.SpringBootPropertiesService;

@Configuration
public class SpringBootMvcBeanConfiguration {

  public final ProjectRepository projectRepository;
  public final BuildToolService buildToolService;
  public final SpringBootPropertiesService springBootPropertiesService;
  public final SpringBootLoggingService springBootLoggingService;

  public SpringBootMvcBeanConfiguration(
    ProjectRepository projectRepository,
    BuildToolService buildToolService,
    SpringBootPropertiesService springBootPropertiesService,
    SpringBootLoggingService springBootLoggingService
  ) {
    this.projectRepository = projectRepository;
    this.buildToolService = buildToolService;
    this.springBootPropertiesService = springBootPropertiesService;
    this.springBootLoggingService = springBootLoggingService;
  }

  @Bean
  public SpringBootMvcService springBootMvcService() {
    return new SpringBootMvcDomainService(projectRepository, buildToolService, springBootPropertiesService, springBootLoggingService);
  }
}
