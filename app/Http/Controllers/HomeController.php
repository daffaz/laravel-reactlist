<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class HomeController extends Controller
{
    public function index()
    {
        $response = Http::get('https://api.jikan.moe/v3/top/anime')->json();
        return view('home', [
            'status' => true,
            'data' => json_encode($response['top'])
        ]);
    }
}
