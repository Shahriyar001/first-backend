import config from '../../config';
import { TStudent } from '../student/student.interface';
import { NewUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const user: NewUser = {};
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }

  user.password = password || (config.default_password as string);

  user.role = 'student';

  user.id = '2030100001'

  const result = await User.create(user); // built in static method

  // const student = new Student(studentData);
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }

  // const result = await student.save();
  return result;
};

export const UserService = {
  createStudentIntoDB,
};
