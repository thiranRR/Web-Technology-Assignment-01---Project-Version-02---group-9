<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\StudentProfile;

class StudentsTableSeeder extends Seeder
{
    public function run(): void
    {
        $students = [
            [
                'name' => 'Alice Johnson',
                'email' => 'alice@example.com',
                'password' => 'password123',
                'degree' => 'BSc Engineering',
                'year' => 2,
                'skills' => 'PHP, Laravel, React',
                'github_link' => 'https://github.com/alice',
            ],
            [
                'name' => 'Bob Smith',
                'email' => 'bob@example.com',
                'password' => 'password123',
                'degree' => 'BSc Science',
                'year' => 3,
                'skills' => 'Python, Data Science',
                'github_link' => 'https://github.com/bob',
            ],
        ];

        foreach ($students as $s) {
            $user = User::create([
                'name' => $s['name'],
                'email' => $s['email'],
                'password' => Hash::make($s['password']),
                'role' => 'student',
            ]);

            StudentProfile::create([
                'user_id' => $user->id,
                'degree' => $s['degree'],
                'year' => $s['year'],
                'skills' => $s['skills'] ?? null,
                'github_link' => $s['github_link'] ?? null,
            ]);
        }
    }
}
