<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('employees')->insert([
            'name' => Str::random(10),
            'username' => Str::random(10),
            'address' => Str::random(20),
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'is_active' => 1
        ]);
    }
}
