<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\LecturerProfile;

class FacultyMembersTableSeeder extends Seeder
{
    public function run(): void
    {
        $lecturers = [
            [
                'name' => 'Dr. Emily Brown',
                'email' => 'emily.brown@example.com',
                'password' => 'password123',
                'designation' => 'Senior Lecturer',
                'department' => 'Computer Science',
                'research_areas' => 'Artificial Intelligence',
                'contact_email' => 'emily.brown@example.com',
            ],
            [
                'name' => 'Prof. John Doe',
                'email' => 'john.doe@example.com',
                'password' => 'password123',
                'designation' => 'Professor',
                'department' => 'Physics',
                'research_areas' => 'Quantum Mechanics',
                'contact_email' => 'john.doe@example.com',
            ],
        ];

        foreach ($lecturers as $l) {
            $user = User::create([
                'name' => $l['name'],
                'email' => $l['email'],
                'password' => Hash::make($l['password']),
                'role' => 'lecturer',
            ]);

            LecturerProfile::create([
                'user_id' => $user->id,
                'designation' => $l['designation'],
                'department' => $l['department'],
                'research_areas' => $l['research_areas'] ?? null,
                'contact_email' => $l['contact_email'] ?? $l['email'],
            ]);
        }
    }
}
