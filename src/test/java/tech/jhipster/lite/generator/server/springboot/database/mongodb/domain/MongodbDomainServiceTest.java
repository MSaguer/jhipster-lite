package tech.jhipster.lite.generator.server.springboot.database.mongodb.domain;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;
import static tech.jhipster.lite.TestUtils.*;

import java.util.Map;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tech.jhipster.lite.UnitTest;
import tech.jhipster.lite.generator.buildtool.generic.domain.BuildToolService;
import tech.jhipster.lite.generator.buildtool.generic.domain.Dependency;
import tech.jhipster.lite.generator.project.domain.Project;
import tech.jhipster.lite.generator.project.domain.ProjectRepository;
import tech.jhipster.lite.generator.server.springboot.common.domain.Level;
import tech.jhipster.lite.generator.server.springboot.common.domain.SpringBootCommonService;
import tech.jhipster.lite.generator.server.springboot.database.sqlcommon.domain.SQLCommonService;

@UnitTest
@ExtendWith(MockitoExtension.class)
class MongodbDomainServiceTest {

  @Mock
  ProjectRepository projectRepository;

  @Mock
  BuildToolService buildToolService;

  @Mock
  SpringBootCommonService springBootCommonService;

  @Mock
  SQLCommonService sqlCommonService;

  @InjectMocks
  MongodbDomainService mongodbDomainService;

  @Test
  void shouldInit() {
    Project project = tmpProjectWithPomXml();
    mongodbDomainService.init(project);

    verify(buildToolService, times(2)).addDependency(any(Project.class), any(Dependency.class));

    verify(projectRepository, times(6)).template(any(Project.class), anyString(), anyString(), anyString());

    verify(springBootCommonService).addPropertiesComment(any(Project.class), anyString());
    verify(springBootCommonService, times(2)).addProperties(any(Project.class), anyString(), any());
    verify(springBootCommonService).addPropertiesNewLine(any(Project.class));
    verify(springBootCommonService, times(2)).addLogger(any(Project.class), anyString(), any(Level.class));
    verify(springBootCommonService, times(4)).addLoggerTest(any(Project.class), anyString(), any(Level.class));
    verify(springBootCommonService, times(4)).addPropertiesTestLogging(any(Project.class), anyString(), any(Level.class));
    verify(projectRepository, times(2)).replaceText(any(Project.class), anyString(), anyString(), anyString(), anyString());

    verify(sqlCommonService).addDockerComposeTemplate(project, "mongodb");
    verify(sqlCommonService).addTestcontainers(project, "mongodb", Map.of());
  }
}
