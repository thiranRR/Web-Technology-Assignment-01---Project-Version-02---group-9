<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
{
    $this->call([
        StudentsTableSeeder::class,
        FacultyMembersTableSeeder::class,
        ResearchProjectsTableSeeder::class,
        ApplicationsTableSeeder::class,
        ProjectsTableSeeder::class,
        MessagesTableSeeder::class,
        ContactMessagesTableSeeder::class,
    ]);
}

}
