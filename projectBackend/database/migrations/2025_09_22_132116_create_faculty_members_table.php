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
        Schema::create('faculty_members', function (Blueprint $table) {
            $table->bigIncrements('faculty_id'); // INT auto-increment PK (unsignedBigInteger)
            $table->string('full_name', 100);
            $table->string('email', 50)->unique();
            $table->string('password', 255);
            $table->string('profile_picture', 255)->nullable();
            $table->text('department')->nullable();
            $table->text('bio')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faculty_members');
    }
};
