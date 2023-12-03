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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const student_modules_1 = require("../student.modules");
const createStudentIntoDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield student_modules_1.Student.isUserExists(studentData.id)) {
        throw new Error('User already exists');
    }
    const result = yield student_modules_1.Student.create(studentData); // built in static method
    // const student = new Student(studentData);
    // if (await student.isUserExists(studentData.id)) {
    //   throw new Error('User already exists');
    // }
    // const result = await student.save();
    return result;
});
const getAllStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_modules_1.Student.find();
    return result;
});
const getSingleStudentsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await Student.findOne({ id });
    const result = yield student_modules_1.Student.aggregate([{ $match: { id: id } }]);
    return result;
});
const deleteStudentsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_modules_1.Student.updateOne({ id }, { isDeleted: true });
    return result;
});
exports.StudentService = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentsFromDB,
    deleteStudentsFromDB,
};
