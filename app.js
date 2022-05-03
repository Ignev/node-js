
// Express ------------------------------------------------------------------------------------





// Создание базового роутинга ------------------------------------------------------------------

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     console.log('Server request');

//     res.setHeader("Content-Type", 'text/html');

//     const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

//     let basePath = '';

//     switch (req.url) {
//         case '/':
//         case '/home':
//         case '/index.html':
//             basePath = createPath('index');
//             res.statusCode = 200;
//             break;
//         case '/about-us':
//             res.statusCode = 301;
//             res.setHeader('Location', '/contacts');
//             res.end();
//             break;
//         case '/contacts': 
//             basePath = createPath('contacts');
//             res.statusCode = 200;
//             break;
    
//         default:
//             basePath = createPath('error');
//             res.statusCode = 404;
//             break;
//     }
//         fs.readFile(basePath, (err, data) => {
//             if(err){ 
//                 console.log(err);
//                 res.statusCode = 500;
//                 res.end();
//             }
//             else{
//                 res.write(data);
//                 res.end();
//             }
//         })
    

// });

// server.listen(PORT, 'localhost', (error) => {
//     error ? console.log(error) : console.log('Listening server');
// })





// Клиент и сервер (базовые понятия) ------------------------------------------------------------

// const http = require('http');

// const PORT = 3000

// const server = http.createServer((req, res) => {
//     console.log('Server request');
//     console.log(req.url, req.method);

//     res.setHeader('Content-Type', 'application/json');

//     // res.setHeader('Content-Type', 'text/html')
//     // res.write('<h1>Hello world!</h1>')

//     const data = JSON.stringify([
//         {name: "Tommy", age: 39},
//         {name: "Anna", age: 27},
//     ])

//     res.end(data);
// });
// server.listen(PORT, 'localhost', (error) => {
//     error ? console.log(erroer) : console.log(`listening port ${PORT}` );
// })




// Buffer и stream -------------------------------------------------------------


// const fs = require('fs');
// const zlib = require('zlib');


// const readStream = fs.createReadStream('./docs/text.txt');
// const writeStream = fs.createWriteStream('./docs/new-text.txt');
// const compressStream = zlib.createGzip();

// const handleError = () => {
//     console.log('Error');
//     readStream.destroy();
//     writeStream.end('End write with error...')
// }

// readStream
// .on('error', handleError)
// .pipe(compressStream)
// .pipe(writeStream)
// .on('error', handleError)


// Обработка событий ------------------------------------------------------------

// const EventEmitter = require('events');

// const {Logger} = require('./log')

// const logger = new Logger();


// logger.on('some_event', (args) => {
//     const { id, text } = args;
//     console.log(id, text);
// });

// logger.log('User Logger!')

// Работ с файлами --------------------------------------------------------------

// const fs = require('fs')
// fs.readFile('./text.txt', 'utf8', (error, data) => {
//     fs.mkdir('./files', () => {
//         fs.writeFile('./files/text2.txt', `${data} New text`, (error) => {
//             error ? console.log(error) : null;
//         })
//     })
// });


// setTimeout(() => {
//     if(fs.existsSync('./files/text2.txt')){
//         fs.unlink('./files/text2.txt', () => {})
//     }
//     else {
//         console.log('Файл отсутствует');
//     }
// }, 4000);

// setTimeout(() => {
//     if(fs.existsSync('./files')){
//         fs.rmdir('./files', () => {})
//     }
//     else {
//         console.log('Папка отсутствует');
//     }
// }, 6000);