package tech.jhipster.lite.generator.buildtool.generic.domain;

import java.util.Optional;
import tech.jhipster.lite.error.domain.Assert;

public class Dependency {

  private final String groupId;
  private final String artifactId;
  private final Optional<String> version;
  private final Optional<String> type;
  private final Optional<String> scope;

  private Dependency(Dependency.DependencyBuilder builder) {
    Assert.notBlank("groupId", builder.groupId);
    Assert.notBlank("artifactId", builder.artifactId);

    this.groupId = builder.groupId;
    this.artifactId = builder.artifactId;
    this.version = optionalNotBlank(builder.version);
    this.type = optionalNotBlank(builder.type);
    this.scope = optionalNotBlank(builder.scope);
  }

  private Optional<String> optionalNotBlank(String value) {
    if (value == null || value.isBlank()) {
      return Optional.empty();
    }
    return Optional.of(value);
  }

  public static Dependency.DependencyBuilder builder() {
    return new Dependency.DependencyBuilder();
  }

  public String getGroupId() {
    return groupId;
  }

  public String getArtifactId() {
    return artifactId;
  }

  public Optional<String> getVersion() {
    return version;
  }

  public Optional<String> getType() {
    return type;
  }

  public Optional<String> getScope() {
    return scope;
  }

  public static class DependencyBuilder {

    private String groupId;
    private String artifactId;
    private String version;
    private String type;
    private String scope;

    public Dependency.DependencyBuilder groupId(String groupId) {
      this.groupId = groupId;
      return this;
    }

    public Dependency.DependencyBuilder artifactId(String artifactId) {
      this.artifactId = artifactId;
      return this;
    }

    public Dependency.DependencyBuilder version(String version) {
      this.version = version;
      return this;
    }

    public Dependency.DependencyBuilder type(String type) {
      this.type = type;
      return this;
    }

    public DependencyBuilder scope(String scope) {
      this.scope = scope;
      return this;
    }

    public Dependency build() {
      return new Dependency(this);
    }
  }
}
