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
        Schema::create('applications', function (Blueprint $table) {
            $table->bigIncrements('application_id');
            $table->enum('status', ['pending', 'accepted', 'rejected'])->default('pending');
            $table->dateTime('applied_at')->useCurrent();

            // FK to students.student_id (students uses VARCHAR PK)
            $table->string('student_id', 10);
            $table->unsignedBigInteger('research_id');

            $table->foreign('student_id')
                  ->references('student_id')
                  ->on('students')
                  ->onDelete('cascade');

            $table->foreign('research_id')
                  ->references('research_id')
                  ->on('research_projects')
                  ->onDelete('cascade');

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
