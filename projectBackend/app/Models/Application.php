<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $primaryKey = 'application_id';
    protected $fillable = [
        'status',
        'applied_at',
        'student_id',
        'research_id',
    ];

    protected $casts = [
        'application_id' => 'integer',
        'applied_at' => 'datetime',
        'research_id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relationships
    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id', 'student_id');
    }

    public function researchProject()
    {
        return $this->belongsTo(ResearchProject::class, 'research_id', 'research_id');
    }
}
