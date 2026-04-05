# Portfolio Hub - Marcos Silva

Portfolio interativo com visual de **caderno/notebook** — interface surpreendente que lista dinamicamente todos os repositórios públicos do GitHub.

## Conceito

A interface simula um caderno real com:
- **Capa** de couro com animação de abertura 3D
- **Espiral** lateral com anéis metálicos
- **Páginas pautadas** com margem vermelha
- **Abas coloridas** para navegação
- **Sticky notes** e papel rasgado para informações
- **Dados do GitHub** carregados dinamicamente via API

## Páginas

| Aba | Conteúdo |
|-----|----------|
| Sobre | Perfil, avatar GitHub, contadores animados |
| Projetos | Grid de repos com filtro por linguagem |
| Skills | Tags organizadas por categoria |
| Contato | LinkedIn, GitHub, email |

## Stack

- HTML5 + CSS3 (sem frameworks)
- JavaScript Vanilla (ES6+)
- GitHub REST API
- Google Fonts (Caveat, Inter, JetBrains Mono)
- Font Awesome Icons

## Deploy

Qualquer servidor estático (GitHub Pages, Netlify, Vercel):

```bash
# GitHub Pages
git push origin main
# Ativar Pages nas configurações do repo
```

## Para rodar local

Abra `index.html` no navegador ou:

```bash
npx serve .
```

## Autor

**Marcos Silva** — [LinkedIn](https://www.linkedin.com/in/marcosprogramador/) | [GitHub](https://github.com/masilvaarcs)
