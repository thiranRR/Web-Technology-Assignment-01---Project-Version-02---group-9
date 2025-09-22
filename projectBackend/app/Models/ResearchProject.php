<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResearchProject extends Model
{
    use HasFactory;

    protected $primaryKey = 'research_id';
    protected $fillable = [
        'faculty_id',
        'title',
        'description',
        'field',
        'required_skills',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'research_id' => 'integer',
        'faculty_id' => 'integer',
        'start_date' => 'date',
        'end_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relationships
    public function faculty()
    {
        return $this->belongsTo(FacultyMember::class, 'faculty_id', 'faculty_id');
    }

    public function applications()
    {
        return $this->hasMany(Application::class, 'research_id', 'research_id');
    }
}
