<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestValidationController extends Controller
{
    public function test(CreateAccountRequest $request)
    {
        // Validation passed, just return success message
        return response()->json(['message' => 'Validation passed!']);
    }
}
