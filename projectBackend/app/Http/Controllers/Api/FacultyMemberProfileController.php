<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FacultyMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FacultyMemberProfileController extends Controller
{
    /**
     * Show a faculty member profile
     */
    public function show($id)
    {
        $faculty = FacultyMember::findOrFail($id);

        return response()->json([
            'success' => true,
            'data'    => $faculty,
        ]);
    }

    /**
     * Update a faculty member profile
     */
    public function update(Request $request, $id)
    {
        $faculty = FacultyMember::findOrFail($id);
        $this->authorize('update', $faculty);

        $data = $request->validate([
            'full_name'     => 'sometimes|string|max:150',
            'department'    => 'sometimes|string|max:100',
            'bio'           => 'sometimes|string|max:500',
            'contact_email' => 'sometimes|email|max:150',
        ]);

        $faculty->update($data);

        return response()->json([
            'success' => true,
            'data'    => $faculty,
        ]);
    }

    /**
     * Upload or update faculty member avatar/profile picture
     */
    public function uploadAvatar(Request $request, $id)
    {
        $faculty = FacultyMember::findOrFail($id);
        $this->authorize('update', $faculty);

        $request->validate([
            'avatar' => 'required|image|max:2048',
        ]);

        // Delete old avatar if exists
        if ($faculty->profile_picture) {
            Storage::disk('public')->delete($faculty->profile_picture);
        }

        // Store new avatar
        $path = $request->file('avatar')->store('faculty-avatars', 'public');
        $faculty->update(['profile_picture' => $path]);

        return response()->json([
            'success' => true,
            'data'    => [
                'url'     => url(Storage::url($path)),
                'faculty' => $faculty,
            ],
        ]);
    }
}
