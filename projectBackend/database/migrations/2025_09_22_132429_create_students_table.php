<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->string('student_id', 10)->primary(); // VARCHAR(10) PK
            $table->string('full_name', 100);
            $table->string('email', 50)->unique();
            $table->string('password', 255);
            $table->string('profile_picture', 255)->nullable();
            $table->text('faculty')->nullable();
            $table->unsignedTinyInteger('academic_year'); // INT(1) equivalent
            $table->text('skills')->nullable();
            $table->text('interests')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
