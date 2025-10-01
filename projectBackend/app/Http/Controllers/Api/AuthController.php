<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\StudentProfile;
use App\Models\FacultyMember;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Register a new user (student or faculty)
     */
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        DB::beginTransaction();
        try {
            $user = User::create([
                'name'     => $data['name'],
                'email'    => $data['email'],
                'password' => Hash::make($data['password']),
                'role'     => $data['role'],
            ]);

            if ($user->role === 'student') {
                StudentProfile::create([
                    'user_id' => $user->id,
                    'degree'  => $data['degree'] ?? null,
                    'year'    => $data['year'] ?? 1,
                    'skills'  => $data['skills'] ?? null,
                    'github_link' => $data['github_link'] ?? null,
                ]);
            } else { // faculty
                FacultyMember::create([
                    'user_id' => $user->id,
                    'full_name' => $data['name'],
                    'email' => $data['email'],
                    'department' => $data['department'] ?? null,
                    'bio' => $data['bio'] ?? null,
                ]);
            }

            $token = $user->createToken('api-token')->plainTextToken;

            DB::commit();

            $user->load('studentProfile', 'facultyMember');

            return response()->json([
                'success' => true,
                'data'    => [
                    'token' => $token,
                    'user'  => $user,
                ]
            ], 201);

        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Registration failed',
                'error'   => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Login user and return Sanctum token
     */
    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.']
            ]);
        }

        $token = $user->createToken('api-token')->plainTextToken;
        $user->load('studentProfile', 'facultyMember');

        return response()->json([
            'success' => true,
            'data'    => [
                'token' => $token,
                'user'  => $user,
            ]
        ]);
    }

    /**
     * Logout current user token
     */
    public function logout(Request $request)
    {
        $request->user()?->currentAccessToken()?->delete();

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully'
        ]);
    }

    /**
     * Return authenticated user + profile
     */
    public function me(Request $request)
    {
        $user = $request->user()->load('studentProfile', 'facultyMember');

        return response()->json([
            'success' => true,
            'data'    => $user
        ]);
    }
}
