import http from "node:http";
const server = http.createServer((req,res) =>{
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify({message: "Hello from my first TypeScript backend!"}));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:{PORT}`);
});