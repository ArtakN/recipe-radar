# Recipe Radar – Legacy Project 📡

## Intro 🎬

For our legacy project, we expanded the fantastic Recipe Radar app originally developed by Artak. We introduced new features, added validation, and built a full testing suite.

The project was already well-structured and written in TypeScript, with an Express backend connected to a SQLite database, a lightweight, serverless solution ideal for embedded applications. Since this was new territory for us, we spent some time exploring its capabilities and limitations.

## Validators 🔐

We implemented additional validators on the server to ensure that all incoming data was properly verified before it reached the controller layer.

## AI API Feature 🤖

Curious about APIs and generative AI, we decided to integrate the Google Gemini API. During our research, we discovered Vercel’s **AI SDK**, which turned out to be incredibly helpful. It works almost like an ORM, but for AI providers:

- **Reduced Vendor Lock-In:** The AI SDK allows easy switching between different AI models or providers with minimal code changes, similar to how ORMs let developers swap database backends without major rewrites.

- **Simplified Complexity:** It abstracts the intricacies of handling streaming responses, structured outputs, and provider-specific differences.

- **Unified Interface:** It offers a consistent, type-safe interface for common AI tasks in TypeScript/JavaScript.

## Testing Suite 🧪

We began by building out the testing suite. Since both the backend and frontend could be tested with **Vitest**, we chose it for consistency. However, using one tool for both environments added complexity, requiring a more advanced configuration setup.

### Unit Tests

We wrote unit tests using Vitest, initially relying on real data, until we realized we were burning through our Spoonacular API credits 🔥🧯. After switching to mocked data, we tested individual functions across frontend and backend, including our validator logic.

### Integration Tests

We implemented integration tests to cover interactions between components, such as router behavior and server endpoints.

### E2E Tests

Finally, we used **Playwright** 🎭 to simulate real user journeys and verify that the app worked smoothly from end to end.
