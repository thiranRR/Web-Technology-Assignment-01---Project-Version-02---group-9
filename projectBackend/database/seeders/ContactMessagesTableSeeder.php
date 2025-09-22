<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ContactMessage;

class ContactMessagesTableSeeder extends Seeder
{
    public function run(): void
    {
        ContactMessage::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'message' => 'This is a test contact message.'
        ]);

        ContactMessage::create([
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'message' => 'I want to know more about your platform.'
        ]);
    }
}
