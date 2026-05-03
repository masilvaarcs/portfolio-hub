<!-- copilot-prompts-private-skillpack:START -->
## Copilot Skill Router (Default)

Objetivo: detectar a necessidade, identificar a stack e aplicar automaticamente o menor conjunto util de skills para entregar alta qualidade com uso equilibrado de tokens.

### Comportamento padrao
1. Fazer deteccao rapida da stack por sinais do repositorio (manifestos, arquivos de solucao e estrutura).
2. Priorizar skills oficiais e carregar apenas as skills relevantes para a tarefa.
3. Evitar carregar skills desnecessarias para tarefas simples.
4. Se houver ambiguidade de stack, fazer no maximo uma pergunta de clarificacao.
5. Em tarefas curtas, usar estrategia enxuta (resposta objetiva, leituras pontuais, sem pesquisa profunda).
6. Em tarefas complexas, expandir gradualmente (mais contexto somente quando necessario).

### Mapeamento rapido por stack
| Sinal detectado | Skills a priorizar |
|---|---|
| .NET / C# (sln, csproj) | dotnet-best-practices, csharp-async, csharp-docs, nuget-manager |
| Testes C# (MSTest) | csharp-mstest |
| Testes C# (NUnit) | csharp-nunit |
| Testes C# (TUnit) | csharp-tunit |
| Testes C# (xUnit) | csharp-xunit |
| APIs ASP.NET Minimal | aspnet-minimal-api-openapi |
| Qualidade de arquitetura | architecture-blueprint-generator, dotnet-design-pattern-review, create-architectural-decision-record |
| Web UI e E2E | webapp-testing |
| Seguranca de codigo | security-review |
| MCP servers | mcp-builder |
| MAUI com distribuicao Store | msstore-cli |
| Planilhas e dados tabulares | xlsx |
| Geracao de testes multi stack | polyglot-test-agent |
| Documentacao | doc-coauthoring |
| Timezone em .NET | dotnet-timezone |
| Upgrade .NET | dotnet-upgrade |

### Skills instaladas no pacote
| Skill | Descricao |
|---|---|
| [architecture-blueprint-generator](.github/skills/architecture-blueprint-generator/SKILL.md) | Blueprint de arquitetura para analise de codebase. |
| [aspnet-minimal-api-openapi](.github/skills/aspnet-minimal-api-openapi/SKILL.md) | Endpoints Minimal API com OpenAPI correto. |
| [create-architectural-decision-record](.github/skills/create-architectural-decision-record/SKILL.md) | Criacao de ADRs estruturados. |
| [csharp-async](.github/skills/csharp-async/SKILL.md) | Boas praticas de async em C#. |
| [csharp-docs](.github/skills/csharp-docs/SKILL.md) | Documentacao XML para C#. |
| [csharp-mstest](.github/skills/csharp-mstest/SKILL.md) | Testes com MSTest moderno. |
| [csharp-nunit](.github/skills/csharp-nunit/SKILL.md) | Testes com NUnit. |
| [csharp-tunit](.github/skills/csharp-tunit/SKILL.md) | Testes com TUnit. |
| [csharp-xunit](.github/skills/csharp-xunit/SKILL.md) | Testes com xUnit. |
| [doc-coauthoring](.github/skills/doc-coauthoring/SKILL.md) | Coautoria guiada de documentacao. |
| [dotnet-best-practices](.github/skills/dotnet-best-practices/SKILL.md) | Boas praticas para .NET/C#. |
| [dotnet-design-pattern-review](.github/skills/dotnet-design-pattern-review/SKILL.md) | Revisao de padroes de projeto em .NET. |
| [dotnet-timezone](.github/skills/dotnet-timezone/SKILL.md) | Timezone robusto em .NET. |
| [dotnet-upgrade](.github/skills/dotnet-upgrade/SKILL.md) | Analise e estrategia de upgrade .NET. |
| [mcp-builder](.github/skills/mcp-builder/SKILL.md) | Criacao de MCP servers de alta qualidade. |
| [msstore-cli](.github/skills/msstore-cli/SKILL.md) | Publicacao e fluxo com Microsoft Store CLI. |
| [nuget-manager](.github/skills/nuget-manager/SKILL.md) | Gestao de pacotes NuGet via dotnet CLI. |
| [polyglot-test-agent](.github/skills/polyglot-test-agent/SKILL.md) | Geracao de testes para multiplas linguagens. |
| [security-review](.github/skills/security-review/SKILL.md) | Revisao de seguranca de codigo. |
| [webapp-testing](.github/skills/webapp-testing/SKILL.md) | Testes web com Playwright. |
| [xlsx](.github/skills/xlsx/SKILL.md) | Operacoes com planilhas como entrada/saida principal. |

<!-- copilot-prompts-private-skillpack:END -->
