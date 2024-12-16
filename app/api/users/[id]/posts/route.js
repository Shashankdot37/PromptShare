import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async(request, {params}) =>
{
    try {
        await connectToDB();
        const response = await Prompt.find({
            creator:params.id
        }).populate('creator');
        return new Response(JSON.stringify(response), {status:200})
    } catch (error) {
        console.error("Error fetching all the prompts");
        return new Response("Error fetching all the prompts.", {status:500}) 
    }
}