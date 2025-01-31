import http from "http"

const server = http.createServer((req, res) => {
    // console.log(req);
    //Kalau ada client yang mengakses endpoint api/data
    //mala akan di berikan data json nya
    //selain itu akan di berikan pesan error
    if (req.url === "/api/data" && req.method === "GET") {
        console.log(req.url);
        console.log(req.method);
        
        
        //sediakan data objek string json
        const data = {
            nama : "Zaffar",
            usia : 20,
            alamat : "Medan"
        }
        res.write(JSON.stringify(data));
        res.end()
    } else {
        res.writeHead(404, {
            "Content-Type" : "application/json"
        });
        res.end(JSON.stringify({error: "Not Found"}));
    }
})

server.listen(3000, () => {
    console.log("Server berjalan");
})