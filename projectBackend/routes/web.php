<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LogingController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

//Inertia login routes

Route::get('login', [LogingController::class, 'showLoginForm'])->name('login');
Route::post('login', [LogingController::class, 'login']);
Route::post('logout', [LogingController::class, 'logout'])->name('logout');

// Protected routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
