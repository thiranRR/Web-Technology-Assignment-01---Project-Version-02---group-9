<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Message;

class MessagesTableSeeder extends Seeder
{
    public function run(): void
    {
        Message::create([
            'sender_id' => 'S001',
            'receiver_id' => '1',
            'content' => 'Hello Dr. Brown, I am interested in your AI research.'
        ]);

        Message::create([
            'sender_id' => '1',
            'receiver_id' => 'S001',
            'content' => 'Great! Please apply via the system.'
        ]);
    }
}
