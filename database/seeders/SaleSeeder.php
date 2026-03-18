<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Sale;

class SaleSeeder extends Seeder
{
    public function run(): void
    {
        $products = ['laptop', 'phone', 'tablet', 'monitor', 'keyboard'];

        foreach ($products as $product) {
            Sale::factory()->count(10)->create([
                'product' => $product
            ]);
        }
    }
}
