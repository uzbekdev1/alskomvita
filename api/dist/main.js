"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const basePath = '/api/v1';
    app.enableCors();
    app.setGlobalPrefix(basePath);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Alskom API')
        .setDescription('The Alskom API description')
        .setVersion('1.0')
        .addTag('agents', 'Agents')
        .addTag('branches', 'Branches')
        .addTag('products', 'Products')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/', app, document);
    await app.listen(parseInt(process.env.PORT, 10) || 3000);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap().then(r => {
    console.log('App is load');
}).catch(reason => console.error(reason));
//# sourceMappingURL=main.js.map