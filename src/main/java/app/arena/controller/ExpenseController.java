package app.arena.controller;

import app.arena.model.Expense;
import app.arena.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {
    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping
    public List<Expense> getAll() {
        return expenseService.findAll();
    }

    @GetMapping("/{id}")
    public Expense getById(@PathVariable Long id) {
        return expenseService.findById(id).orElseThrow();
    }

    @PostMapping
    public Expense create(@RequestBody Expense expense) {
        return expenseService.save(expense);
    }

    @PutMapping("/{id}")
    public Expense update(@PathVariable Long id, @RequestBody Expense expense) {
        expense.setId(id);
        return expenseService.save(expense);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        expenseService.deleteById(id);
    }
}
