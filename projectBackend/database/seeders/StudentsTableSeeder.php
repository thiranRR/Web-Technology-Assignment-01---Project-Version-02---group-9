<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Student;

class StudentsTableSeeder extends Seeder
{
    public function run(): void
    {
        Student::create([
            'student_id' => 'S001',
            'full_name' => 'Alice Johnson',
            'email' => 'alice@example.com',
            'password' => Hash::make('password123'),
            'faculty' => 'Engineering',
            'academic_year' => 2,
            'skills' => 'PHP, Laravel, React',
            'interests' => 'AI, Web Development'
        ]);

        Student::create([
            'student_id' => 'S002',
            'full_name' => 'Bob Smith',
            'email' => 'bob@example.com',
            'password' => Hash::make('password123'),
            'faculty' => 'Science',
            'academic_year' => 3,
            'skills' => 'Python, Data Science',
            'interests' => 'Machine Learning, Research'
        ]);
    }
}
