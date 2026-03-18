<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Sale;

class SaleFactory extends Factory
{
    protected $model = Sale::class;

    public function definition(): array
    {
        return [
            'quantity' => $this->faker->numberBetween(1, 20),
            'amount' => $this->faker->randomFloat(2, 50, 100),
        ];
    }
}
