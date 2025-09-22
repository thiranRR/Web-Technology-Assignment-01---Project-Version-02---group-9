<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ResearchProject;

class ResearchProjectsTableSeeder extends Seeder
{
    public function run(): void
    {
        ResearchProject::create([
            'faculty_id' => 1,
            'title' => 'AI for Healthcare',
            'description' => 'Exploring AI applications in medical diagnosis.',
            'field' => 'Artificial Intelligence',
            'required_skills' => 'Python, ML',
            'start_date' => now(),
            'end_date' => now()->addMonths(6),
        ]);

        ResearchProject::create([
            'faculty_id' => 2,
            'title' => 'Quantum Simulations',
            'description' => 'Building models for quantum behavior.',
            'field' => 'Physics',
            'required_skills' => 'C++, Mathematics',
            'start_date' => now(),
            'end_date' => now()->addMonths(12),
        ]);
    }
}
