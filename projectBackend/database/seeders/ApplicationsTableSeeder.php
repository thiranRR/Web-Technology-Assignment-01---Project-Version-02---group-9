<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Application;

class ApplicationsTableSeeder extends Seeder
{
    public function run(): void
    {
        Application::create([
            'status' => 'pending',
            'student_id' => 'S001',
            'research_id' => 1,
        ]);

        Application::create([
            'status' => 'accepted',
            'student_id' => 'S002',
            'research_id' => 2,
        ]);
    }
}
