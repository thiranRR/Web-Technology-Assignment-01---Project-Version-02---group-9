<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $primaryKey = 'message_id';
    protected $fillable = [
        'sender_id',
        'receiver_id',
        'content',
    ];

    protected $casts = [
        'message_id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Helper: try to resolve sender as Student first then FacultyMember.
     * Returns a model instance (Student|FacultyMember) or null.
     */
    public function senderUser()
    {
        // student primary key is string
        $student = Student::where('student_id', $this->sender_id)->first();
        if ($student) {
            return $student;
        }

        // try faculty (faculty_id is integer in DB but stored as string here)
        if (is_numeric($this->sender_id)) {
            return FacultyMember::find((int) $this->sender_id);
        }

        return null;
    }

    /**
     * Helper: try to resolve receiver similarly.
     * If receiver_id is null, it's a public forum message.
     */
    public function receiverUser()
    {
        if (is_null($this->receiver_id)) {
            return null; // public forum
        }

        $student = Student::where('student_id', $this->receiver_id)->first();
        if ($student) {
            return $student;
        }

        if (is_numeric($this->receiver_id)) {
            return FacultyMember::find((int) $this->receiver_id);
        }

        return null;
    }
}
