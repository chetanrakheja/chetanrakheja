---
dest: ChetanRakheja_CV.pdf
stylesheet:
  - cv-style.css
body_class: markdown-body
pdf_options:
  format: A4
  margin: 10mm
  printBackground: true
---

# Chetan Rakheja

New Delhi / NCR, India · +91 99104 54745 · rakhejachetan@gmail.com
[linkedin.com/in/chetanrakheja](https://www.linkedin.com/in/chetanrakheja/) · [github.com/chetanrakheja](https://github.com/chetanrakheja)

---

## Software Engineer | Python · REST APIs · Automation | Agentic AI & LLM Applications | CI/CD

## Summary

Software engineer with 7+ years of experience in Python and Java automation, REST APIs and backend validation across enterprise banking and telecom systems (distributed-system validation, automated CI/CD pipelines), now focused on building and operating Agentic AI and LLM-powered services.

Built AICredits.in to understand how LLM APIs work end to end and to give friends and family easy access to them. It grew organically to 4,500+ users. I built it by directing AI coding agents and made it dependable through test automation, a CI/CD pipeline, Grafana-based usage and cost observability, billing-leak alerts and an audit trail. The work centres on using cloud LLM APIs well: tracking every token and rupee, controlling spend per user and key, and routing across providers. Earlier, at Iris Software (NAB), prototyped Agentic AI tooling (MCP-compatible) that let LLM agents execute multi-step API workflows and verify database state. Completed Anthropic's Building with the Claude API and Claude Code in Action courses.

---

## Technical Skills

- **AI & LLM:** Agentic AI, AI agents, LLM evaluation (Ragas, DeepEval; coursework), LLM API integration (Anthropic Claude, OpenAI, Gemini, Bedrock), agentic workflows, Model Context Protocol (MCP server and client tooling), tool/function calling, prompt engineering, structured output, embeddings and vector search (conceptual), RAG (conceptual; building a hands-on prototype), multi-provider routing, LLM cost optimization, usage governance (per-key spend budgets, rate limits, model allow-lists), token/cost/latency tracking and usage observability (Grafana, Prometheus), LLM-assisted code analysis, Claude Code / Codex workflows
- **Backend & Languages:** Python (automation, REST services), Java, SQL, REST API design (OpenAPI), microservices
- **Built with AI coding agents:** Go, TypeScript, React / Next.js
- **Data & Messaging:** Apache Kafka, Avro schemas / contract testing, Apache Airflow, Parquet
- **Databases:** PostgreSQL (incl. pgvector), Redis, MongoDB, MySQL, Oracle
- **CI/CD & Infrastructure:** CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins), Docker, Docker Compose, Kubernetes / OpenShift (kubectl), Linux, Traefik
- **Observability:** Prometheus, Grafana, Loki, Alertmanager
- **Test Automation & Reliability:** test automation frameworks, regression and integration test suites (1,400+ automated tests, Pytest), API contract testing, distributed-system validation, performance testing (JMeter), root-cause analysis

---

## Side Projects

### AICredits.in — LLM API Gateway (Side Project) · Jan 2026 – Present
Built by directing AI coding agents (Claude Code, Codex); I own the requirements, review, testing, operations and cost. Maintained part-time, a few hours a week.
- Delivered a working multi-provider LLM gateway (OpenAI- and Anthropic-compatible APIs, a production MCP server for AI clients, user dashboard and admin console) through AI-agent-driven development; the generated stack is a Go backend with a Next.js/React front end.
- **Making AI-written code trustworthy:** 1,400+ automated tests, a **GitHub Actions CI/CD pipeline** (Go tests, frontend and admin lint/typecheck/build, and an integration job against Postgres and Redis on every push and PR to `main`), a regression test for every production bug (including a replay of the real failing request), and manual, SHA-pinned deploys with a pre-deploy billing smoke test and health-check gating.
- **Protecting the business:** automated alerts for revenue leakage (requests completed but billed at zero, delivered-but-unbilled responses, zero-cost fallbacks). Found and fixed two real billing defects (a double-deduction and token overbilling) in production.
- **Usage observability (Grafana):** 14 Grafana dashboards and ~50 custom Prometheus metrics covering requests, tokens, latency, errors, cost and margin by provider, model and user, with 22 alert rules to Discord and log aggregation. A per-request record of tokens, cost, latency and outcome plus a credit ledger means any charge can be traced and reconciled.
- **Processes for agents to work well:** a project permission policy, reusable skills, and a read-only observability CLI so agents can triage production issues safely; I approve and deploy every change.
- **Cost and usage control for cloud LLM APIs:** per-request cost and margin tracked by provider and model; fallback routing and retries across providers for availability and spend; per-key and per-user spend budgets, rate limits, concurrency limits and model allow-lists to cap runaway usage; correct handling of cached-token pricing after finding and fixing an overbilling defect.

Also built MasterPrompting.net, a free prompt-engineering learning platform grounded in official OpenAI and Anthropic documentation.

---

## Professional Experience

### Iris Software Pvt. Ltd. — Client: National Australia Bank (NAB)
**Senior Software Development Engineer in Test** | Jul 2025 – Present

- Designed and built an **Agentic AI tooling proof of concept (MCP-compatible)** in a test environment, enabling LLM agents to execute multi-step API workflows, verify database state, generate test cases from technical specifications and extract engineering artifacts.
- Prototyped LLM workflows that analyse enterprise codebases to surface likely fault locations and error context for developers.
- Built an **Avro-based contract-testing framework** validating microservice integrations and backward compatibility.
- Automated Kafka schema and event verification across distributed services.
- Validated Apache Airflow / Parquet pipelines delivering to Kafka topics and databases; delivered Java (Gradle) and SQL-driven backend verification integrated into CI.

### Orange Business Services — Gurugram, India
**System Software Engineer** | Sep 2022 – Jul 2025

- Built and owned Python automation platforms (Pytest, Requests, Selenium) covering REST API, UI and backend validation for distributed microservices, integrated into GitLab CI/CD pipelines.
- Designed REST API and backend validation against MongoDB and SQL; ran JMeter performance suites that surfaced API bottlenecks and thread contention.
- Dockerized the platform for portable execution; worked with DevOps to stabilise CI/CD and reduce flaky tests.
- Integrated Prometheus APIs and monitored service health in Grafana; deployed and operated services on OpenShift (cron, log analysis, troubleshooting).
- Automated daily production verification (30+ minutes saved per day); mentored 4+ junior engineers.

### Comviva Technologies (Tech Mahindra) — Gurugram, India
**Software Development Engineer in Test** | Sep 2019 – Sep 2022

- Automated 195+ Appium test cases, cutting manual regression time by 50%+; built reusable Java modules and JMeter API load tests.
- Resolved 490+ defects across releases of financial mobile applications; Oracle SQL backend validation.
- Selected for on-site delivery on the Qatar National Bank (QNB) engagement.

---

## Certifications

- **Building with the Claude API** — Anthropic (May 2026)
- **Claude Code in Action** — Anthropic (Mar 2026)
- GenAI with Python — ChaiCode (Nov 2025)
- Prompt Design in Vertex AI — Google Cloud (Apr 2025)
- ISTQB Foundation Level (2019)

## Education

- **MCA** — Indira Gandhi National Open University (2019–2023)
- **BCA** — Jagannath International Management School, New Delhi (2016–2019)
