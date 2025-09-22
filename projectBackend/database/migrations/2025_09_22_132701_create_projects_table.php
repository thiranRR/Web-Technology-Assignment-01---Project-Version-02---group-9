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
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('project_id');
            $table->string('student_id', 10);
            $table->string('title', 100);
            $table->text('description')->nullable();
            $table->string('repo_link', 255)->nullable();
            $table->timestamps();

            $table->foreign('student_id')
                  ->references('student_id')
                  ->on('students')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
