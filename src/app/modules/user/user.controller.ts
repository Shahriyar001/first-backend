import { UserService } from './user.service';

const createStudent = async (req: Request, res: Response) => {
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

    // const zodparsedData = studentValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB();

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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
