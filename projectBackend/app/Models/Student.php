<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; // for auth usage
use Illuminate\Notifications\Notifiable;

class Student extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $primaryKey = 'student_id';
    public $incrementing = false; // varchar PK
    protected $keyType = 'string';

    protected $fillable = [
        'student_id',
        'full_name',
        'email',
        'password',
        'profile_picture',
        'faculty',
        'academic_year',
        'skills',
        'interests',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'academic_year' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relationships
    public function applications()
    {
        return $this->hasMany(Application::class, 'student_id', 'student_id');
    }

    public function projects()
    {
        return $this->hasMany(Project::class, 'student_id', 'student_id');
    }

    // Messages sent by this student (sender_id stores student_id)
    public function messagesSent()
    {
        return $this->hasMany(Message::class, 'sender_id', 'student_id');
    }

    // Messages received by this student (receiver_id stores student_id)
    public function messagesReceived()
    {
        return $this->hasMany(Message::class, 'receiver_id', 'student_id');
    }
}
