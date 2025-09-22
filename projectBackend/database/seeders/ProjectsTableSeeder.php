<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectsTableSeeder extends Seeder
{
    public function run(): void
    {
        Project::create([
            'student_id' => 'S001',
            'title' => 'Smart Traffic Management',
            'description' => 'IoT-based traffic optimization system.',
            'repo_link' => 'https://github.com/example/traffic'
        ]);

        Project::create([
            'student_id' => 'S002',
            'title' => 'Deep Learning Classifier',
            'description' => 'Image recognition using CNNs.',
            'repo_link' => 'https://github.com/example/deep-learning'
        ]);
    }
}
