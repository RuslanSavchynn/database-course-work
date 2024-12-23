import { NextResponse } from "next/server"
import { quizCreationSchema } from "@/schemas/form/quiz";
import { ZodError } from "zod";
import { strict_output } from "@/lib/gpt";
// import { getAuthSession } from "@/lib/nextauth";
// /api/questions
export const POST = async (req: Request, res: Response) => {

    try {
        // const session = await getAuthSession()
        // if (!session?.user) {
        //     return NextResponse.json(
        //         {
        //             error: "You must be logged in to create a quiz",
        //         },
        //         {
        //             status: 401,
        //         }
        //     );
        // }
        const body = await req.json();
        const { amount, topic, type } = quizCreationSchema.parse(body);
        let questions: any;

        if (type === "open_ended") {
            questions = await strict_output(
                "You are a helpful AI that is able to generetate a pair of question and answers, the length of the answer should not exeed 15 words, store all the pairs of answers and questions in a JSON array",
                new Array(amount).fill(
                    `You are to generate a random open-ended question about ${topic}`
                ),



                {
                    question: "question",
                    answer: "answer with max length of 15 words",
                }
            );
        } else if (type === 'mcq') {
            questions = await strict_output(
                `You are a helpful AI that is able to generetate mcq questions and answers, the length of each answer should not exeed 15 words`,
                new Array(amount).fill(
                    `You are to generate a random multiple choice question about ${topic}`
                ),
                {
                    question: "question",
                    answer: "answer with max length of 15 words",
                    option1: "1st option with max length of 15 words",
                    option2: "2nd option with max length of 15 words",
                    option3: "3rd option with max length of 15 words",
                }
            )
        }

        return NextResponse.json(
            {
                questions,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({
                error: error.issues,
            },
                {

                    status: 400,

                }
            )
        }
    }
 
}