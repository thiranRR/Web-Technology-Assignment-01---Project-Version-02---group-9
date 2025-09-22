<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\FacultyMember;

class FacultyMembersTableSeeder extends Seeder
{
    public function run(): void
    {
        FacultyMember::create([
            'full_name' => 'Dr. Emily Brown',
            'email' => 'emily.brown@example.com',
            'password' => Hash::make('password123'),
            'department' => 'Computer Science',
            'bio' => 'Specialist in Artificial Intelligence.'
        ]);

        FacultyMember::create([
            'full_name' => 'Prof. John Doe',
            'email' => 'john.doe@example.com',
            'password' => Hash::make('password123'),
            'department' => 'Physics',
            'bio' => 'Researcher in Quantum Mechanics.'
        ]);
    }
}
