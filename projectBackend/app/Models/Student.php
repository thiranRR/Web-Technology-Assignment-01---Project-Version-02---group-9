<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentProfile extends Model
{
    use HasFactory;

    // Fillable fields
    protected $fillable = [
        'user_id',       // links to users.id
        'degree',        // student degree
        'year',          // academic year
        'skills',        // comma-separated or JSON
        'github_link',   // optional GitHub URL
    ];

    /**
     * Each student profile belongs to a single user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Optionally: define relationship to projects/applications/messages if needed
     */
    // public function applications() { ... }
    // public function projects() { ... }
}
