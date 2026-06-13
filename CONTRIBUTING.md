# Contributing to Potential Octo

Thank you for your interest in contributing to Potential Octo! We welcome contributions from the community and appreciate your help in making this project better.

## How to Contribute

### 1. Report Issues

If you encounter a bug or have a suggestion for improvement:

1. Check if the issue already exists in the GitHub Issues
2. If not, create a new issue with:
   - A clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment details (OS, Node version, etc.)

### 2. Submit Pull Requests

To contribute code:

1. **Fork the repository** and create a new branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the coding standards (see below)

3. **Commit with clear messages**
   ```bash
   git commit -m "Add description of changes"
   ```

4. **Push to your fork** and **create a Pull Request**
   - Use a descriptive title
   - Reference any related issues
   - Describe the changes you made

### 3. Code Standards

- **Style**: Follow the `.editorconfig` and existing code conventions
- **JavaScript**: Use ES6+ features, write clear and maintainable code
- **Comments**: Add comments for complex logic
- **Formatting**: Ensure consistent indentation (2 spaces)

### 4. Commit Message Guidelines

Use clear, descriptive commit messages:

- Good: `Add LLM context validation utility`
- Bad: `update stuff`

Format: `[Type] Brief description`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### 5. Testing

Before submitting:

1. Test your changes locally
2. Verify no existing functionality is broken
3. Add tests for new features if applicable

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jahavdu/potential-octo.git
   cd potential-octo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   - Open `http://localhost:3000` in your browser
   - Or open `index.html` directly in your browser

## Project Structure

```
potential-octo/
├── README.md              # Project documentation
├── index.html             # Visual landing page
├── package.json           # Project dependencies
├── config.js              # Configuration module
├── utils.js               # Utility functions
├── server.js              # Express.js server
├── .editorconfig          # Editor configuration
├── .gitignore             # Git ignore rules
├── CONTRIBUTING.md        # This file
└── .git/                  # Git repository
```

## Key Areas for Contribution

- **Documentation**: Improve README, add examples, clarify instructions
- **Features**: Enhance server endpoints, add new utilities
- **Bug Fixes**: Fix issues and improve reliability
- **Tests**: Add test coverage for existing code
- **Performance**: Optimize existing implementations

## Prompt Sizing Best Practices

When working on LLM-related features, remember our prompt sizing guidelines:

- Keep prompt sizes at 60-80% of context window
- For 8k context: target 5k-6k tokens
- For 32k context: target 20k-25k tokens
- For 128k context: target 75k-100k tokens

## Communication

- Use GitHub Issues for bugs and feature requests
- Use GitHub Discussions for questions and ideas
- Be respectful and constructive in all interactions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue or discussion if you have any questions!

---

Happy coding! 🐙
