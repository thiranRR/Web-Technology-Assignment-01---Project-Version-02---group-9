<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\StudentProfileController;
use App\Http\Controllers\Api\FacultyMemberProfileController;

// Public routes
Route::prefix('v1')->group(function () {
    Route::post('auth/register', [AuthController::class, 'register']);
    Route::post('auth/login', [AuthController::class, 'login']);
});

// Protected routes
Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    Route::post('auth/logout', [AuthController::class, 'logout']);
    Route::get('auth/me', [AuthController::class, 'me']);

    Route::get('users/{id}', [UserController::class, 'show']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::post('users/{id}/avatar', [UserController::class, 'uploadAvatar']);

    Route::get('student-profiles/{id}', [StudentProfileController::class, 'show']);
    Route::put('student-profiles/{id}', [StudentProfileController::class, 'update']);

    Route::get('faculty-members/{id}', [FacultyMemberProfileController::class, 'show']);
    Route::put('faculty-members/{id}', [FacultyMemberProfileController::class, 'update']);
    Route::post('faculty-members/{id}/avatar', [FacultyMemberProfileController::class, 'uploadAvatar']);
});
