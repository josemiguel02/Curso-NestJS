import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000, () => {
    console.info(`Server listen on -> http://localhost:${3000}`);
  });
}

main();
