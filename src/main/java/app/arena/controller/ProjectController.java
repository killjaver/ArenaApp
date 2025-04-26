package app.arena.controller;

import app.arena.model.Project;
import app.arena.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> getAll() {
        return projectService.findAll();
    }

    @GetMapping("/{id}")
    public Project getById(@PathVariable Long id) {
        return projectService.findById(id).orElseThrow();
    }

    @PostMapping
    public Project create(@RequestBody Project project) {
        return projectService.save(project);
    }

    @PutMapping("/{id}")
    public Project update(@PathVariable Long id, @RequestBody Project project) {
        project.setId(id);
        return projectService.save(project);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        projectService.deleteById(id);
    }
}
