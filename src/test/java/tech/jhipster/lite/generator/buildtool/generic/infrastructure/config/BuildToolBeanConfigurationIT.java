package tech.jhipster.lite.generator.buildtool.generic.infrastructure.config;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import tech.jhipster.lite.IntegrationTest;
import tech.jhipster.lite.generator.buildtool.generic.domain.BuildToolDomainService;

@IntegrationTest
class BuildToolBeanConfigurationIT {

  @Autowired
  ApplicationContext applicationContext;

  @Test
  void shouldGetBean() {
    assertThat(applicationContext.getBean("buildToolService")).isNotNull().isInstanceOf(BuildToolDomainService.class);
  }
}
