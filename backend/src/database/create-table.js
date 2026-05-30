import sql from './db.js'

sql`
    create TABLE users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );
`.then(() => {
    console.log("Tabela criada")
})