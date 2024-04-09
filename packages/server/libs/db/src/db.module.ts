import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getModelForClass, mongoose } from '@typegoose/typegoose';
import { getDbSchemaName } from './common/utils';
import { ClassType } from 'src/types/env';

@Module({})
export class DbModule {
  static forRoot(envKey: string, options: mongoose.ConnectOptions = {}): DynamicModule {
    const _providers: Provider[] = [
      {
        provide: 'DB_CONNECT',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          const url = config.get<string>(envKey, 'MONGODB_URI')
          console.log('DB_CONNECT', url)
          console.log(process.env.NODE_ENV);
          return mongoose.connect(url, options)
        },
      },
    ]

    return {
      module: DbModule,
      providers: _providers,
      exports: _providers,
      global: true,
    }
  }

  static forFeature(models: ClassType[]): DynamicModule {
    const providers = models.map(v => ({
      provide: getDbSchemaName(v),
      useFactory: () => getModelForClass(v),
    }))
    return {
      module: DbModule,
      providers,
      exports: providers,
      global: true,
    }
  }
}
