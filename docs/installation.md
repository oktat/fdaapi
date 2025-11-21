# Installation

Clone repository:

```bash
git clone https://github.com/oktat/fdaapi
```

Change directory:

```bash
cd fdaapi
```

Download dependency:

```bash
npm install
```

Copy .env.example file as .env.

On Windows:

```bash
copy .env.example .env
```

Linux and macOS:

```bash
cp .env.example .env
```

Rewritre DB_STORAGE in .env file:

```env
DB_STORAGE=database.sqlite
```

Migrate database:

```bash
node op migrate
```

Start server:

```bash
npm start
```

## Seeder

```bash
node op db:seed
```
