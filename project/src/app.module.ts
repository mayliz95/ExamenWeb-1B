import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ComidaController} from "./Comida/comida.controller";
import {IngredientesController} from "./Ingredientes/ingredientes.controller";
import {ComidaService} from "./Comida/comida.service";
import {AutorizacionController} from "./autorizacion.controller";

@Module({
  imports: [],
  controllers: [
      AppController,
      ComidaController,
      IngredientesController,
      AutorizacionController],
  providers: [
      AppService,
      ComidaService],
})

export class AppModule {}
