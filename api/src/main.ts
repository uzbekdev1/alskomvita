import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe} from '@nestjs/common';

declare const module: any;

async function bootstrap() {

    // Config server & init swagger
    const app = await NestFactory.create(AppModule);
    const basePath = '/api/v1';

    // Enable CORS
    app.enableCors();

    // Add prefix
    app.setGlobalPrefix(basePath);
    app.useGlobalPipes(new ValidationPipe());

    // Swagger Configuration
    const options = new DocumentBuilder()
        .setTitle('Alskom API')
        .setBasePath(basePath)
        .setDescription('The Alskom API description')
        .setVersion('1.0')
        .addTag('agents', 'Agents')
        .addTag('branches', 'Branches')
        .addTag('products', 'Products')
        // .addBearerAuth('Authorization', 'header')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/', app, document);

    // 🚀 Start the application 🚀
    await app.listen(parseInt(process.env.PORT, 10) || 3000);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }

}

bootstrap().then(r => {
    console.log('App is load');
}).catch(reason => console.error(reason));
