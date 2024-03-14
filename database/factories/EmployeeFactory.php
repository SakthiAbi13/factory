<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'name' => fake()->name(),
            // 'username' => fake()->name(),
            // 'address' => fake()->name(),
            // 'email' => fake()->unique()->safeEmail(),
            // 'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'name' => Str::random(10),
            'username' => Str::random(10),
            'address' => Str::random(20),
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'is_active' => 1,
            // 'remember_token' => Str::random(10),
        ];
    }
}
