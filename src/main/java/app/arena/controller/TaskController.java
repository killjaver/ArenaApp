package app.arena.controller;

import app.arena.model.Task;
import app.arena.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAll() {
        return taskService.findAll();
    }

    @GetMapping("/{id}")
    public Task getById(@PathVariable Long id) {
        return taskService.findById(id).orElseThrow();
    }

    @PostMapping
    public Task create(@RequestBody Task task) {
        return taskService.save(task);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        task.setId(id);
        return taskService.save(task);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        taskService.deleteById(id);
    }
}