"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
const student_service_1 = require("./student.service");
const student_validation_1 = __importDefault(require("./student.validation"));
// import Joi from 'joi';
// import studentValidationSchema from './student.validation';
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // creating schema validation usin zod
        // const studentValidationSchema = z.object({
        //   id: z.string(),
        //   name: z.object({
        //     firstName: z.string().max(20, {
        //       message: 'First Name can not be more than 20 characters'
        //     })
        //   })
        // })
        const { student: studentData } = req.body;
        // data validation using joi
        // const { error, value } = studentValidationSchema.validate(studentData);
        // console.log(error, value);
        // data validation using joi
        const zodparsedData = student_validation_1.default.parse(studentData);
        const result = yield student_service_1.StudentService.createStudentIntoDB(zodparsedData);
        // if (error) {
        //   res.status(500).json({
        //     success: false,
        //     message: 'Something went wrong',
        //     error: error.details,
        //   });
        // }
        res.status(200).json({
            success: true,
            message: 'Student is created succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Students are retrived succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentService.getSingleStudentsFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Students is retrieved succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentService.deleteStudentsFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Students is deleted succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
exports.StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent,
};
