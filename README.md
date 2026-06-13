# potential-octo

## Prompt sizing guideline

When crafting input for a language model, make it detailed but keep it below the model context limit.

- Prefer a **large, structured prompt** (clear task, constraints, examples).
- Keep a **safe buffer** so output still fits in context.
- Rule of thumb: stay around **60–80% of the model context window**.

Example target sizes:

- 8k-context model: keep prompt around 5k–6k tokens
- 32k-context model: keep prompt around 20k–25k tokens
- 128k-context model: keep prompt around 75k–100k tokens
