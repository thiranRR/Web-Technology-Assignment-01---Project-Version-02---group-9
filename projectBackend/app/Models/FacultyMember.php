<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class FacultyMember extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $primaryKey = 'faculty_id';
    // incrementing true by default (bigIncrements)
    protected $fillable = [
        'full_name',
        'email',
        'password',
        'profile_picture',
        'department',
        'bio',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'faculty_id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relationships
    public function researchProjects()
    {
        return $this->hasMany(ResearchProject::class, 'faculty_id', 'faculty_id');
    }

    // Messages sent by this faculty (sender_id stores faculty_id as string)
    public function messagesSent()
    {
        return $this->hasMany(Message::class, 'sender_id', 'faculty_id');
    }

    // Messages received by this faculty (receiver_id stores faculty_id as string)
    public function messagesReceived()
    {
        return $this->hasMany(Message::class, 'receiver_id', 'faculty_id');
    }
}
