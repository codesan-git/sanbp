### Requirements

- Node.js 20+ and npm

### Getting started

Run the following command on your local environment:

```bash
git clone https://github.com/codesan-git/sanbp.git my-project-name
cd my-project-name
npm install
```

Then, you can run the project locally in development mode with live reload by executing:

```bash
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Set up authentication

Create a Kinde account at [Kinde.com](https://kinde.com) and create a new application in Kinde Dashboard. Then, copy `KINDE_CLIENT_ID`, `KINDE_CLIENT_SECRET`, `KINDE_ISSUER_URL`, `KINDE_SITE_URL`, `KINDE_POST_LOGOUT_REDIRECT_URL`, `KINDE_POST_LOGIN_REDIRECT_URL`, and `CLERK_SECRET_KEY` into `.env.local` file (not tracked by Git):

```bash
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=your_kinde_issuer_url
KINDE_SITE_URL=your_kinde_site_url
KINDE_POST_LOGOUT_REDIRECT_URL=your_kinde_logout_logout
KINDE_POST_LOGIN_REDIRECT_URL=your_kinde_logout_login
```
