# Lucky Dog Grooming – Web aplikacija

Vite + React + TypeScript + Tailwind projekt za web stranicu salona za uređivanje pasa.

## 🚀 Brza instalacija

```bash
# Kloniraj repozitorij
git clone https://github.com/FilipPicek/Osijek.git
cd Osijek

# Instaliraj dependencies
npm install

# Pokreni razvojni server
npm run dev
```

Aplikacija će se pokrenuti na `http://localhost:5173`.

## 📦 Skripte

- `npm run dev` - pokretanje razvojnog servera
- `npm run build` - izrada produkcijskog bundle-a
- `npm run preview` - lokalni server za pregled builda
- `npm run lint` - pokretanje ESLint provjera
- `npm run typecheck` - TypeScript provjera tipova

## 🌐 Deployment

### GitHub Pages

1. **Postavite repository URL u package.json:**
   ```json
   "repository": {
     "type": "git",
     "url": "git+https://github.com/FilipPicek/Osijek.git"
   }
   ```

2. **Build i deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

### Vercel/Netlify

Jednostavno povežite GitHub repozitorij s Vercel ili Netlify - automatski će se deployati.

### Manual deployment

```bash
npm run build
# Upload sadržaj dist/ foldera na vaš web server
```

## 🏗️ Struktura projekta

```
├── src/
│   ├── App.tsx          # Glavna komponenta
│   ├── main.tsx         # Entry point
│   └── index.css        # Globalni stilovi
├── public/              # Statičke slike i ikone
├── dist/                # Build output (generira se)
└── package.json         # Dependencies i skripte
```

## 🎨 Tehnologije

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📝 Licenca

MIT License - slobodno koristite za osobne i komercijalne projekte.

## 🤝 Doprinos

Pull requestovi su dobrodošli! Za veće promjene, molimo otvorite issue prvo da raspravimo što želite promijeniti.

## 📞 Kontakt

- **Email:** luckydoggrooming.osijek@gmail.com
- **Telefon:** 091 242 8013
- **Instagram:** [@luckydog031](https://www.instagram.com/luckydog031/?hl=en)
