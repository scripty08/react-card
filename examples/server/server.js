import { Server, IndexController } from '@scripty/server';

const init = async () => {
    let app = new Server();
    await app.addController(new IndexController({ title: '@scripty/card' }));
    app.start(3003);
};

init().catch((err) => {
    console.error(err.message);
});
