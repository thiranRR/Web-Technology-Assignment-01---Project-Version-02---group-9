<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class FacultyMember extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'user_id',         // FK to users.id
        'full_name',
        'email',
        'password',
        'profile_picture', // optional avatar
        'department',
        'bio',
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];

    /**
     * Each faculty member belongs to a user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
