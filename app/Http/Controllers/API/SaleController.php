<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Sale;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::all();
        return response()->json($sales);
    }
}
