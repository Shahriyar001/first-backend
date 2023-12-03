"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(1)
        .max(20)
        .refine((value) => value.charAt(0).toUpperCase() + value.slice(1) === value, {
        message: 'First Name must start with a capital letter',
    }),
    middleName: zod_1.z.string().min(0).max(255).optional(),
    lastName: zod_1.z
        .string()
        .min(1)
        .refine((value) => /^[A-Za-z]+$/.test(value), {
        message: 'Last Name must contain only alphabetic characters',
    }),
});
// Define Zod schema for Guardian
const guardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string().min(1),
    fatherOccupation: zod_1.z.string().min(1),
    fatherContactNo: zod_1.z.string().min(1),
    motherName: zod_1.z.string().min(1),
    motherOccupation: zod_1.z.string().min(1),
    motherContactNo: zod_1.z.string().min(1),
});
// Define Zod schema for LocalGuardian
const localguardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    occupation: zod_1.z.string().min(1),
    contactNo: zod_1.z.string().min(1),
    address: zod_1.z.string().min(1),
});
// Define Zod schema for Student
const studentValidationSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    password: zod_1.z.string().max(20),
    name: userNameValidationSchema,
    gender: zod_1.z.enum(['male', 'female', 'other']),
    dateOfBirth: zod_1.z.string().optional(),
    email: zod_1.z.string().email().min(1),
    contactNo: zod_1.z.string().min(1),
    emergencyContactNo: zod_1.z.string().min(1),
    bloodGroup: zod_1.z
        .enum(['A+', 'B+', 'A-', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
    presentAddress: zod_1.z.string().min(1),
    permanentAddress: zod_1.z.string().min(1),
    guardian: guardianValidationSchema,
    localGuardian: localguardianValidationSchema,
    profileImg: zod_1.z.string().optional(),
    isActive: zod_1.z.enum(['active', 'blocked']).default('active'),
    isDeleted: zod_1.z.boolean(),
});
exports.default = studentValidationSchema;
