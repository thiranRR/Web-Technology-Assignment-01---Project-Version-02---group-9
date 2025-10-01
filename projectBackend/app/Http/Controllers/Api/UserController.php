<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Show a user with related profile
     */
    public function show($id)
    {
        $user = User::with(['studentProfile', 'facultyMember'])->findOrFail($id);

        return response()->json([
            'success' => true,
            'data'    => $user,
        ]);
    }

    /**
     * Update user basic info (name, email)
     */
    public function update(ProfileUpdateRequest $request, $id)
    {
        $user = User::findOrFail($id);
        $this->authorize('update', $user);

        $user->update($request->validated());

        return response()->json([
            'success' => true,
            'data'    => $user,
        ]);
    }

    /**
     * Upload or update user avatar
     */
    public function uploadAvatar(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $this->authorize('update', $user);

        $request->validate([
            'avatar' => 'required|image|max:2048', // max 2MB
        ]);

        // Delete old avatar if exists
        if ($user->avatar) {
            Storage::disk('public')->delete($user->avatar);
        }

        // Store new avatar
        $path = $request->file('avatar')->store('avatars', 'public');

        $user->update(['avatar' => $path]);

        return response()->json([
            'success' => true,
            'data'    => [
                'url'  => url(Storage::url($path)),
                'user' => $user,
            ],
        ]);
    }
}
