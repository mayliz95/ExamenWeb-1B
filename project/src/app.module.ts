import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ComidaController} from "./Comida/comida.controller";
import {IngredientesController} from "./Ingredientes/ingredientes.controller";

@Module({
  imports: [],
  controllers: [AppController, ComidaController, IngredientesController],
  providers: [AppService],
})
export class AppModule {}
