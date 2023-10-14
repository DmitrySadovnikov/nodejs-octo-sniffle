```bash
npm start
```

## API endpoints

Get all books
```bash
CURL -i 'http://localhost:3000/books'
```

Add a book
```bash
CURL -X POST -i 'http://localhost:3000/books' -H 'Content-Type: application/json' -d '{"title":"test"}'
```
