import fs from 'fs'
import { createServer } from 'http'

createServer((req, resp) => {
	const spaceDataStream = fs.createReadStream('data.json', 'utf8')
	resp.writeHead(200, {"Content-Type": "application/json"})
	spaceDataStream.pipe(resp)
}).listen(7777)


	
	