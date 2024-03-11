# Umbraco, Azure and Cloudflare

Demo of using hosting an Umbraco Delivery API in Azure and consuming it in Cloudflare Pages

Read all about it on [my blog](https://kjac.dev/posts/jamstack-for-free-with-azure-and-cloudflare).

## Running the demo

The demo consists of a server (Umbraco) and a client (Astro). To run it, first open `src/cms` in a terminal window and run:

```bash
dotnet run
```

... then open `src/site` in a new terminal window and run:

```bash
npm install
npm run dev
```

## Umbraco

The Umbraco database is bundled up as part of the GitHub repo.

You'll need to login to play around with the Umbraco content. The administrator login for Umbraco is:

- Username: admin@localhost
- Password: SuperSecret123

