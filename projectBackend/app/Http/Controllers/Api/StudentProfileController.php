<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\StudentProfile;

class StudentProfileController extends Controller
{
    /**
     * Show a student profile with related user
     */
    public function show($id)
    {
        $profile = StudentProfile::with('user')->findOrFail($id);

        return response()->json([
            'success' => true,
            'data'    => $profile,
        ]);
    }

    /**
     * Update student profile
     */
    public function update(Request $request, $id)
    {
        $profile = StudentProfile::findOrFail($id);

        // Ensure the logged-in user can only update their own profile
        $this->authorize('update', $profile);

        $data = $request->validate([
            'degree'      => 'sometimes|string|max:100',
            'year'        => 'sometimes|integer|min:1|max:10',
            'skills'      => 'sometimes|string',
            'github_link' => 'sometimes|url|max:255',
        ]);

        $profile->update($data);

        return response()->json([
            'success' => true,
            'data'    => $profile->load('user'),
        ]);
    }
}
