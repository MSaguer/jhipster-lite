import { Service } from '@/common/domain/Service';
import { fromServiceProjection, ServiceProjection, toServiceProjection } from '@/springboot/primary/generator/ServiceProjection';

describe('ServiceProjection', () => {
  it('should convert from Service to ServiceProjection', () => {
    expect(toServiceProjection(Service.AOP_LOGGING)).toEqual<ServiceProjection>('aop-logging');
    expect(toServiceProjection(Service.ANGULAR)).toEqual<ServiceProjection>('angular');
    expect(toServiceProjection(Service.ANGULAR_WITH_JWT)).toEqual<ServiceProjection>('angular-with-jwt');
    expect(toServiceProjection(Service.ANGULAR_OAUTH2)).toEqual<ServiceProjection>('angular-oauth2');
    expect(toServiceProjection(Service.DOWNLOAD)).toEqual<ServiceProjection>('download');
    expect(toServiceProjection(Service.FLYWAY)).toEqual<ServiceProjection>('flyway');
    expect(toServiceProjection(Service.FLYWAY_WITH_USERS_AND_AUTHORITY_CHANGELOGS)).toEqual<ServiceProjection>(
      'flyway-with-users-and-authority-changelogs'
    );
    expect(toServiceProjection(Service.FRONTEND_MAVEN_PLUGIN)).toEqual<ServiceProjection>('frontend-maven-plugin');
    expect(toServiceProjection(Service.INITIALIZATION)).toEqual<ServiceProjection>('initialization');
    expect(toServiceProjection(Service.JACOCO_CHECK_MINIMAL_COVERAGE)).toEqual<ServiceProjection>('jacoco-check-minimal-coverage');
    expect(toServiceProjection(Service.JAVA_BASE)).toEqual<ServiceProjection>('java-base');
    expect(toServiceProjection(Service.LIQUIBASE)).toEqual<ServiceProjection>('liquibase');
    expect(toServiceProjection(Service.LIQUIBASE_WITH_USERS_AND_AUTHORITY_CHANGELOGS)).toEqual<ServiceProjection>(
      'liquibase-with-users-and-authority-changelogs'
    );
    expect(toServiceProjection(Service.LOGSTASH)).toEqual<ServiceProjection>('logstash');
    expect(toServiceProjection(Service.MAVEN_JAVA)).toEqual<ServiceProjection>('maven-java');
    expect(toServiceProjection(Service.CODESPACES_SETUP)).toEqual<ServiceProjection>('codespaces-setup');
    expect(toServiceProjection(Service.GITPOD_SETUP)).toEqual<ServiceProjection>('gitpod-setup');
    expect(toServiceProjection(Service.MARIADB)).toEqual<ServiceProjection>('mariadb');
    expect(toServiceProjection(Service.MYSQL)).toEqual<ServiceProjection>('mysql');
    expect(toServiceProjection(Service.MONGODB)).toEqual<ServiceProjection>('mongodb');
    expect(toServiceProjection(Service.MONGOCK)).toEqual<ServiceProjection>('mongock');
    expect(toServiceProjection(Service.POSTGRESQL)).toEqual<ServiceProjection>('postgresql');
    expect(toServiceProjection(Service.SONAR_JAVA_BACKEND)).toEqual<ServiceProjection>('sonar-java-backend');
    expect(toServiceProjection(Service.SONAR_JAVA_BACKEND_AND_FRONTEND)).toEqual<ServiceProjection>('sonar-java-backend-and-frontend');
    expect(toServiceProjection(Service.SPRINGBOOT)).toEqual<ServiceProjection>('spring-boot');
    expect(toServiceProjection(Service.SPRINGBOOT_ACTUATOR)).toEqual<ServiceProjection>('spring-boot-actuator');
    expect(toServiceProjection(Service.SPRING_DOC)).toEqual<ServiceProjection>('spring-doc');
    expect(toServiceProjection(Service.SPRINGBOOT_JWT)).toEqual<ServiceProjection>('spring-boot-jwt');
    expect(toServiceProjection(Service.SPRINGDOC_OPENAPI_WITH_SECURIITY_JWT)).toEqual<ServiceProjection>(
      'springdoc-openapi-with-security-jwt'
    );
    expect(toServiceProjection(Service.SPRINGBOOT_JWT_WITH_BASIC_AUTHENTICATION)).toEqual<ServiceProjection>(
      'spring-boot-jwt-with-basic-authentication'
    );
    expect(toServiceProjection(Service.SPRINGBOOT_OAUTH2)).toEqual<ServiceProjection>('spring-boot-oauth2');
    expect(toServiceProjection(Service.SPRINGBOOT_OAUTH2_ACCOUNT)).toEqual<ServiceProjection>('spring-boot-oauth2-account');
    expect(toServiceProjection(Service.SPRINGBOOT_MVC_WITH_TOMCAT)).toEqual<ServiceProjection>('spring-boot-mvc-with-tomcat');
    expect(toServiceProjection(Service.SPRINGBOOT_DUMMY_FEATURE)).toEqual<ServiceProjection>('spring-boot-dummy-feature');
    expect(toServiceProjection(Service.SPRINGBOOT_WEBFLUX_NETTY)).toEqual<ServiceProjection>('spring-boot-webflux-netty');
    expect(toServiceProjection(Service.SPRINGBOOT_CUCUMBER)).toEqual<ServiceProjection>('spring-boot-cucumber');
    expect(toServiceProjection(Service.SPRINGBOOT_PULSAR)).toEqual<ServiceProjection>('spring-boot-pulsar');
    expect(toServiceProjection(Service.REACT)).toEqual<ServiceProjection>('react');
    expect(toServiceProjection(Service.REACT_STYLED)).toEqual<ServiceProjection>('react-styled');
    expect(toServiceProjection(Service.VUE)).toEqual<ServiceProjection>('vue');
    expect(toServiceProjection(Service.UNKNOWN)).toEqual<ServiceProjection>('unknown');
  });

  it('should convert from ServiceProjection to Service', () => {
    expect(fromServiceProjection('aop-logging')).toEqual<Service>(Service.AOP_LOGGING);
    expect(fromServiceProjection('angular')).toEqual<Service>(Service.ANGULAR);
    expect(fromServiceProjection('angular-with-jwt')).toEqual<Service>(Service.ANGULAR_WITH_JWT);
    expect(fromServiceProjection('angular-oauth2')).toEqual<Service>(Service.ANGULAR_OAUTH2);
    expect(fromServiceProjection('download')).toEqual<Service>(Service.DOWNLOAD);
    expect(fromServiceProjection('flyway')).toEqual<Service>(Service.FLYWAY);
    expect(fromServiceProjection('flyway-with-users-and-authority-changelogs')).toEqual<Service>(
      Service.FLYWAY_WITH_USERS_AND_AUTHORITY_CHANGELOGS
    );
    expect(fromServiceProjection('frontend-maven-plugin')).toEqual<Service>(Service.FRONTEND_MAVEN_PLUGIN);
    expect(fromServiceProjection('initialization')).toEqual<Service>(Service.INITIALIZATION);
    expect(fromServiceProjection('jacoco-check-minimal-coverage')).toEqual<Service>(Service.JACOCO_CHECK_MINIMAL_COVERAGE);
    expect(fromServiceProjection('java-base')).toEqual<Service>(Service.JAVA_BASE);
    expect(fromServiceProjection('liquibase')).toEqual<Service>(Service.LIQUIBASE);
    expect(fromServiceProjection('liquibase-with-users-and-authority-changelogs')).toEqual<Service>(
      Service.LIQUIBASE_WITH_USERS_AND_AUTHORITY_CHANGELOGS
    );
    expect(fromServiceProjection('logstash')).toEqual<Service>(Service.LOGSTASH);
    expect(fromServiceProjection('maven-java')).toEqual<Service>(Service.MAVEN_JAVA);
    expect(fromServiceProjection('codespaces-setup')).toEqual<Service>(Service.CODESPACES_SETUP);
    expect(fromServiceProjection('gitpod-setup')).toEqual<Service>(Service.GITPOD_SETUP);
    expect(fromServiceProjection('mariadb')).toEqual<Service>(Service.MARIADB);
    expect(fromServiceProjection('mysql')).toEqual<Service>(Service.MYSQL);
    expect(fromServiceProjection('mongodb')).toEqual<Service>(Service.MONGODB);
    expect(fromServiceProjection('mongock')).toEqual<Service>(Service.MONGOCK);
    expect(fromServiceProjection('postgresql')).toEqual<Service>(Service.POSTGRESQL);
    expect(fromServiceProjection('sonar-java-backend')).toEqual<Service>(Service.SONAR_JAVA_BACKEND);
    expect(fromServiceProjection('sonar-java-backend-and-frontend')).toEqual<Service>(Service.SONAR_JAVA_BACKEND_AND_FRONTEND);
    expect(fromServiceProjection('spring-boot')).toEqual<Service>(Service.SPRINGBOOT);
    expect(fromServiceProjection('spring-boot-actuator')).toEqual<Service>(Service.SPRINGBOOT_ACTUATOR);
    expect(fromServiceProjection('spring-doc')).toEqual<Service>(Service.SPRING_DOC);
    expect(fromServiceProjection('spring-boot-jwt')).toEqual<Service>(Service.SPRINGBOOT_JWT);
    expect(fromServiceProjection('spring-boot-jwt-with-basic-authentication')).toEqual<Service>(
      Service.SPRINGBOOT_JWT_WITH_BASIC_AUTHENTICATION
    );
    expect(fromServiceProjection('springdoc-openapi-with-security-jwt')).toEqual<Service>(Service.SPRINGDOC_OPENAPI_WITH_SECURIITY_JWT);
    expect(fromServiceProjection('spring-boot-mvc-with-tomcat')).toEqual<Service>(Service.SPRINGBOOT_MVC_WITH_TOMCAT);
    expect(fromServiceProjection('spring-boot-dummy-feature')).toEqual<Service>(Service.SPRINGBOOT_DUMMY_FEATURE);
    expect(fromServiceProjection('spring-boot-webflux-netty')).toEqual<Service>(Service.SPRINGBOOT_WEBFLUX_NETTY);
    expect(fromServiceProjection('spring-boot-pulsar')).toEqual<Service>(Service.SPRINGBOOT_PULSAR);
    expect(fromServiceProjection('spring-boot-cucumber')).toEqual<Service>(Service.SPRINGBOOT_CUCUMBER);
    expect(fromServiceProjection('react')).toEqual<Service>(Service.REACT);
    expect(fromServiceProjection('react-styled')).toEqual<Service>(Service.REACT_STYLED);
    expect(fromServiceProjection('vue')).toEqual<Service>(Service.VUE);
    expect(fromServiceProjection('unknown')).toEqual<Service>(Service.UNKNOWN);
  });
});
