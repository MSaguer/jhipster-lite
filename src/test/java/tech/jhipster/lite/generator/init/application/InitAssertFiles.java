package tech.jhipster.lite.generator.init.application;

import static org.assertj.core.api.Assertions.assertThat;
import static tech.jhipster.lite.TestUtils.assertFileExist;
import static tech.jhipster.lite.common.domain.FileUtils.getPathOf;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.attribute.PosixFilePermission;
import java.util.Set;
import tech.jhipster.lite.generator.project.domain.Project;

public class InitAssertFiles {

  public static void assertFilesPackageJson(Project project) {
    assertFileExist(project, "package.json");
  }

  public static void assertFilesReadme(Project project) {
    assertFileExist(project, "README.md");
  }

  public static void assertFilesConfiguration(Project project) {
    assertFileExist(project, ".gitignore");
    assertFileExist(project, ".gitattributes");
  }

  public static void assertFilesEditorConfiguration(Project project) {
    assertFileExist(project, ".editorconfig");
    assertFileExist(project, ".eslintignore");
  }

  public static void assertFilesPrettier(Project project) {
    assertFileExist(project, ".husky", "pre-commit");
    try {
      Set<PosixFilePermission> posixFilePermissions = Files.getPosixFilePermissions(getPathOf(project.getFolder(), ".husky", "pre-commit"));
      assertThat(posixFilePermissions).contains(PosixFilePermission.OWNER_EXECUTE);
    } catch (IOException e) {
      throw new AssertionError(e);
    }
    assertFileExist(project, ".lintstagedrc.js");
    assertFileExist(project, ".prettierignore");
    assertFileExist(project, ".prettierrc");
  }

  public static void assertFilesInit(Project project) {
    assertFilesPackageJson(project);
    assertFilesReadme(project);
    assertFilesConfiguration(project);
    assertFilesEditorConfiguration(project);
    assertFilesPrettier(project);
  }
}
