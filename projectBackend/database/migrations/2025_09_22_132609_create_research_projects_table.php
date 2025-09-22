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
        Schema::create('research_projects', function (Blueprint $table) {
            $table->bigIncrements('research_id'); // INT PK
            // explicit FK referencing faculty_members.faculty_id
            $table->unsignedBigInteger('faculty_id');
            $table->string('title', 100);
            $table->text('description')->nullable();
            $table->string('field', 50)->nullable();
            $table->string('required_skills', 50)->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->timestamps();

            $table->foreign('faculty_id')
                  ->references('faculty_id')
                  ->on('faculty_members')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('research_projects');
    }
};
