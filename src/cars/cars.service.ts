import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cheroke',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    const existsId = this.cars.some(c => c.id === id);

    if (isNaN(id)) {
      return { msg: 'El ID debe ser un número' };
    }

    if (!existsId) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return this.cars.find(c => c.id === id);
  }
}
