import app from "./app";
import config from "./utils/config";
import "./utils/db";

app.get("/", (req, res) => {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        author: app.get('pkg').author
    });
});

app.listen(config.port, () => console.log('Server listen on port', config.port));